import React from 'react';
import { Container } from '../ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12">
      <Container>
        <div className="text-center text-gray-600">
          <p>© {currentYear} AIforge. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}