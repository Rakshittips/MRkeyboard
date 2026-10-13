import React from 'react';
import {
  Droplet,
  Mic,
  Palette,
  Languages,
  Volume2,
  Smile,
  StickyNote,
  ClipboardList,
  Hand,
  Sliders,
  Menu,
  Wand2,
  Download,
} from 'lucide-react';
import { downloadEmojiFont, downloadMemojiPack } from '../utils/downloadHelper';

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 border-t border-white/8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-['Syne',sans-serif] font-extrabold text-3xl sm:text-5xl tracking-tight text-white leading-tight mb-3">
            An iPhone keyboard you can tune to your taste
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Everything below is in the app&apos;s settings today.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 (Big): Liquid Glass keyboard */}
          <div className="lg:col-span-2 rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Liquid Glass keyboard
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
              The iOS 26 look: translucent keys over a blurred background. Slide glass clarity from frosted to see-through, and choose Normal or Bold iOS font with real-time backdrop blur physics.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-pink-300">
              <span className="bg-white/8 px-3 py-1.5 rounded-full border border-white/10">Frosted 20% to Transparent 100%</span>
              <span className="bg-white/8 px-3 py-1.5 rounded-full border border-white/10">Normal & Bold SF Pro Font</span>
              <span className="bg-white/8 px-3 py-1.5 rounded-full border border-white/10">Backdrop Filter Blur</span>
            </div>
          </div>

          {/* Card 2: Voice typing */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-rose-500/30 group-hover:scale-105 transition-transform">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Voice typing
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Tap the mic key and talk. Allow microphone access once during setup for seamless, accurate voice dictation right on your Android device.
            </p>
          </div>

          {/* Card 3: 8 themes */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              8 themes
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Liquid Glass, Transparent Blur, Dark, Light, White, Black, Blue and Pink.
            </p>
            <div className="flex items-center gap-1.5">
              {['#8b5cf6', '#64748b', '#18181b', '#f1f5f9', '#ffffff', '#000000', '#0284c7', '#ec4899'].map((c, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border border-white/30"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Card 4 (Big): 9 keyboard languages */}
          <div className="lg:col-span-2 rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Languages className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              9 keyboard languages
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
              Switch languages from the globe key. Hold a Latin letter for accents like á, é and ï. Mandarin uses Pinyin, Japanese Romaji, Korean Hangul 2-set and Hindi Inscript.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { name: 'English', flag: '🇺🇸' },
                { name: 'Indonesia', flag: '🇮🇩' },
                { name: 'Español', flag: '🇪🇸' },
                { name: 'Русский', flag: '🇷🇺' },
                { name: 'العربية', flag: '🇸🇦' },
                { name: 'हिन्दी', flag: '🇮🇳' },
                { name: '한국어', flag: '🇰🇷' },
                { name: '日本語', flag: '🇯🇵' },
                { name: '中文 (拼音)', flag: '🇨🇳' },
              ].map((lang, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/8 border border-white/12 text-white/90"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: Typing sound and haptics */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Typing sound and haptics
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Key click and vibration, each with its own switch. Set the click volume with an intuitive slider to get that crisp iOS sound.
            </p>
          </div>

          {/* Card 6 (Big): iOS emoji */}
          <div className="lg:col-span-2 rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-yellow-500/30 group-hover:scale-105 transition-transform">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              iOS emoji
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5">
              Pick your own emoji font file (.ttf) to show iPhone-style emoji in the emoji panel. Remove it to go back to Android emoji anytime.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={downloadEmojiFont}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-pink-300" />
                <span>iOS Emoji (.ttf)</span>
              </button>
              <button
                onClick={downloadMemojiPack}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-purple-300" />
                <span>Memoji iOS (.zip)</span>
              </button>
            </div>
          </div>

          {/* Card 7: Custom stickers */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-105 transition-transform">
              <StickyNote className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Custom stickers
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Add stickers from your gallery or files, or share them directly from WhatsApp and Telegram into your keyboard drawer.
            </p>
          </div>

          {/* Card 8: Clipboard history */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Clipboard history
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Saved only on your phone. Sensitive text such as passwords is not saved. Clear it any time with a single tap.
            </p>
          </div>

          {/* Card 9: One-handed mode */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <Hand className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              One-handed mode
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Switch between left, normal and right layouts from the long-press menu to comfortably reach all keys on large displays.
            </p>
          </div>

          {/* Card 10: Size controls */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-400 to-emerald-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Size controls
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Set keyboard height, side spacing, bottom spacing and corner roundness, then easily reset to default whenever you want.
            </p>
          </div>

          {/* Card 11: Long-press menu */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-fuchsia-500 to-pink-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-fuchsia-500/30 group-hover:scale-105 transition-transform">
              <Menu className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Long-press menu
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Hold the bottom-left key for keyboard settings, language, Emoji and Memoji, clipboard and one-handed mode. You choose how long to hold.
            </p>
          </div>

          {/* Card 12: Autocorrect */}
          <div className="rounded-3xl p-7 bg-white/5 border border-white/12 backdrop-blur-xl shadow-xl hover:bg-white/[0.07] transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
              <Wand2 className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
              Autocorrect
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Turn autocorrect on or off. Use the interactive &quot;Try keyboard&quot; simulator to test all your changes live before installing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
