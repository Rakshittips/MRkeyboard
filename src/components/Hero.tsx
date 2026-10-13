import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { downloadApk } from '../utils/downloadHelper';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
      {/* Background ambient liquid orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] bg-gradient-to-tr from-purple-600/30 via-pink-600/25 to-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <h1 className="font-['Syne',sans-serif] font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] mb-6 text-white">
          The iOS 26 keyboard,{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block sm:inline">
            on your Android.
          </span>
        </h1>

        {/* Lead subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
          Liquid Glass keys, 9 languages, 8 themes, typing sound and voice typing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            onClick={downloadApk}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Download APK</span>
          </button>

          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white bg-white/8 hover:bg-white/14 border border-white/15 backdrop-blur-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            See features
          </a>
        </div>

        {/* Meta text with typographic separators and check icons */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs sm:text-sm text-white/60 font-medium">
          <span className="inline-flex items-center gap-1.5 text-white/80">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            9 languages
          </span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="inline-flex items-center gap-1.5 text-white/80">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            8 themes
          </span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="inline-flex items-center gap-1.5 text-white/80">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            Android 8.0+
          </span>
        </div>
      </div>
    </header>
  );
};
