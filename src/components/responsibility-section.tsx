import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';

export default function ResponsibilitySection() {
  return (
    <section id="positions" className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-lg border-border/30">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Positions of Responsibility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {portfolioData.responsibilities.map((pos, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h3 className="font-bold text-lg text-foreground">{pos.role}</h3>
                <p className="text-foreground/60 text-sm">{pos.period}</p>
              </div>
              <p className="font-medium text-accent">{pos.organization}</p>
              <p className="mt-2 text-sm text-foreground/80">{pos.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
