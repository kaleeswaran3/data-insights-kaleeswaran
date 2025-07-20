import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart3, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "R", level: 75 }
      ],
      color: "text-primary"
    },
    {
      title: "Data Tools & Libraries",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 82 },
        { name: "Matplotlib", level: 85 }
      ],
      color: "text-accent"
    },
    {
      title: "Business Intelligence",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "MySQL", level: 80 },
        { name: "Excel", level: 95 }
      ],
      color: "text-primary"
    },
    {
      title: "Development Platforms",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Jupyter Notebook", level: 85 },
        { name: "PyCharm", level: 80 },
        { name: "VS Code", level: 88 }
      ],
      color: "text-accent"
    }
  ];

  const softSkills = [
    "Report Building",
    "Data Storytelling", 
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Critical Thinking"
  ];

  return (
    <section id="skills" className="py-20 px-4 hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Technical proficiencies and tools I use to transform data into insights
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient shadow-medium hover-lift">
              <CardContent className="p-6">
                <div className={`flex items-center mb-6 ${category.color}`}>
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="skill-progress h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="card-gradient shadow-medium">
          <CardContent className="p-8">
            <div className="flex items-center mb-6 text-primary">
              <Users className="h-7 w-7" />
              <h3 className="text-2xl font-bold ml-3">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-background/50 rounded-lg p-4 text-center hover-bounce"
                >
                  <span className="font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;