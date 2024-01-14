import dynamic from 'next/dynamic';

const About = dynamic(() => import('/src/components/sections/index/home'));

export default function AboutMe() {
  return (
    <About />
  );
}
