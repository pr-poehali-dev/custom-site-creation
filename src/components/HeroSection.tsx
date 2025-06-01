
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Юра
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-200 mb-4 font-light">
            Личный программист
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаю современные веб-приложения с React, TypeScript и любовью к деталям. 
            Превращаю идеи в элегантный код.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              <Icon name="Rocket" size={20} />
              Начать проект
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400 text-purple-200 hover:bg-purple-800/30 px-8 py-3 text-lg">
              <Icon name="User" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-purple-400 animate-pulse">
          <Icon name="Code" size={32} />
        </div>
        <div className="absolute top-40 right-20 text-purple-300 animate-pulse" style={{animationDelay: '1s'}}>
          <Icon name="Palette" size={28} />
        </div>
        <div className="absolute bottom-32 left-20 text-purple-500 animate-pulse" style={{animationDelay: '2s'}}>
          <Icon name="Zap" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
