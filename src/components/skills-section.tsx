import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { portfolioData } from '@/lib/portfolio-data';

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-lg border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl font-bold text-primary">Skills</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="p-2 rounded-lg transition-colors duration-300 hover:bg-white/5">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-foreground/70">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
