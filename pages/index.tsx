import React, { useState, useEffect } from 'react';
import colors from '../src/content/index/_colors.json';
import TitleIndex from './title.index';

// Import your components with dynamic import
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../src/components/sections/index/hero"));
const Career = dynamic(
  () => import("../src/components/sections/index/optional/career")
);
const Color = dynamic(() => import("../src/components/utils/page.colors"));

interface HomePageProps {
  spacing: string[];
}

export default function HomePage({ spacing }: HomePageProps) {
  // Use a state variable to track whether components are loaded
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setComponentsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => (
    <div>
      <Hero />
      <Career />
    </div>
  );

  return (
    <div>
      <TitleIndex />
      <Color colors={colors} />

      {/* Conditionally render components or loading message */}
      {renderContent()}
    </div>
  );
}
