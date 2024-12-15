import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <Container className="pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
          Transform Your Workflow with
          <span className="text-indigo-600"> AI-Powered</span> Solutions
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
          Harness the power of artificial intelligence to automate tasks, generate content,
          and make data-driven decisions. Built for modern teams and businesses.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button icon={ArrowRight}>
            Get Started Free
          </Button>
          <Button variant="outline" icon={Sparkles}>
            Watch Demo
          </Button>
        </div>
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="AI Platform Dashboard"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </Container>
    </div>
  );
}