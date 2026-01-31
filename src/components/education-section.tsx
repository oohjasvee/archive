import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';

export default function EducationSection() {
  return (
    <section id="education" className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-lg border-border/30">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="text-foreground/60 md:w-1/4 shrink-0">{edu.period}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-foreground">{edu.degree}</h3>
                <p className="text-accent font-medium">{edu.university}</p>
                <p className="mt-2 text-sm text-foreground/80">{edu.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
