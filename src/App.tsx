/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import { TopBar, BrandedHero, GalleryHeader, LocationSection, CategoryGrid, BottomNav, RoomCard, FEATURED_ROOMS, GallerySection, EXOTICA_GALLERY, FloatingActions, InquiryModal } from './components.tsx';
import { motion } from 'motion/react';
import { RoomType } from './types.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  const renderContent = () => {
    if (activeTab === 'Gallery') {
      return (
        <div className="pt-4 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
           <GallerySection />
           <div className="px-5 py-4 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Interior Collection</h4>
                <p className="text-[10px] text-muted leading-relaxed">Browsing high-resolution images of Exotica Girls PG. Every corner designed for comfort.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 {EXOTICA_GALLERY.slice(0, 6).map((img, i) => (
                   <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                   >
                     <img 
                      src={img} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                     />
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      );
    }

    if (activeTab === 'Bookings') {
      return (
        <div className="px-5 py-8 text-center pt-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <ClipboardList size={32} />
          </div>
          <h3 className="text-lg font-bold mb-2">No active bookings</h3>
          <p className="text-xs text-muted max-w-[200px] mx-auto">You haven't made any bookings yet. Start exploring our premium rooms.</p>
        </div>
      );
    }

    return (
      <main className="relative z-10 animate-in fade-in duration-500">
        {/* Visual Branded Header */}
        <BrandedHero />

        {/* 1. Find your place session */}
        <CategoryGrid />
        
        {/* 2. Rooms session */}
        <div className="px-5 py-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold tracking-tight">Rooms</h3>
            <button className="text-[11px] font-bold text-primary px-3 py-1 bg-blue-50 rounded-full">See All</button>
          </div>
          <div className="space-y-4">
            {FEATURED_ROOMS.map((room, idx) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
              >
                <RoomCard room={room} onInquiry={(r) => setSelectedRoom(r)} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Gallery Sessions Header (Moved under Rooms) */}
        <GalleryHeader />

        {/* 4. Location (Mapping) Section */}
        <LocationSection />
        
        {/* Simple Footer */}
        <div className="px-5 py-12 text-center text-[10px] text-muted opacity-50">
          © 2024 UrbanStay Indirapuram. All rights reserved.
        </div>
      </main>
    );
  };

  return (
    <div className="mobile-container pb-24 min-h-screen bg-[#F8FAFC]">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />

      <TopBar />
      
      {renderContent()}

      <InquiryModal 
        room={selectedRoom} 
        isOpen={!!selectedRoom} 
        onClose={() => setSelectedRoom(null)} 
      />

      <FloatingActions />
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

