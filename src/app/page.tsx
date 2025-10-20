import { ThemeModeScript } from 'flowbite-react';
import Hero from '@/components/landing/Hero';
import Feature from '@/components/landing/Feature';
import CTA from '@/components/landing/cta';
import SocialProof from '@/components/landing/SocialProof';
import PricingCards from '@/components/landing/PricingCards';
import Content1 from '@/components/landing/Content1';
import Content2 from '@/components/landing/Content2';

export default function Home() {
  return (
    <>
    <Hero />
    <SocialProof />
    <Feature />
    <CTA />
    <PricingCards />
    <Content1/>
    <Content2/>
    </>
  );
}
