import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { navigationLinks } from '../constants/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AIforge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className="text-gray-600 hover:text-gray-900"
              >
                {label}
              </a>
            ))}
            <Button>Get Started</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navigationLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button className="w-full mt-4">Get Started</Button>
          </div>
        )}
      </Container>
    </nav>
  );
}