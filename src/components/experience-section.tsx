import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Briefcase, Code } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-lg border-border/30">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Experience / Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="flex gap-4">
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
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
