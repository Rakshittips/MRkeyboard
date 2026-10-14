/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { downloadApk, downloadEmojiFont, downloadMemojiPack } from './utils/downloadHelper';

export default function App() {
  return (
    <div className="wrap">
      {/* nav */}
      <nav>
        <a className="brand" href="#top" id="top">
          <span className="brand-icon">
            <i className="fa-solid fa-keyboard"></i>
          </span>
          <span>MRkeyboard</span>
        </a>
        <a className="nav-link" href="#download">
          Download
        </a>
      </nav>

      {/* hero */}
      <header className="hero">
        <div>
          <h1>
            The iOS 26 keyboard, <span className="g">on your Android.</span>
          </h1>
          <p className="lead">
            Liquid Glass keys, 9 languages, 8 themes, typing sound and voice typing.
          </p>
          <div className="cta-row">
            <button className="btn" onClick={downloadApk}>
              <i className="fa-brands fa-android"></i> Download APK
            </button>
            <a className="btn ghost" href="#features">
              See features
            </a>
          </div>
          <div className="meta">
            <span>
              <i className="fa-solid fa-circle-check"></i>9 languages
            </span>
            <span>
              <i className="fa-solid fa-circle-check"></i>8 themes
            </span>
            <span>
              <i className="fa-solid fa-circle-check"></i>Android 8.0+
            </span>
          </div>
        </div>
      </header>

      {/* features */}
      <section id="features">
        <div className="sec-head">
          <h2>An iPhone keyboard you can tune to your taste</h2>
          <p>Everything below is in the app&apos;s settings today.</p>
        </div>
        <div className="grid">
          <article className="card big">
            <div className="ico">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <h3>Liquid Glass keyboard</h3>
            <p>
              The iOS 26 look: translucent keys over a blurred background. Slide glass clarity from frosted to see-through, and choose Normal or Bold iOS font.
            </p>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-microphone"></i>
            </div>
            <h3>Voice typing</h3>
            <p>
              Tap the mic key and talk. Allow microphone access once during setup.
            </p>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-palette"></i>
            </div>
            <h3>8 themes</h3>
            <p>
              Liquid Glass, Transparent Blur, Dark, Light, White, Black, Blue and Pink.
            </p>
          </article>
          <article className="card big">
            <div className="ico">
              <i className="fa-solid fa-language"></i>
            </div>
            <h3>9 keyboard languages</h3>
            <p>
              Switch languages from the globe key. Hold a Latin letter for accents like á, é and ï. Mandarin uses Pinyin, Japanese Romaji, Korean Hangul 2-set and Hindi Inscript.
            </p>
            <div className="langs">
              <span>English</span>
              <span>Indonesia</span>
              <span>Español</span>
              <span>Русский</span>
              <span>العربية</span>
              <span>हिन्दी</span>
              <span>한국어</span>
              <span>日本語</span>
              <span>中文 (拼音)</span>
            </div>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-volume-high"></i>
            </div>
            <h3>Typing sound and haptics</h3>
            <p>
              Key click and vibration, each with its own switch. Set the click volume with a slider.
            </p>
          </article>
          <article className="card big">
            <div className="ico">
              <i className="fa-solid fa-face-smile"></i>
            </div>
            <h3>iOS emoji</h3>
            <p>
              Pick your own emoji font file (.ttf) to show iPhone-style emoji in the emoji panel. Remove it to go back to Android emoji.
            </p>
            <button className="btn ghost small" onClick={downloadEmojiFont}>
              <i className="fa-solid fa-download"></i> iOS Emoji (.ttf)
            </button>
            <button className="btn ghost small" onClick={downloadMemojiPack}>
              <i className="fa-solid fa-file-zipper"></i> Memoji iOS (.zip)
            </button>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-note-sticky"></i>
            </div>
            <h3>Custom stickers</h3>
            <p>
              Add stickers from your gallery or files, or share them in from WhatsApp and Telegram.
            </p>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-paste"></i>
            </div>
            <h3>Clipboard history</h3>
            <p>
              Saved only on your phone. Sensitive text such as passwords is not saved. Clear it any time.
            </p>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-hand"></i>
            </div>
            <h3>One-handed mode</h3>
            <p>
              Switch between left, normal and right layouts from the long-press menu.
            </p>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-up-down-left-right"></i>
            </div>
            <h3>Size controls</h3>
            <p>
              Set keyboard height, side spacing, bottom spacing and corner roundness, then reset to default.
            </p>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-bars"></i>
            </div>
            <h3>Long-press menu</h3>
            <p>
              Hold the bottom-left key for keyboard settings, language, Emoji and Memoji, clipboard and one-handed mode. You choose how long to hold.
            </p>
          </article>
          <article className="card">
            <div className="ico">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3>Autocorrect</h3>
            <p>
              Turn autocorrect on or off. There is a Try keyboard field in the app to test your changes.
            </p>
          </article>
        </div>
      </section>

      {/* download */}
      <section id="download">
        <div className="dl">
          <div>
            <h2>Get MRkeyboard</h2>
            <p>
              Download the APK, install it, then turn it on in your keyboard settings.
            </p>
            <div className="cta-row" style={{ justifyContent: 'flex-start' }}>
              <button className="btn" onClick={downloadApk}>
                <i className="fa-solid fa-download"></i> Download APK
              </button>
              <button className="btn ghost" onClick={downloadEmojiFont}>
                <i className="fa-regular fa-face-smile"></i> iOS Emojis (.ttf)
              </button>
              <button className="btn ghost" onClick={downloadMemojiPack}>
                <i className="fa-solid fa-file-zipper"></i> Memoji iOS (.zip)
              </button>
            </div>
            <div className="steps">
              After downloading:
              <ol>
                <li>Open the APK and allow installs from this source.</li>
                <li>Open MRkeyboard and tap Open to turn the keyboard on.</li>
                <li>Tap Select to make it your active keyboard.</li>
                <li>Tap Allow to give microphone access for voice typing.</li>
                <li>
                  Optional: allow Display over other apps for the pop-up that floats above other apps.
                </li>
                <li>
                  Optional: for iOS emoji, download the .ttf file, then in MRkeyboard tap Pick emoji font file (.ttf) and choose it.
                </li>
              </ol>
            </div>
          </div>
          <ul className="facts">
            <li>
              <span>Version</span>
              <span>1.0</span>
            </li>
            <li>
              <span>Size</span>
              <span>— MB</span>
            </li>
            <li>
              <span>Requires</span>
              <span>Android 8.0+</span>
            </li>
            <li>
              <span>Developer</span>
              <span>Mr_Rakshit_2.0</span>
            </li>
          </ul>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="ft-brand">
          <i className="fa-solid fa-keyboard" style={{ color: 'var(--pink)' }}></i> MRkeyboard
        </div>
        <div className="ft-made">
          Made with 💗 by{' '}
          <a href="https://rakshittips.github.io" target="_blank" rel="noopener noreferrer">
            Rakshittips
          </a>{' '}
          (Mr_Rakshit_2.0)
        </div>
        <div className="ft-links">
          <a href="#features">Features</a> · 
          <button onClick={downloadApk}>Download APK</button> · 
          <a href="#download">Setup Guide</a>
        </div>
        <div>
          <a
            className="ft-dev"
            href="https://rakshittips.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rakshittips by developer <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
