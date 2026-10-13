import React from 'react';
import {
  Download,
  Smile,
  FileArchive,
} from 'lucide-react';
import {
  downloadApk,
  downloadEmojiFont,
  downloadMemojiPack,
} from '../utils/downloadHelper';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-16 sm:py-24 border-t border-white/8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-7 sm:p-11 rounded-[36px] bg-gradient-to-br from-purple-900/25 via-pink-900/20 to-orange-950/15 border border-white/14 backdrop-blur-2xl">
          {/* Left Column: Headline, Download buttons, Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-['Syne',sans-serif] font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Get MRkeyboard
              </h2>
              <p className="text-white/60 text-base max-w-xl">
                Download the APK, install it, then turn it on in your keyboard settings.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={downloadApk}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-xl shadow-pink-500/35 hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </button>

              <button
                onClick={downloadEmojiFont}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/8 hover:bg-white/16 border border-white/14 backdrop-blur-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Smile className="w-4 h-4 text-pink-300" />
                <span>iOS Emojis (.ttf)</span>
              </button>

              <button
                onClick={downloadMemojiPack}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/8 hover:bg-white/16 border border-white/14 backdrop-blur-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileArchive className="w-4 h-4 text-orange-300" />
                <span>Memoji iOS (.zip)</span>
              </button>
            </div>

            {/* Steps */}
            <div className="text-sm text-white/60 pt-2 space-y-2">
              <div className="font-medium text-white/80">After downloading:</div>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-white/65 leading-relaxed">
                <li>Open the APK and allow installs from this source.</li>
                <li>Open MRkeyboard and tap Open to turn the keyboard on.</li>
                <li>Tap Select to make it your active keyboard.</li>
                <li>Tap Allow to give microphone access for voice typing.</li>
                <li>Optional: allow Display over other apps for the pop-up that floats above other apps.</li>
                <li>Optional: for iOS emoji, download the .ttf file, then in MRkeyboard tap Pick emoji font file (.ttf) and choose it.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Clean Facts Table matching user's original HTML */}
          <div className="lg:col-span-5 w-full">
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between py-3.5 px-4.5 rounded-2xl bg-[#0a0612]/50 border border-white/14">
                <span className="text-white/60">Version</span>
                <span className="font-semibold text-white">1.0</span>
              </li>
              <li className="flex items-center justify-between py-3.5 px-4.5 rounded-2xl bg-[#0a0612]/50 border border-white/14">
                <span className="text-white/60">Size</span>
                <span className="font-semibold text-white">— MB</span>
              </li>
              <li className="flex items-center justify-between py-3.5 px-4.5 rounded-2xl bg-[#0a0612]/50 border border-white/14">
                <span className="text-white/60">Requires</span>
                <span className="font-semibold text-white">Android 8.0+</span>
              </li>
              <li className="flex items-center justify-between py-3.5 px-4.5 rounded-2xl bg-[#0a0612]/50 border border-white/14">
                <span className="text-white/60">Developer</span>
                <span className="font-semibold text-white">Mr_Rakshit_2.0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
