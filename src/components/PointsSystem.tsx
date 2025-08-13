import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Zap, Flame, Crown } from "lucide-react";

const difficultyLevels = [
  {
    name: "Beginner",
    points: 2,
    icon: Star,
    color: "difficulty-beginner",
    bgGradient: "from-difficulty-beginner/20 to-transparent",
    description: "Foundation problems covering basics",
    count: 75,
    totalPoints: 150
  },
  {
    name: "Easy",
    points: 8,
    icon: Zap,
    color: "difficulty-easy",
    bgGradient: "from-difficulty-easy/20 to-transparent",
    description: "Slightly more complex challenges",
    count: "Flexible",
    totalPoints: "Variable"
  },
  {
    name: "Medium",
    points: 32,
    icon: Flame,
    color: "difficulty-medium",
    bgGradient: "from-difficulty-medium/20 to-transparent",
    description: "Intermediate problem solving",
    count: "Flexible",
    totalPoints: "Variable"
  },
  {
    name: "Hard",
    points: 128,
    icon: Crown,
    color: "difficulty-hard",
    bgGradient: "from-difficulty-hard/20 to-transparent",
    description: "Advanced algorithmic challenges",
    count: "Flexible",
    totalPoints: "Variable"
  }
];

const PointsSystem = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Points & Difficulty System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn points across different difficulty levels. Start with pre-selected beginner problems, 
            then choose your path to reach 300 total points.
          </p>
        </div>
        
        {/* Point breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-gaming-green/10 to-transparent border-gaming-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gaming-green rounded-full"></div>
                Pre-selected Problems
              </CardTitle>
              <CardDescription>Mandatory beginner challenges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gaming-green mb-2">150 Points</div>
              <p className="text-sm text-muted-foreground mb-4">
                75 problems × 2 points each
              </p>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                All problems are beginner level covering loops, conditionals, data types, etc.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-gaming-purple/10 to-transparent border-gaming-purple/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gaming-purple rounded-full"></div>
                Flexible Points
              </CardTitle>
              <CardDescription>Choose your own adventure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gaming-purple mb-2">150 Points</div>
              <p className="text-sm text-muted-foreground mb-4">
                Mix of difficulties to reach target
              </p>
              <Progress value={0} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Select problems from any difficulty level to earn remaining points
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Difficulty levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {difficultyLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <Card 
                key={level.name}
                className={`bg-gradient-to-br ${level.bgGradient} border-${level.color}/20 hover:scale-105 transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-${level.color}/20 flex items-center justify-center mb-2`}>
                    <IconComponent className={`w-6 h-6 text-${level.color}`} />
                  </div>
                  <CardTitle className="text-lg">{level.name}</CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`border-${level.color} text-${level.color} bg-${level.color}/10`}
                  >
                    {level.points} pts each
                  </Badge>
                </CardHeader>
                <CardContent className="text-center text-sm">
                  <p className="text-muted-foreground mb-3">{level.description}</p>
                  <div className="space-y-1">
                    <div>Problems: <span className="font-medium">{level.count}</span></div>
                    <div>Total: <span className="font-medium">{level.totalPoints} pts</span></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Pro Tip:</strong> Points are also awarded for ranking up and other activities. 
            Check the official CodeWars documentation for complete point system details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PointsSystem;