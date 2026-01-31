"use client";

import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import { Github, Linkedin, Mail, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const { links } = portfolioData;
  const { toast } = useToast();

  const showEmail = () => {
    toast({
      title: 'My Personal Email',
      description: links.email,
    });
  };

  return (
    <footer className="border-t border-border/30 mt-16 md:mt-24">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-foreground/60">
          <Star className="h-4 w-4 text-primary" />
          <span>© {new Date().getFullYear()} Astral Portfolio</span>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="transition-transform duration-200 ease-in-out hover:scale-110 hover:text-primary">
            <Link href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="transition-transform duration-200 ease-in-out hover:scale-110 hover:text-primary">
            <Link href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="transition-transform duration-200 ease-in-out hover:scale-110 hover:text-primary" onClick={showEmail} aria-label="Email">
              <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
