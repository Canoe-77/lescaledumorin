export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  highlight?: boolean; // For visual emphasis
  imageUrl?: string;
  imageFit?: 'cover' | 'contain';
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  hidePhotos?: boolean;
}

export interface BusinessInfo {
  phone: string;
  phoneDisplay: string;
  address: string;
  googleMapsUrl: string;
  hours: string[];
  dates: string;
}