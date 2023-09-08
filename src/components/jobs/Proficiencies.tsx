import React, { useEffect, useRef, useState } from 'react';
import './jobs.css';

interface ProficienciesProps {
  proficiencies: string[];
}

const Proficiencies: React.FC<ProficienciesProps> = ({ proficiencies }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [maxToShow, setMaxToShow] = useState(0);
    
    useEffect(() => {
      const handleResize = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
          const newItemCount = Math.floor(containerWidth / 70);
          setMaxToShow(newItemCount);
        }
      };
    
      handleResize();
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return (
      <div ref={containerRef} className="technical-container flex items-start mt-2 mb-2 mx-2 gap-x-2 overflow-hidden">
        {proficiencies.slice(0, maxToShow).map((proficiency, index) => (
          <span
            key={index}
            className="technical-skill-container font-mono bg-gray-200 text-neutral-500 font-bold border rounded-md inline-block px-2"
          >
            <p>{proficiency}</p>
          </span>
        ))}
        {proficiencies.length > maxToShow && <span className="font-mono text-neutral-500 font-bold inline-block px-2">...</span>}
      </div>
    );
  };

export default Proficiencies;