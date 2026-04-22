/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, ShoppingCart, ChevronDown, User, Search, Home, ClipboardList, MessageCircle, Heart, Star, ShieldCheck, Wifi, Coffee, Wind, Users, Users2, Gem, Utensils, Phone, Tv, Shield, Tablet, WashingMachine, Camera, X } from 'lucide-react';
import { motion } from 'motion/react';
import { RoomType, Category, Promotion } from './types.ts';

// --- Mock Data ---

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Girls Only', icon: 'Heart', bgColor: 'bg-pink-50 text-pink-600' },
  { id: '2', name: 'Single Room', icon: 'User', bgColor: 'bg-blue-50 text-blue-600' },
  { id: '3', name: 'Luxury PG', icon: 'Gem', bgColor: 'bg-yellow-50 text-yellow-600' },
  { id: '4', name: 'With Food', icon: 'Utensils', bgColor: 'bg-red-50 text-red-600' },
  { id: '5', name: 'Double Sharing', icon: 'Users', bgColor: 'bg-green-50 text-green-600' },
  { id: '6', name: 'AC Rooms', icon: 'Wind', bgColor: 'bg-cyan-50 text-cyan-600' },
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'p1',
    title: 'Exotica Girls PG',
    subtitle: 'Premium living for girls in Indirapuram. 24/7 Security & CCTV.',
    cta: 'Call Now',
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=400',
    color: 'bg-pink-600',
  },
  {
    id: 'p2',
    title: 'Zero Deposit PGs',
    subtitle: 'Limited time offer on select premium rooms.',
    cta: 'Book Now',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400',
    color: 'bg-purple-600',
  }
];

export const FEATURED_ROOMS: RoomType[] = [
  {
    id: 'ex-01',
    name: 'Exotica Premium Single',
    locality: 'Niti Khand 2, Indirapuram',
    phone: '8860002223',
    price: 9500,
    rating: 5.0,
    reviews: 42,
    sharingType: 'Single',
    isGirlsOnly: true,
    image: "https://iili.io/B4lFEVp.png",
    description: '',
    amenities: [],
  },
  {
    id: 'ex-02',
    name: 'Exotica Deluxe Double',
    locality: 'Niti Khand 2, Indirapuram',
    phone: '8860002223',
    price: 8500,
    rating: 4.9,
    reviews: 38,
    sharingType: 'Double',
    isGirlsOnly: true,
    image: "https://iili.io/B4l3yNf.png",
    description: '',
    amenities: [],
  },
  {
    id: 'ex-03',
    name: 'Exotica Luxury Suite',
    locality: 'Niti Khand 2, Indirapuram',
    phone: '8860002223',
    price: 12000,
    rating: 5.0,
    reviews: 15,
    sharingType: 'Single',
    isGirlsOnly: true,
    image: "https://iili.io/B4lKAX4.png",
    description: '',
    amenities: [],
  },
  {
    id: 'ex-04',
    name: 'Exotica Classic Sharing',
    locality: 'Niti Khand 2, Indirapuram',
    phone: '8860002223',
    price: 7500,
    rating: 4.7,
    reviews: 56,
    sharingType: 'Double',
    isGirlsOnly: true,
    image: "https://iili.io/B4lFiOb.png",
    description: '',
    amenities: [],
  },
  {
    id: 'ex-05',
    name: 'Exotica Budget Unit',
    locality: 'Niti Khand 2, Indirapuram',
    phone: '8860002223',
    price: 6500,
    rating: 4.5,
    reviews: 24,
    sharingType: 'Triple',
    isGirlsOnly: true,
    image: "https://iili.io/B4l3S8g.png",
    description: '',
    amenities: [],
  }
];

// --- Components ---

export const TopBar = () => (
  <div className="flex items-center justify-between px-5 py-4 bg-white sticky top-0 z-50">
    <div className="flex items-center gap-1.5 cursor-pointer">
      <div className="p-1.5 bg-blue-50 rounded-lg">
        <MapPin size={18} className="text-primary" />
      </div>
      <div>
        <div className="flex items-center gap-1 text-sm font-bold">
          Indirapuram <ChevronDown size={14} className="text-muted" />
        </div>
        <div className="text-[10px] text-muted font-medium">Ghaziabad, UP</div>
      </div>
    </div>
    <div className="p-2 bg-slate-50 rounded-full border border-slate-100">
      <ShoppingCart size={20} className="text-secondary" />
    </div>
  </div>
);

export const SearchBar = () => (
  <div className="px-5 py-2">
    <div className="relative group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
      <input 
        type="text" 
        placeholder='Search for Exotica, Indirapuram...' 
        className="w-full bg-surface border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm"
      />
    </div>
  </div>
);

import React, { useState, useEffect, useCallback } from 'react';

// Provided by user - Integrated with direct CDN links for rendering
export const HEADER_IMAGES = [
  "https://iili.io/B4lB9d7.png",
  "https://iili.io/B4lBQv1.png",
  "https://iili.io/B4lCW91.png",
  "https://iili.io/B4lCg9t.png",
  "https://iili.io/B4lnBHP.png",
];

export const BrandedHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HEADER_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="px-5 pt-4 pb-2">
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl shadow-pink-600/10 bg-slate-100 group">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {HEADER_IMAGES.map((img, i) => (
            <div key={i} className="flex-none w-full h-full">
              <img 
                src={img} 
                alt={`Premium showcase ${i + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
          <motion.div
             key={currentIndex}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded-lg border border-white/20 w-fit mb-2">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Premium Living</span>
            </div>
            <h1 className="text-2xl font-black text-white leading-tight">EXOTICA GIRLS PG</h1>
            <p className="text-white/70 text-xs mt-1">Indirapuram's Most Trusted Accommodation</p>
          </motion.div>
        </div>

        {/* Pagination Indicators */}
        <div className="absolute bottom-6 right-6 flex gap-1.5">
          {HEADER_IMAGES.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const GalleryHeader = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % 4);
    }, 30000); // 30 seconds as requested
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-6 pb-4 bg-slate-900 border-b border-slate-800 overflow-hidden">
      <div className="px-5 mb-6">
        <h2 className="text-2xl font-bold text-white mb-1">Gallery Sessions</h2>
        <p className="text-slate-400 text-xs">Exclusively exploring Exotica Girls PG spaces</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex gap-3 px-3 transition-transform duration-[1500ms] ease-in-out" 
             style={{ transform: `translateX(-${offset * 25}%)` }}>
          {[...EXOTICA_GALLERY, ...EXOTICA_GALLERY].map((img, i) => (
            <div key={i} className="flex-none w-40 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
              <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        {/* Row 2 */}
        <div className="flex gap-3 px-3 transition-transform duration-[1500ms] ease-in-out" 
             style={{ transform: `translateX(-${(3 - offset) * 25}%)` }}>
          {[...HEADER_IMAGES, ...HEADER_IMAGES].map((img, i) => (
            <div key={i} className="flex-none w-56 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
              <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        {/* Row 3 */}
        <div className="flex gap-3 px-3 transition-transform duration-[1500ms] ease-in-out" 
             style={{ transform: `translateX(-${((offset + 2) % 4) * 25}%)` }}>
          {[...EXOTICA_GALLERY.reverse(), ...EXOTICA_GALLERY].map((img, i) => (
            <div key={i} className="flex-none w-32 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
              <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pt-8">
        <div className="flex gap-2">
            <a 
              href="tel:8860002223"
              className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-pink-600/20 active:scale-95 transition-transform"
            >
              <Phone size={18} /> Book Your Room
            </a>
        </div>
      </div>
    </div>
  );
};

export const LocationSection = () => (
  <div className="px-5 py-8 space-y-6 bg-white border-b border-slate-100">
    <div>
       <h3 className="text-xl font-bold text-slate-800 mb-2">Location</h3>
       <p className="text-xs text-muted font-medium uppercase tracking-widest flex items-center gap-2">
         <MapPin size={12} className="text-primary" /> Reach Us
       </p>
    </div>

    <a 
      href="https://maps.google.com/?q=House+no+-143,+near+avantika+hospital,+Mayur+Vihar,+Niti+Khand+2,+Indirapuram,+Ghaziabad,+Uttar+Pradesh+201014"
      target="_blank"
      rel="noreferrer"
      className="block p-5 bg-slate-50 rounded-3xl border border-slate-100 group transition-all hover:bg-blue-50/50 hover:border-blue-100"
    >
       <div className="flex items-start justify-between mb-4">
         <div className="p-3 bg-white rounded-2xl shadow-sm">
           <MapPin size={24} className="text-primary" />
         </div>
         <div className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-primary border border-blue-50 shadow-sm">
           Open in Maps
         </div>
       </div>
       <h4 className="text-lg font-bold text-slate-800 mb-1">Exotica Girls PG</h4>
       <p className="text-sm text-slate-600 leading-relaxed mb-4">
         House no -143, near avantika hospital, Mayur Vihar, Niti Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014
       </p>
       <div className="flex items-center gap-2 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
         Get Directions <ChevronDown className="-rotate-90" size={14} />
       </div>
    </a>

    <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm h-64 bg-slate-100">
       <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.164741363651!2d77.3712396!3d28.6247966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfac500000001%3A0xe7a561136bdf4b4b!2sNiti+Khand+2%2C+Indirapuram%2C+Ghaziabad%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000" 
         width="100%" 
         height="100%" 
         style={{ border: 0 }} 
         allowFullScreen 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"
       />
    </div>
  </div>
);

const IconMap: { [key: string]: any } = {
  User,
  Users,
  Users2,
  Gem,
  Utensils,
  Wind,
  Heart
};

export const CategoryGrid = () => (
  <div className="px-5 py-6">
    <h3 className="text-lg font-bold mb-4 px-1">Find your space</h3>
    <div className="grid grid-cols-3 gap-y-6 gap-x-4">
      {CATEGORIES.map((cat, idx) => {
        const Icon = IconMap[cat.icon];
        return (
          <motion.div 
            key={cat.id} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col items-center gap-3"
          >
            <div className={`${cat.bgColor} w-full aspect-square rounded-2xl flex items-center justify-center shadow-sm border border-transparent hover:border-current/10 transition-all cursor-pointer`}>
              {Icon && <Icon size={24} />}
            </div>
            <span className="text-[11px] font-bold text-center leading-tight">{cat.name}</span>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export const InquiryModal = ({ room, isOpen, onClose }: { room: RoomType | null, isOpen: boolean, onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', moveInDate: '' });

  if (!isOpen || !room) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Exotica PG Admin!\n\nI am interested in:\nRoom: ${room.name}\nLocality: ${room.locality}\n\nMy Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nTentative Move-in: ${formData.moveInDate}\n\nPlease provide price details and more info.`;
    const whatsappUrl = `https://wa.me/918860002223?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10">
          <X size={20} className="text-slate-600" />
        </button>

        <div className="aspect-[16/9] w-full relative">
          <img src={room.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h4 className="text-white font-bold leading-tight uppercase tracking-tight">{room.name}</h4>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 ml-1">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Ex: Anjali Sharma"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 ml-1">WhatsApp Number</label>
            <input 
              required
              type="tel" 
              placeholder="Ex: 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 ml-1">Expected Move-in</label>
            <input 
              required
              type="date" 
              value={formData.moveInDate}
              onChange={(e) => setFormData({...formData, moveInDate: e.target.value})}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2"
          >
            <MessageCircle size={18} fill="white" /> Send WhatsApp Inquiry
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export const RoomCard = ({ room, onInquiry }: { room: RoomType, onInquiry: (room: RoomType) => void }) => (
  <motion.div 
    whileTap={{ scale: 0.98 }}
    className="flex flex-col gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm mb-4 cursor-pointer overflow-hidden"
  >
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden -mx-1 -mt-1 mb-1">
      <img src={room.image} alt={room.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      
      {room.isGirlsOnly && (
        <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 shadow-lg">
          <Heart size={10} fill="white" /> GIRLS ONLY
        </div>
      )}

      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
        <Star size={12} className="fill-yellow-400 text-yellow-400" />
        <span className="text-[10px] font-bold">{room.rating}</span>
      </div>
    </div>
    
    <div>
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-bold truncate pr-4">{room.name}</h4>
        <div className="text-primary font-bold text-[10px] whitespace-nowrap uppercase tracking-tighter bg-primary/5 px-2 py-1 rounded-md">Inquire for price</div>
      </div>
      
      <div className="flex items-center justify-between pt-3 border-t border-slate-50">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-green-500" />
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">Verified</span>
        </div>
        
        <div className="flex items-center gap-2">
           {room.phone && (
             <a 
               href={`tel:${room.phone}`}
               onClick={(e) => e.stopPropagation()}
               className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
             >
               <Phone size={16} />
             </a>
           )}
           <button 
             onClick={(e) => {
               e.stopPropagation();
               onInquiry(room);
             }}
             className="text-[11px] font-bold text-white px-5 py-2.5 bg-pink-600 rounded-xl shadow-lg shadow-pink-600/20 active:scale-95 transition-all"
           >
             Inquiry
           </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
  "https://images.unsplash.com/photo-1626591509135-7171e523f663",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f",
  "https://images.unsplash.com/photo-1505693419171-1741376035f4",
  "https://images.unsplash.com/photo-1512918766671-ed6a07be0618",
  "https://images.unsplash.com/photo-1555819232-6784fe81f4a8",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
];

// Provided by user - Integrated with direct CDN links for rendering
export const EXOTICA_GALLERY = [
  "https://iili.io/B4lKAX4.png",
  "https://iili.io/B4l3S8g.png",
  "https://iili.io/B4l3yNf.png",
  "https://iili.io/B4lFCAb.png",
  "https://iili.io/B4lFiOb.png",
  "https://iili.io/B4lFEVp.png",
  "https://iili.io/B4lFvWl.png",
  "https://iili.io/B4lKKsp.png",
  "https://iili.io/B4lB9d7.png",
  "https://iili.io/B4lBQv1.png",
  "https://iili.io/B4lCW91.png",
  "https://iili.io/B4lCg9t.png",
  "https://iili.io/B4lnBHP.png",
];

export const GallerySection = () => {
  return (
    <div className="py-6 overflow-hidden bg-slate-50/50 border-t border-b border-slate-100">
      <div className="flex items-center justify-between px-5 mb-4">
        <div>
          <h3 className="text-lg font-bold">Property Selection</h3>
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Recommended for you</p>
        </div>
        <div className="px-2 py-1 bg-white rounded-lg border border-slate-100 shadow-sm">
           <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">{EXOTICA_GALLERY.length} Rooms</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Row 1: Portrait variant */}
        <div className="flex gap-4 overflow-x-auto px-5 no-scrollbar cursor-grab active:cursor-grabbing">
          {EXOTICA_GALLERY.slice(0, 4).map((img, i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.98 }}
              className="flex-none w-44"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-white mb-2">
                <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="px-1">
                <div className="text-[10px] font-bold text-slate-800">Deluxe Unit {i+1}</div>
                <div className="text-[9px] font-bold text-primary uppercase tracking-tighter">Inquire for Price</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Row 2: Landscape variant */}
        <div className="flex gap-4 overflow-x-auto px-5 no-scrollbar cursor-grab active:cursor-grabbing">
          {EXOTICA_GALLERY.slice(4).reverse().map((img, i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.98 }}
              className="flex-none w-64"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-sm border border-white mb-2">
                <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="px-1 flex justify-between items-center">
                <div className="text-[10px] font-bold text-slate-800">Premium Suite {i+5}</div>
                <div className="text-[9px] font-bold text-primary uppercase tracking-tighter">Inquire for Price</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FloatingActions = () => (
  <div className="fixed bottom-24 right-5 flex flex-col gap-3 z-[60]">
    <motion.a 
      href="https://wa.me/918860002223"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
    <motion.a 
      href="tel:8860002223"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30"
    >
      <Phone size={28} fill="currentColor" />
    </motion.a>
  </div>
);

export const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => (
  <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-16 bg-white border-t border-slate-100 flex items-center justify-around px-4 z-50">
    {[
      { icon: Home, label: 'Home' },
      { icon: ClipboardList, label: 'Bookings' },
      { icon: Tablet, label: 'Gallery' }
    ].map((item) => {
      const isActive = activeTab === item.label;
      return (
        <button 
          key={item.label} 
          onClick={() => setActiveTab(item.label)}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <item.icon size={20} className={isActive ? "text-primary transition-colors" : "text-muted transition-colors"} />
          <span className={`text-[9px] font-bold ${isActive ? "text-primary" : "text-muted"}`}>{item.label}</span>
        </button>
      );
    })}
  </div>
);
