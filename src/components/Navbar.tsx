import React from 'react';
import { Keyboard } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0612]/80 border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto px-5 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 text-white no-underline select-none group"
        >
          <div className="w-[38px] h-[38px] rounded-[11px] bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 p-[1px] shadow-[0_6px_18px_rgba(236,72,153,0.35)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0a0612]/60 rounded-[10px] flex items-center justify-center">
              <Keyboard className="w-[18px] h-[18px] text-white" />
            </div>
          </div>
          <span className="font-['Syne',sans-serif] font-bold text-lg sm:text-xl tracking-tight text-white whitespace-nowrap">
            MRkeyboard
          </span>
        </a>

        {/* Center links on desktop */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#download" className="hover:text-white transition-colors">
            Download
          </a>
          <a href="#install-guide" className="hover:text-white transition-colors">
            Setup Guide
          </a>
        </nav>

        {/* Right Nav Link: Single-line pristine glass pill */}
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="text-xs sm:text-sm font-semibold text-[#f6f1ff] px-4 sm:px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.14] backdrop-blur-md transition-all whitespace-nowrap shadow-sm active:scale-95 cursor-pointer"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};
