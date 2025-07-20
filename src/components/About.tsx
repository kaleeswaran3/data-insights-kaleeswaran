import { MapPin, GraduationCap, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Mahendra Engineering College",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      degree: "B.Sc. Chemistry",
      institution: "GTN Arts College",
      icon: <GraduationCap className="h-6 w-6 text-accent" />
    }
  ];

  const contactData = [
    {
      label: "Location",
      value: "Salem, India",
      icon: <MapPin className="h-5 w-5 text-primary" />
    },
    {
      label: "Email",
      value: "sivankali13537@gmail.com",
      icon: <Mail className="h-5 w-5 text-accent" />
    },
    {
      label: "Phone",
      value: "+91 9360751019",
      icon: <Phone className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about data storytelling and continuous upskilling. 
            I transform complex datasets into actionable insights that drive business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="card-gradient shadow-soft hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <GraduationCap className="mr-3 h-7 w-7 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {edu.icon}
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="card-gradient shadow-soft hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <Mail className="mr-3 h-7 w-7 text-accent" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactData.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    {contact.icon}
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;