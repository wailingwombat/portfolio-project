import { useState, useEffect } from 'react';
import wombatPhoto from '@/assets/images/footer/wombat.png';

const wombatFacts = [
  "Wombats prefer to spend most of their time in their burrows.",
  "Wombat poop is cube-shaped, which is highly unusual in the animal kingdom!",
  "A group of wombats is called a wisdom.",
  "Wombat burrows can be up to 30 meters long.",
  "Wombats are herbivores and eat grass, roots, and bark.",
  "Wombats are marsupials native to Australia.",
  "Baby wombats are called joeys.",
  "Wombats can run up to 25 miles per hour for short distances."
];

export default function Wombat() {
  const [currentFact, setCurrentFact] = useState('');

  useEffect(() => {
    const randomFact = wombatFacts[Math.floor(Math.random() * wombatFacts.length)];
    setCurrentFact(randomFact);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 relative">
      <img src={wombatPhoto.src || wombatPhoto} alt="Cute wombat illustration" className="h-24 order-2 md:order-1" />
      <div className="speech-bubble bg-white text-gray-600 p-3 rounded-lg mb-2 md:mb-0 relative order-1 md:order-2 hidden lg:block">
        {currentFact}
      </div>
    </div>
  );
} 