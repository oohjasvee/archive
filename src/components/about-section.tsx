import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-lg border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl font-bold text-primary">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80 leading-relaxed">
            {portfolioData.about}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
