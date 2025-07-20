import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Power BI Data Analyst",
      platform: "Udemy",
      description: "Comprehensive Power BI training covering DAX, data modeling, and advanced visualization techniques",
      skills: ["Power BI", "DAX", "Data Modeling", "Visualization"],
      status: "Completed",
      link: "#", // Add actual Udemy link here
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Python Complete Bootcamp",
      platform: "Udemy", 
      description: "Complete Python programming from basics to advanced topics including data analysis libraries",
      skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
      status: "Completed",
      link: "#", // Add actual Udemy link here
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "SQL Bootcamp for Data Analysis",
      platform: "Udemy",
      description: "Advanced SQL techniques for data analysis, database design, and query optimization",
      skills: ["SQL", "MySQL", "Database Design", "Query Optimization"],
      status: "Completed", 
      link: "#", // Add actual Udemy link here
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Data Science Complete Bootcamp",
      platform: "Udemy",
      description: "End-to-end data science workflow including machine learning and statistical analysis",
      skills: ["Data Science", "Machine Learning", "Statistics", "Python"],
      status: "Completed",
      link: "#", // Add actual Udemy link here
      color: "text-accent", 
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Certifications & Learning
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning through professional certifications and courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-gradient shadow-medium hover-lift group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${cert.bgColor} ${cert.color}`}>
                    <Award className="h-6 w-6" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-3">
                  {cert.platform}
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-background/50 text-foreground text-xs rounded-md border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Learning Note */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-card/50 rounded-lg border">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Commitment to Continuous Learning
            </h3>
            <p className="text-muted-foreground">
              I believe in staying current with the latest technologies and methodologies in data analysis. 
              These certifications represent my dedication to professional growth and mastery of industry-standard tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;