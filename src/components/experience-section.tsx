import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Briefcase, Code } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-lg border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl font-bold text-primary">Experience / Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="-mx-6 -mb-6">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="px-6 py-6 transition-colors duration-300 hover:bg-white/5 border-b border-border/30 last:border-b-0">
                <div className="flex gap-4">
                  <div className="mt-1">
                    {exp.company === 'Personal Project' ? 
                      <Code className="h-6 w-6 text-accent" /> : 
                      <Briefcase className="h-6 w-6 text-accent" />
                    }
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                      <p className="text-foreground/60 text-sm">{exp.period}</p>
                    </div>
                    <p className="font-medium text-primary">{exp.company}</p>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-foreground/80">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
