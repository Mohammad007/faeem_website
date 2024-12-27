import React from 'react';
import { useNavigate } from 'react-router-dom';

const states = [
  { name: "Andhra Pradesh", icon: "AP" },
  { name: "Arunachal Pradesh", icon: "AR" },
  { name: "Assam", icon: "AS" },
  { name: "Bihar", icon: "BR" },
  { name: "Chhattisgarh", icon: "CG" },
  { name: "Goa", icon: "GA" },
  { name: "Gujarat", icon: "GJ" },
  { name: "Haryana", icon: "HR" },
  { name: "Himachal Pradesh", icon: "HP" },
  { name: "Jharkhand", icon: "JH" },
  { name: "Karnataka", icon: "KA" },
  { name: "Kerala", icon: "KL" },
  { name: "Madhya Pradesh", icon: "MP" },
  { name: "Maharashtra", icon: "MH" },
  { name: "Manipur", icon: "MN" },
  { name: "Meghalaya", icon: "ML" },
  { name: "Mizoram", icon: "MZ" },
  { name: "Nagaland", icon: "NL" },
  { name: "Odisha", icon: "OD" },
  { name: "Punjab", icon: "PB" },
  { name: "Rajasthan", icon: "RJ" },
  { name: "Sikkim", icon: "SK" },
  { name: "Tamil Nadu", icon: "TN" },
  { name: "Telangana", icon: "TG" },
  { name: "Tripura", icon: "TR" },
  { name: "Uttar Pradesh", icon: "UP" },
  { name: "Uttarakhand", icon: "UK" },
  { name: "West Bengal", icon: "WB" }
].sort((a, b) => a.name.localeCompare(b.name));

const StateSection = () => {
  const navigate = useNavigate();

  const handleStateClick = (state: string) => {
    navigate(`/state/${state}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#C9AB81]">Crafts Across India</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {states.map((state) => (
            <div
              key={state.name}
              onClick={() => handleStateClick(state.name)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <span className="text-indigo-600 font-bold">{state.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#C9AB81] transition-colors">
                  {state.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateSection;