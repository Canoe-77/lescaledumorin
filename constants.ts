import { BusinessInfo, MenuCategory } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  phone: "0782869242",
  phoneDisplay: "07 82 86 92 42",
  address: "Rue de la Pommeraie, 77580 Guérard",
  googleMapsUrl: "https://maps.app.goo.gl/P2otK138B8Dfww7g8?g_st=com.google.maps.preview.copy",
  hours: [
    "Samedi : 12h00 - 17h30",
    "Dimanche : 12h00 - 17h30",
    "Jours Fériés : 12h00 - 17h30"
  ],
  dates: "Du 1er Mai au 30 Septembre"
};

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Poulet Braisé en Crapaudine",
    items: [
      {
        id: "poulet-entier",
        name: "Poulet Entier (~1kg)",
        description: "Poulet entier braisé, mariné maison et grillé au feu, idéal pour 2 à 3 personnes.",
        price: "15,90 €",
        highlight: true,
        imageUrl: "https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770745800/ChatGPT_Image_10_fe%CC%81vr._2026_18_46_36_wetpzx.png"
      },
      {
        id: "demi-poulet",
        name: "1/2 Poulet",
        description: "Idéal pour une personne gourmande",
        price: "8,00 €",
        imageUrl: "https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770749269/ChatGPT_Image_10_fe%CC%81vr._2026_19_46_47_rlze6d.png"
      }
    ]
  },
  {
    title: "Pilons Braisés",
    items: [
      { 
        id: "pilon-3", 
        name: "3 x Pilons", 
        description: "3 pilons de poulet braisés, marinés maison et grillés au feu.",
        price: "6,00 €",
        imageUrl: "https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770746189/ChatGPT_Image_10_fe%CC%81vr._2026_18_56_06_skmoq9.png",
        imageFit: 'contain'
      },
      { 
        id: "pilon-5", 
        name: "5 x Pilons", 
        description: "5 pilons de poulet braisés, bien dorés et juteux.",
        price: "9,00 €",
        imageUrl: "https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770746531/ChatGPT_Image_10_fe%CC%81vr._2026_19_02_01_bsv3b1.png",
        imageFit: 'contain'
      },
      { 
        id: "pilon-7", 
        name: "7 x Pilons", 
        description: "7 pilons de poulet braisés, marinés et grillés pour les gros appétits",
        price: "12,00 €",
        imageUrl: "https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770746087/ChatGPT_Image_10_fe%CC%81vr._2026_18_54_08_we7mdr.png",
        imageFit: 'contain'
      }
    ]
  },
  {
    title: "Accompagnements",
    items: [
      {
        id: "frites",
        name: "Frites Maison",
        description: "Portion de frites maison, dorées et croustillantes. ≈ 200 g",
        price: "3,90 €",
        highlight: true,
        imageUrl: "https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770748584/ChatGPT_Image_10_fe%CC%81vr._2026_19_35_58_mbz8uo.png",
        imageFit: 'contain'
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      { 
        id: "glace", 
        name: "Glace Magnum", 
        price: "3,00 €", 
        imageUrl: "https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770747927/big_3_21352753_owq2ow.png",
        imageFit: 'contain'
      }
    ]
  },
  {
    title: "Boissons Fraîches",
    hidePhotos: true,
    items: [
      { 
        id: "soda", 
        name: "Sodas (33cl)", 
        price: "2,00 €",
        description: "Coca-Cola, Coca-Cola Zero, Orangina, Oasis, Ice Tea, Perrier"
      },
      { id: "eau", name: "Eau (50cl)", price: "1,00 €" },
      { id: "jus", name: "Jus de fruit", price: "2,50 €" },
      { id: "redbull", name: "Red Bull", price: "3,00 €" },
      { id: "heineken", name: "Bière Heineken (25cl)", price: "3,00 €" },
      { id: "despe", name: "Bière Desperados (25cl)", price: "4,00 €" },
      { id: "vin", name: "Vin Rosé / Blanc (12cl)", price: "4,00 €" }
    ]
  },
  {
    title: "Boissons Chaudes",
    hidePhotos: true,
    items: [
      { id: "cafe", name: "Café Bio", price: "2,00 €" },
      { id: "the", name: "Thé Bio", price: "2,50 €" }
    ]
  }
];