import React from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { features } from '../constants/features';

export function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          title="Powerful Features"
          subtitle="Everything you need to leverage AI in your workflow"
        />
        
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="relative">
              <div className="absolute h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="pl-16">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}