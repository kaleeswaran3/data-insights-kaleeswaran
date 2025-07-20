import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Database, TrendingUp, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Management Dashboard",
      description: "Comprehensive analytics dashboard analyzing ADR, RevPAR, occupancy rates, and seasonal patterns to help hotel managers make data-driven business decisions.",
      tools: ["Excel", "Power BI", "DAX"],
      features: [
        "DAX modeling for complex calculations",
        "Interactive trend dashboards",
        "Customer segmentation analysis",
        "Revenue optimization insights"
      ],
      outcome: "Improved revenue management decisions by 25%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Cricket Analytics Project",
      description: "End-to-end data pipeline for cricket match analysis, including web scraping, data processing, and interactive visualization of player performance and team statistics.",
      tools: ["Python", "Pandas", "SQL", "Power BI"],
      features: [
        "Web scraping for real-time match data",
        "Player performance analytics",
        "Win rate prediction models",
        "Interactive Power BI dashboards"
      ],
      outcome: "Accurate performance predictions with 85% accuracy",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "text-accent",
      bgColor: "bg-accent/10",
      github: "#",
      demo: "#"
    },
    {
      title: "Data Annotation & QA System",
      description: "Developed and implemented quality assurance processes for large-scale data annotation projects, focusing on text classification and multimedia content tagging.",
      tools: ["Custom Tools", "Python", "Manual Review"],
      features: [
        "Text classification workflows",
        "Image and audio tagging systems",
        "Quality assurance protocols",
        "Automated validation processes"
      ],
      outcome: "Improved data quality by 40% through systematic QA",
      icon: <Database className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world data analysis projects that showcase my ability to extract insights and drive business value
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient shadow-medium hover-lift group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${project.bgColor} ${project.color}`}>
                      {project.icon}
                    </div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  {(project.github || project.demo) && (
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Database className="h-4 w-4 mr-2 text-primary" />
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="hover-bounce">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2 text-accent" />
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className={`p-4 rounded-lg ${project.bgColor} border-l-4 border-l-primary`}>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    Project Outcome
                  </h4>
                  <p className="text-foreground font-medium">{project.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;