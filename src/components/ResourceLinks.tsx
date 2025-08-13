import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Award, FileText } from "lucide-react";

const resources = [
  {
    title: "Challenge Guide Spreadsheet",
    description: "Complete list of pre-selected problems and flexible challenges",
    icon: FileText,
    link: "https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit?usp=sharing",
    color: "gaming-green"
  },
  {
    title: "CodeWars Platform",
    description: "Start solving challenges and earning points",
    icon: Award,
    link: "https://www.codewars.com",
    color: "gaming-purple"
  },
  {
    title: "Point System Documentation",
    description: "Learn how CodeWars points and ranking system works",
    icon: BookOpen,
    link: "https://docs.codewars.com/concepts/honor",
    color: "gaming-blue"
  },
  {
    title: "Community & Discussion",
    description: "Connect with other CodeWars practitioners",
    icon: Users,
    link: "https://www.codewars.com/discussions",
    color: "gaming-orange"
  }
];

const ResourceLinks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Essential Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to succeed in your CodeWars challenge journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card 
                key={index}
                className={`bg-gradient-to-br from-${resource.color}/10 to-transparent border-${resource.color}/20 hover:scale-105 transition-all duration-300 hover:shadow-lg group`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${resource.color}/20 flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 text-${resource.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-left">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={`w-full bg-${resource.color}/10 hover:bg-${resource.color}/20 text-${resource.color} border border-${resource.color}/30 hover:border-${resource.color}/50`}
                    variant="outline"
                    asChild
                  >
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Access Resource</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-muted/20 border-muted-foreground/20">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                Remember to track your progress regularly and don't hesitate to ask for help in the community. 
                The goal is to learn and improve, not just to earn points!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourceLinks;