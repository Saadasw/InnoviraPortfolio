import React from 'react';
import { Button } from './ui/button';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'team', label: 'Team' },
    { id: 'vision', label: 'Vision' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Innovira Solutions</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab('contact')}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;