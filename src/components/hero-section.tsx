"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { FileText, Linkedin, Mail, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(hsl(var(--primary)/0.2)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <h1 className="font-headline text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent transition-all duration-500 hover:tracking-wider">
        {name}
      </h1>
      <div className="mt-4 text-lg md:text-2xl text-foreground/80 max-w-2xl">
        {tagline.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
          <Link href={links.resume} target="_blank" rel="noopener noreferrer">
            <FileText />
            Resume
          </Link>
        </Button>
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
