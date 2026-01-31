"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { Linkedin, Mail, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ParticleTextEffect } from './ui/particle-text-effect';

export default function HeroSection() {
  const { name, tagline, links } = portfolioData;
  const { toast } = useToast();

  const showEmail = () => {
    toast({
      title: 'My Personal Email',
      description: links.email,
    });
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 py-20">
      
      <ParticleTextEffect />
      
      <div className="mt-4 text-lg md:text-2xl text-foreground/80 max-w-2xl">
        {tagline.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
          <Link href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin />
            LinkedIn
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
          <Link href={links.github} target="_blank" rel="noopener noreferrer">
            <Github />
            GitHub
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105" onClick={showEmail}>
          <Mail />
          Email
        </Button>
      </div>
    </section>
  );
}
