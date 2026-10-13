/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0612] text-[#f6f1ff] relative selection:bg-pink-500 selection:text-white">
      {/* Background ambient radial glowing spots */}
      <div className="fixed -top-40 -left-40 w-[540px] h-[540px] bg-purple-700/25 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-700/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Header Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Bento Grid */}
        <FeaturesGrid />

        {/* Download & Installation Walkthrough Section */}
        <DownloadSection />
      </main>

      {/* Footer with Rakshittips branding */}
      <Footer />
    </div>
  );
}
