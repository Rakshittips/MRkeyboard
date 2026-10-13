import React from 'react';
import { Keyboard, ExternalLink } from 'lucide-react';
import { downloadApk } from '../utils/downloadHelper';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#07040d] text-center select-none">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 p-[1px] shadow-sm">
            <div className="w-full h-full bg-[#0a0612] rounded-[7px] flex items-center justify-center text-white">
              <Keyboard className="w-4 h-4 text-pink-300" />
            </div>
          </div>
          <span className="font-['Syne',sans-serif] font-bold text-lg text-white tracking-tight">
            MRkeyboard
          </span>
        </div>

        {/* Made with 💗 by Rakshittips (Mr_Rakshit_2.0) */}
        <p className="text-sm text-white/75 font-normal">
          Made with 💗 by{' '}
          <a
            href="https://rakshittips.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-pink-300 transition-colors underline decoration-white/30 underline-offset-4"
          >
            Rakshittips
          </a>{' '}
          <span className="text-white/50">(Mr_Rakshit_2.0)</span>
        </p>

        {/* Navigation Links: Features · Download APK · Setup Guide */}
        <div className="flex items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-white/70 pt-1">
          <a
            href="#features"
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <span aria-hidden="true" className="text-white/20 select-none">·</span>
          <button
            onClick={downloadApk}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Download APK
          </button>
          <span aria-hidden="true" className="text-white/20 select-none">·</span>
          <a
            href="#download"
            className="hover:text-white transition-colors"
          >
            Setup Guide
          </a>
        </div>

        {/* Rakshittips by developer */}
        <div className="pt-2">
          <a
            href="https://rakshittips.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-pink-300 hover:text-pink-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/12 px-4 py-1.5 rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <span>Rakshittips by developer</span>
            <ExternalLink className="w-3 h-3 text-pink-300/80" />
          </a>
        </div>
      </div>
    </footer>
  );
};
