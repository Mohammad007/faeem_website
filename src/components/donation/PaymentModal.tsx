import React from 'react';
import { X } from 'lucide-react';

interface PaymentModalProps {
  amount: number;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ amount, isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    onSubmit({
      amount,
      // Add other form data
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="font-trajan text-2xl font-bold text-secondary mb-6">Complete Your Donation</h3>
        
        <div className="mb-6">
          <p className="text-gray-600">Donation Amount:</p>
          <p className="text-2xl font-bold text-secondary">₹{amount}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Expiry Date</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="123"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
          >
            Complete Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;