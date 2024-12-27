import React from 'react';
import { Check } from 'lucide-react';

interface DonationCardProps {
  tier: {
    name: string;
    price: number;
    benefits: string[];
    recommended?: boolean;
  };
  onSelect: (amount: number) => void;
}

const DonationCard: React.FC<DonationCardProps> = ({ tier, onSelect }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${tier.recommended ? 'border-2 border-primary' : ''}`}>
      {tier.recommended && (
        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2">
          Recommended
        </span>
      )}
      <h3 className="font-trajan text-2xl font-bold text-secondary mb-4">{tier.name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-secondary">₹{tier.price}</span>
        <span className="text-gray-600">/one-time</span>
      </div>
      <ul className="space-y-4 mb-8">
        {tier.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <span className="text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onSelect(tier.price)}
        className="w-full bg-primary text-black py-3 hover:bg-opacity-90 transition-colors font-medium"
      >
        Donate Now
      </button>
    </div>
  );
};

export default DonationCard;