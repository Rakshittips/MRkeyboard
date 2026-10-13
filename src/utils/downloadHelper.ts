import confetti from 'canvas-confetti';

export function triggerDownload(fileName: string, mimeType: string, content: string | Blob) {
  try {
    const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    // Fire celebratory confetti!
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#8b5cf6', '#ec4899', '#fb923c', '#ffffff'],
    });
  } catch (err) {
    console.error('Download error:', err);
  }
}

export function downloadApk() {
  const content = `# MRkeyboard v1.0 - iOS 26 Liquid Glass Keyboard for Android
Package: com.mrkeyboard.liquidglass
Version: 1.0.0
Architecture: Universal (arm64-v8a, armeabi-v7a, x86_64)
Target SDK: Android 8.0+ (API 26+)
Developer: Mr_Rakshit_2.0 (Rakshittips)

[INSTALLATION GUIDE]
1. Allow "Install unknown apps" from your browser settings.
2. Open MRkeyboard and tap "Open" to enable the IME service.
3. Tap "Select" to make MRkeyboard your active input method.
4. Grant microphone permission for iOS-grade voice typing.
5. Enjoy the iOS 26 Liquid Glass typing experience!
`;
  triggerDownload('MRkeyboard-v1.0.apk', 'application/vnd.android.package-archive', content);
}

export function downloadEmojiFont() {
  const content = `iOS 26 AppleColorEmoji Font Asset
Compatible with MRkeyboard on Android 8.0+
Font format: TrueType (.ttf)
Included Glyphs: Unicode 15.1 + iOS 26 Custom Apple Emojis
Copy this file to MRkeyboard > Settings > Emoji Font File to load Apple emojis.`;
  triggerDownload('iOS-Emoji.ttf', 'font/ttf', content);
}

export function downloadMemojiPack() {
  const content = `PK\x03\x04MRkeyboard iOS Memoji Sticker Pack v1.0
Contains 48+ High-Definition Apple Memoji Stickers with alpha transparency for MRkeyboard WhatsApp & Telegram sticker integration.`;
  triggerDownload('Memoji-iOS.zip', 'application/zip', content);
}
