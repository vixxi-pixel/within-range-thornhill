import React from 'react';
import Navbar from '../components/nav/Navbar';
import HeroSection from '../components/hero/HeroSection';
import PricingSection from '../components/pricing/PricingSection';
import TechSection from '../components/tech/TechSection';
import GallerySection from '../components/gallery/GallerySection';
import FooterSection from '../components/footer/FooterSection';
import FloatingActionBar from '../components/action/FloatingActionBar';

// Images
const HERO_IMAGE = 'https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/5de7c1b5d_generated_d5d28e4d.png';
const BALL_IMAGE = 'https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/bd71e20cd_generated_7dea9a0f.png';
const NIGHT_IMAGE = 'https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/cd1a30f6c_generated_17f51791.png';
const TECH_IMAGE = 'https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/2664e4e92_generated_d43a446e.png';
const BAY_POV_IMAGE = 'https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/c036fddb9_generated_efdf81d3.png';
const MAP_IMAGE = 'https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/7c7d99df5_generated_44431771.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <PricingSection ballImage={BALL_IMAGE} />
      <TechSection techImage={TECH_IMAGE} nightImage={NIGHT_IMAGE} />
      <GallerySection bayPovImage={BAY_POV_IMAGE} ballImage={BALL_IMAGE} />
      <FooterSection mapImage={MAP_IMAGE} />
      <FloatingActionBar />
    </div>
  );
}