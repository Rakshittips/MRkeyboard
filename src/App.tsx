/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="wrap">
      {/* nav */}
      <nav>
        <a className="brand" href="#top" id="top">
          <span className="brand-icon">
            <img
              src="ic_launcher_bg.svg"
              alt="MRkeyboard Logo"
              width="40"
              height="40"
            />
          </span>
          <span>MRkeyboard</span>
        </a>
        <a className="nav-link" href="#about">
          About Me
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
            <a
              className="btn"
              href="https://devuploads.com/xrkjk49pm6yw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-android"></i> Download APK
            </a>
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
            <a
              className="btn ghost small"
              href="https://t.me/Mr_Rakshit_2_0/984"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-download"></i> iOS Emoji (.ttf)
            </a>
            <a
              className="btn ghost small"
              href="https://devuploads.com/j2jphhkqigmp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-file-zipper"></i> Memoji iOS (.zip)
            </a>
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
              <a
                className="btn"
                href="https://devuploads.com/xrkjk49pm6yw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-download"></i> Download APK
              </a>
              <a
                className="btn ghost"
                href="https://t.me/Mr_Rakshit_2_0/984"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-face-smile"></i> iOS Emojis (.ttf)
              </a>
              <a
                className="btn ghost"
                href="https://devuploads.com/j2jphhkqigmp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-file-zipper"></i> Memoji iOS (.zip)
              </a>
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

      {/* about me */}
      <section id="about">
        <div className="sec-head">
          <h2>About Me — Rakshittips</h2>
          <p>Creator & Developer of MRkeyboard (Mr_Rakshit_2.0)</p>
        </div>
        <div className="about-card">
          <div className="about-header">
            <div className="about-avatar">
              <img src="ic_launcher_bg.svg" alt="Rakshittips Logo" />
            </div>
            <div className="about-meta">
              <div className="about-badge">
                <i className="fa-solid fa-code"></i> Developer & Tech Creator
              </div>
              <h3>Mr_Rakshit_2.0</h3>
              <p className="about-tagline">Rakshittips Official</p>
            </div>
          </div>
          <p className="about-bio">
            Hey! I&apos;m <strong>Rakshit Dhakariya</strong>, known as <strong>Rakshittips (Mr_Rakshit_2.0)</strong>. I develop and curate custom Android enhancements, ports, and keyboards — bringing modern iOS 26 aesthetics, liquid glass blurs, fluid haptics, and custom emoji engines to Android users worldwide.
          </p>
          <div className="about-tags">
            <span><i className="fa-brands fa-android"></i> Android Dev</span>
            <span><i className="fa-solid fa-droplet"></i> Liquid Glass UI</span>
            <span><i className="fa-regular fa-face-smile"></i> iOS Emoji Ports</span>
            <span><i className="fa-solid fa-bolt"></i> Speed & Haptics</span>
          </div>
          <div className="about-actions">
            <a
              className="btn small"
              href="https://rakshittips.github.io/Rakshittips/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-globe"></i> Official Website
            </a>
            <a
              className="btn ghost small"
              href="https://t.me/Mr_Rakshit_2_0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i> Telegram Channel
            </a>
            <a
              className="btn ghost small"
              href="https://github.com/Rakshittips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="ft-brand" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span className="brand-icon" style={{ width: 28, height: 28, borderRadius: 8, boxShadow: '0 2px 10px rgba(0, 229, 255, 0.25)' }}>
            <img
              src="ic_launcher_bg.svg"
              alt="MRkeyboard"
              width="28"
              height="28"
            />
          </span>
          <span>MRkeyboard</span>
        </div>
        <div className="ft-made">
          Made with 💗 by{' '}
          <a href="https://rakshittips.github.io/Rakshittips/index.html" target="_blank" rel="noopener noreferrer">
            Rakshittips
          </a>{' '}
          (Mr_Rakshit_2.0)
        </div>
        <div className="ft-links">
          <a href="#features">Features</a> · 
          <a
            href="https://devuploads.com/xrkjk49pm6yw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a> · 
          <a href="#download">Setup Guide</a> · 
          <a href="#about">About Me</a>
        </div>
        <div>
          <a
            className="ft-dev"
            href="https://rakshittips.github.io/Rakshittips/index.html"
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
