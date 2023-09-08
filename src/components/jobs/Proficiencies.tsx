import React, {FC} from 'react';
import './jobs.css';

interface ProficienciesProps {
  proficiencies: string[];
}

const Proficiencies: FC<ProficienciesProps> = ({ proficiencies }) => {
    return (
      <div className="technical-container flex items-start mt-2 mb-2 mx-2 gap-x-2 overflow-hidden">
        {proficiencies.map((proficiency, index) => (
          <span
            key={index} // It's usually better to use a unique identifier instead of index when possible
            className="technical-skill-container font-mono bg-gray-200 text-neutral-500 font-bold border rounded-md inline-block px-2"
          >
            <p>{proficiency}</p>
          </span>
        ))}
      </div>
    );
  };

export default Proficiencies;