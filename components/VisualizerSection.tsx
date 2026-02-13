import React, { useState, useEffect } from 'react';
import { RefreshCw, Plus, Minus, ShoppingBag, MessageCircle, Check, Calendar, Clock, User, AlertCircle } from 'lucide-react';

// Prices
const ITEM_PRICES = {
  chicken: 15.90,
  halfChicken: 8.00,
  pilons: 6.00,
  pilons5: 9.00,
  pilons7: 12.00,
  fries: 3.90
};

// Descriptions
const ITEM_DESCRIPTIONS = {
  chicken: "Mariné maison et grillé au feu, idéal pour 2-3 pers.",
  halfChicken: "Idéal pour une personne gourmande.",
  pilons: "3 pilons braisés, marinés maison et grillés au feu.",
  pilons5: "5 pilons braisés, bien dorés et juteux.",
  pilons7: "7 pilons braisés, pour les gros appétits.",
  fries: "Frites maison, dorées et croustillantes (≈ 200g)."
};

interface VisualizerState {
  chicken: number;
  halfChicken: number;
  pilons: number;
  pilons5: number;
  pilons7: number;
  fries: number;
}

// Fixed holidays (DD/MM)
const FIXED_HOLIDAYS = ['01/05', '08/05', '14/07', '15/08'];
// Variable holidays need manual update per year if strictly required, keeping it simple for now or adding specific 2025/2026 dates if known.
// For this snippet, we will stick to fixed holidays + weekends as primary logic.

const TIME_SLOTS = [
  "12:00", "12:15", "12:30", "12:45",
  "13:00", "13:15", "13:30", "13:45",
  "14:00", "14:15", "14:30", "14:45",
  "15:00", "15:15", "15:30", "15:45",
  "16:00", "16:15", "16:30", "16:45",
  "17:00", "17:15", "17:30"
];

export const VisualizerSection: React.FC = () => {
  const [items, setItems] = useState<VisualizerState>({
    chicken: 0,
    halfChicken: 0,
    pilons: 0,
    pilons5: 0,
    pilons7: 0,
    fries: 0
  });
  
  // User Details State
  const [firstName, setFirstName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderTime, setOrderTime] = useState('');
  
  // Feedback State
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  // Dynamic Year range
  const currentYear = new Date().getFullYear();
  const minDate = `${currentYear}-05-01`;
  const maxDate = `${currentYear}-09-30`;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  };

  const totalPrice = (items.chicken * ITEM_PRICES.chicken) + 
                     (items.halfChicken * ITEM_PRICES.halfChicken) +
                     (items.pilons * ITEM_PRICES.pilons) + 
                     (items.pilons5 * ITEM_PRICES.pilons5) + 
                     (items.pilons7 * ITEM_PRICES.pilons7) + 
                     (items.fries * ITEM_PRICES.fries);

  const updateCount = (key: keyof VisualizerState, delta: number) => {
    setItems(prev => {
      const newVal = prev[key] + delta;
      if (newVal < 0) return prev;
      return { ...prev, [key]: newVal };
    });
  };

  const reset = () => {
    setItems({ chicken: 0, halfChicken: 0, pilons: 0, pilons5: 0, pilons7: 0, fries: 0 });
    setFirstName('');
    setOrderDate('');
    setOrderTime('');
    setDateError(null);
  };

  const validateDate = (dateStr: string) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    const day = d.getDay(); // 0 = Sunday, 6 = Saturday
    
    const formattedDayMonth = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
    
    const isWeekend = day === 0 || day === 6;
    const isHoliday = FIXED_HOLIDAYS.includes(formattedDayMonth);

    // Ascension / Pentecost logic could be added here if needed strictly
    
    if (!isWeekend && !isHoliday) {
      setDateError("Ouvert uniquement Samedi, Dimanche et Jours Fériés.");
      return false;
    }
    setDateError(null);
    return true;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setOrderDate(val);
    validateDate(val);
  };

  const handleWhatsApp = async () => {
    // Basic validation
    let hasError = false;
    if (!firstName.trim()) { alert("Merci d'indiquer votre prénom."); hasError = true; }
    if (!orderDate) { alert("Merci de choisir une date."); hasError = true; }
    else if (!validateDate(orderDate)) { alert("La date choisie n'est pas valide (Sam/Dim/Fériés uniquement)."); hasError = true; }
    if (!orderTime) { alert("Merci de choisir une heure."); hasError = true; }

    if (hasError) return;

    const parts = [];
    if (items.chicken > 0) parts.push(`- ${items.chicken}x Poulet Entier`);
    if (items.halfChicken > 0) parts.push(`- ${items.halfChicken}x 1/2 Poulet`);
    if (items.pilons > 0) parts.push(`- ${items.pilons}x 3 x Pilons`);
    if (items.pilons5 > 0) parts.push(`- ${items.pilons5}x 5 x Pilons`);
    if (items.pilons7 > 0) parts.push(`- ${items.pilons7}x 7 x Pilons`);
    if (items.fries > 0) parts.push(`- ${items.fries}x Frites Maison`);

    if (parts.length === 0) {
        alert("Votre panier est vide.");
        return;
    }

    // Format Date for message
    const d = new Date(orderDate);
    const dateFormatted = d.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const text = `Bonjour, c'est ${firstName}.\nJe souhaite commander pour le ${dateFormatted} à ${orderTime} :\n\n${parts.join('\n')}\n\nTotal estimé : ${formatPrice(totalPrice)}`;

    // 1. Copier dans le presse-papier (Backup)
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }

    // 2. Ouvrir WhatsApp
    const phoneNumber = "33782869242"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const ControlRow = ({ 
    count, 
    onUpdate, 
    label,
    description,
    price
  }: { count: number, onUpdate: (d: number) => void, label: string, description: string, price: number }) => (
    <div className={`
        flex items-center justify-between w-full p-4 rounded-sm border-2 transition-all duration-200 gap-3
        ${count > 0
          ? 'bg-white border-[#b91c1c] shadow-md' 
          : 'bg-white border-zinc-200 text-gray-700'}
      `}>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="font-heading font-bold uppercase text-black leading-tight truncate">{label}</span>
        <span className="text-sm font-bold text-[#b91c1c] mb-1">{formatPrice(price)}</span>
        <span className="text-xs text-gray-500 leading-snug">{description}</span>
      </div>
      
      <div className="flex items-center gap-3 shrink-0">
        <button 
          onClick={() => onUpdate(-1)}
          disabled={count === 0}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="font-bold text-xl w-6 text-center text-[#b91c1c]">{count}</span>
        
        <button 
          onClick={() => onUpdate(1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b91c1c] text-white hover:bg-[#991b1b] transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-[#1a1a1a] border-t border-zinc-800" id="visualizer">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase mb-2">
            Préparer ma <span className="text-[#b91c1c]">Commande</span>
          </h2>
          <p className="text-gray-400">Composez votre panier et envoyez directement votre commande sur WhatsApp.</p>
        </div>

        <div className="bg-[#111] p-6 rounded-sm border border-zinc-800 space-y-4 shadow-xl">
          <h3 className="text-white font-heading text-xl uppercase mb-4 border-b border-zinc-700 pb-2">
            Panier à emporter
          </h3>
          
          <ControlRow 
            count={items.chicken} 
            onUpdate={(d) => updateCount('chicken', d)} 
            label="Poulet Entier"
            description={ITEM_DESCRIPTIONS.chicken}
            price={ITEM_PRICES.chicken}
          />
          <ControlRow 
            count={items.halfChicken} 
            onUpdate={(d) => updateCount('halfChicken', d)} 
            label="1/2 Poulet"
            description={ITEM_DESCRIPTIONS.halfChicken}
            price={ITEM_PRICES.halfChicken}
          />
          <ControlRow 
            count={items.pilons} 
            onUpdate={(d) => updateCount('pilons', d)} 
            label="3 x Pilons"
            description={ITEM_DESCRIPTIONS.pilons}
            price={ITEM_PRICES.pilons}
          />
          <ControlRow 
            count={items.pilons5} 
            onUpdate={(d) => updateCount('pilons5', d)} 
            label="5 x Pilons"
            description={ITEM_DESCRIPTIONS.pilons5}
            price={ITEM_PRICES.pilons5}
          />
          <ControlRow 
            count={items.pilons7} 
            onUpdate={(d) => updateCount('pilons7', d)} 
            label="7 x Pilons"
            description={ITEM_DESCRIPTIONS.pilons7}
            price={ITEM_PRICES.pilons7}
          />
          <ControlRow 
            count={items.fries} 
            onUpdate={(d) => updateCount('fries', d)} 
            label="Frites Maison"
            description={ITEM_DESCRIPTIONS.fries}
            price={ITEM_PRICES.fries}
          />

          {/* Order Summary */}
          {(items.chicken > 0 || items.halfChicken > 0 || items.pilons > 0 || items.pilons5 > 0 || items.pilons7 > 0 || items.fries > 0) && (
            <div className="bg-zinc-900/50 p-4 rounded-sm border border-zinc-700 mt-4 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center mb-4 border-b border-zinc-700 pb-2">
                  <ShoppingBag className="w-4 h-4 text-[#b91c1c] mr-2" />
                  <h4 className="text-white font-heading text-md uppercase">Récapitulatif</h4>
              </div>

              {/* Input Fields */}
              <div className="space-y-4 mb-6">
                
                {/* Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Votre Prénom"
                    className="block w-full pl-10 pr-3 py-3 bg-zinc-800 border border-zinc-600 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date */}
                    <div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="date"
                                min={minDate}
                                max={maxDate}
                                value={orderDate}
                                onChange={handleDateChange}
                                className={`block w-full pl-10 pr-3 py-3 bg-zinc-800 border rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 text-sm ${dateError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-600 focus:border-[#b91c1c] focus:ring-[#b91c1c]'}`}
                            />
                        </div>
                        {dateError && (
                            <div className="flex items-center mt-1 text-red-500 text-xs">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                {dateError}
                            </div>
                        )}
                        {!dateError && (
                            <p className="text-zinc-500 text-[10px] mt-1 ml-1">Du 1er Mai au 30 Septembre (Sam/Dim/Fériés)</p>
                        )}
                    </div>

                    {/* Time */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-500" />
                        </div>
                        <select
                            value={orderTime}
                            onChange={(e) => setOrderTime(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 bg-zinc-800 border border-zinc-600 rounded-sm text-white focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c] text-sm appearance-none"
                        >
                            <option value="">Choisir l'heure</option>
                            {TIME_SLOTS.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
              </div>

              <div className="h-px bg-zinc-700 my-4"></div>

              <ul className="space-y-2 text-sm text-gray-300">
                {items.chicken > 0 && (
                  <li className="flex justify-between items-center">
                    <span>Poulet Entier</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{formatPrice(items.chicken * ITEM_PRICES.chicken)}</span>
                        <span className="font-bold text-white bg-[#b91c1c]/20 px-2 py-0.5 rounded-full text-xs border border-[#b91c1c]/40">x{items.chicken}</span>
                    </div>
                  </li>
                )}
                {items.halfChicken > 0 && (
                  <li className="flex justify-between items-center">
                    <span>1/2 Poulet</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{formatPrice(items.halfChicken * ITEM_PRICES.halfChicken)}</span>
                        <span className="font-bold text-white bg-[#b91c1c]/20 px-2 py-0.5 rounded-full text-xs border border-[#b91c1c]/40">x{items.halfChicken}</span>
                    </div>
                  </li>
                )}
                {items.pilons > 0 && (
                  <li className="flex justify-between items-center">
                    <span>3 x Pilons</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{formatPrice(items.pilons * ITEM_PRICES.pilons)}</span>
                        <span className="font-bold text-white bg-[#b91c1c]/20 px-2 py-0.5 rounded-full text-xs border border-[#b91c1c]/40">x{items.pilons}</span>
                    </div>
                  </li>
                )}
                {items.pilons5 > 0 && (
                  <li className="flex justify-between items-center">
                    <span>5 x Pilons</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{formatPrice(items.pilons5 * ITEM_PRICES.pilons5)}</span>
                        <span className="font-bold text-white bg-[#b91c1c]/20 px-2 py-0.5 rounded-full text-xs border border-[#b91c1c]/40">x{items.pilons5}</span>
                    </div>
                  </li>
                )}
                {items.pilons7 > 0 && (
                  <li className="flex justify-between items-center">
                    <span>7 x Pilons</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{formatPrice(items.pilons7 * ITEM_PRICES.pilons7)}</span>
                        <span className="font-bold text-white bg-[#b91c1c]/20 px-2 py-0.5 rounded-full text-xs border border-[#b91c1c]/40">x{items.pilons7}</span>
                    </div>
                  </li>
                )}
                {items.fries > 0 && (
                  <li className="flex justify-between items-center">
                    <span>Frites Maison</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{formatPrice(items.fries * ITEM_PRICES.fries)}</span>
                        <span className="font-bold text-white bg-[#b91c1c]/20 px-2 py-0.5 rounded-full text-xs border border-[#b91c1c]/40">x{items.fries}</span>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-4 pt-3 border-t border-zinc-700 flex justify-between items-center">
                  <span className="font-heading text-white uppercase text-sm">Total Estimé</span>
                  <span className="font-bold text-xl text-[#b91c1c]">{formatPrice(totalPrice)}</span>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-4">
                <button
                    onClick={handleWhatsApp}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-sm font-bold uppercase text-sm tracking-wider transition-all duration-200 ${
                        copyFeedback 
                        ? 'bg-[#b91c1c] text-white border border-[#b91c1c]' 
                        : 'bg-[#25D366] text-white border border-[#25D366] hover:bg-[#128C7E] hover:border-[#128C7E]'
                    }`}
                >
                    {copyFeedback ? (
                        <>
                            <Check className="w-5 h-5 mr-2" />
                            Ouverture WhatsApp...
                        </>
                    ) : (
                        <>
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Commander sur WhatsApp
                        </>
                    )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                    Le récapitulatif est aussi copié dans votre presse-papier.
                </p>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button 
              onClick={reset}
              className="w-full flex items-center justify-center px-4 py-3 bg-zinc-800 text-gray-300 hover:bg-zinc-700 rounded-sm font-bold uppercase text-sm transition-colors border border-zinc-600"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Réinitialiser
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};