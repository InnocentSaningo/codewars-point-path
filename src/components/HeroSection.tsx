import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy, Target, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/10 via-background to-gaming-blue/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(280_100%_60%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(220_100%_60%/0.1),transparent_50%)]" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 text-sm px-4 py-2">
          <Trophy className="w-4 h-4 mr-2" />
          CodeWars Challenge Guide
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Master the Art of Code
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Track your progress through 300 points of coding challenges. Earn points, level up, 
          and become a coding warrior.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            asChild
          >
            <a 
              href="https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Challenge Guide
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-gaming-purple/50 hover:border-gaming-purple hover:bg-gaming-purple/10 text-lg px-8 py-6"
          >
            <Target className="w-5 h-5 mr-2" />
            Start Tracking
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gaming-green mb-2">300</div>
            <div className="text-sm text-muted-foreground">Total Points</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gaming-orange mb-2">75</div>
            <div className="text-sm text-muted-foreground">Pre-selected Problems</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gaming-purple mb-2">4</div>
            <div className="text-sm text-muted-foreground">Difficulty Levels</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;