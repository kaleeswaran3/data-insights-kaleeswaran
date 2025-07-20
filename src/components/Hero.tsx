import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <div className="container mx-auto text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            KALEESWARAN S
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4">
            <span className="animate-typing">Data Analyst | Python | Power BI | SQL</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            "Turning raw data into powerful insights."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="lg" className="hover-bounce group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Resume Download (.PDF)
            </Button>
            
            <Button variant="outline" size="lg" className="hover-lift group">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            
            <Button variant="outline" size="lg" className="hover-lift group">
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;