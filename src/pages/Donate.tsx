import React, { useState } from 'react';
import DonationCard from '../components/donation/DonationCard';
import PaymentModal from '../components/donation/PaymentModal';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const donationTiers = [
    {
      name: "Supporter",
      price: 1000,
      benefits: [
        "Support an artisan for one month",
        "Receive monthly newsletter",
        "Get digital certificate of appreciation"
      ]
    },
    {
      name: "Patron",
      price: 5000,
      recommended: true,
      benefits: [
        "Support a family of artisans for one month",
        "Exclusive access to artisan workshops",
        "Personalized thank you letter from artisan",
        "Quarterly handcrafted gift"
      ]
    },
    {
      name: "Benefactor",
      price: 10000,
      benefits: [
        "Fund an entire artisan community project",
        "VIP access to all cultural events",
        "Named recognition on our website",
        "Annual handcrafted masterpiece",
        "Private tour of artisan workshops"
      ]
    }
  ];

  const handleDonationSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSubmit = (formData: any) => {
    // Handle payment processing here
    console.log('Processing payment:', formData);
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-trajan text-4xl text-secondary font-bold mb-4">Support Our Mission</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation helps preserve India's rich cultural heritage and supports artisan communities across the country
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {donationTiers.map((tier) => (
            <DonationCard
              key={tier.name}
              tier={tier}
              onSelect={handleDonationSelect}
            />
          ))}
        </div>

        <PaymentModal
          amount={selectedAmount || 0}
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          onSubmit={handlePaymentSubmit}
        />
      </div>
    </div>
  );
};

export default Donate;