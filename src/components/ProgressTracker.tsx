import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, RotateCcw, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProgressTracker = () => {
  const [preSelectedProgress, setPreSelectedProgress] = useState(0);
  const [flexiblePoints, setFlexiblePoints] = useState({
    easy: 0,
    medium: 0,
    hard: 0
  });
  const { toast } = useToast();

  const totalPreSelected = 150;
  const totalFlexible = 150;
  const totalTarget = 300;

  const flexiblePointsTotal = (flexiblePoints.easy * 8) + (flexiblePoints.medium * 32) + (flexiblePoints.hard * 128);
  const totalEarned = (preSelectedProgress * 2) + flexiblePointsTotal;
  const progressPercentage = (totalEarned / totalTarget) * 100;

  const resetProgress = () => {
    setPreSelectedProgress(0);
    setFlexiblePoints({ easy: 0, medium: 0, hard: 0 });
    toast({
      title: "Progress Reset",
      description: "All progress has been reset to zero.",
    });
  };

  const handleFlexibleChange = (type: keyof typeof flexiblePoints, change: number) => {
    setFlexiblePoints(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + change)
    }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Track Your Progress
          </h2>
          <p className="text-xl text-muted-foreground">
            Monitor your journey to 300 points and celebrate your achievements
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8 bg-gradient-to-br from-gaming-purple/5 to-gaming-blue/5 border-gaming-purple/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Trophy className="w-6 h-6 text-gaming-purple" />
              Overall Progress
            </CardTitle>
            <CardDescription>
              {totalEarned} / {totalTarget} points earned ({progressPercentage.toFixed(1)}%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="h-4 mb-4" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0 points</span>
              <span>300 points</span>
            </div>
            
            {progressPercentage >= 100 && (
              <div className="mt-6 text-center">
                <Badge className="bg-gradient-success text-white border-0 text-lg px-6 py-2">
                  🎉 Challenge Complete! 🎉
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Pre-selected Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Pre-selected Problems</CardTitle>
              <CardDescription>Track your beginner level progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="preselected" className="min-w-0 flex-1">
                  Problems completed:
                </Label>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setPreSelectedProgress(Math.max(0, preSelectedProgress - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    id="preselected"
                    type="number"
                    min="0"
                    max="75"
                    value={preSelectedProgress}
                    onChange={(e) => setPreSelectedProgress(Math.min(75, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-20 text-center"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setPreSelectedProgress(Math.min(75, preSelectedProgress + 1))}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{preSelectedProgress} / 75 problems</span>
                  <span className="text-gaming-green font-medium">{preSelectedProgress * 2} points</span>
                </div>
                <Progress value={(preSelectedProgress / 75) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Flexible Points */}
          <Card>
            <CardHeader>
              <CardTitle>Flexible Points</CardTitle>
              <CardDescription>Choose your difficulty mix</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(flexiblePoints).map(([type, count]) => {
                const pointValues = { easy: 8, medium: 32, hard: 128 };
                const colors = { 
                  easy: "difficulty-easy", 
                  medium: "difficulty-medium", 
                  hard: "difficulty-hard" 
                };
                
                return (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 bg-${colors[type as keyof typeof colors]} rounded-full`}></div>
                      <span className="capitalize text-sm">{type}:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleFlexibleChange(type as keyof typeof flexiblePoints, -1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{count}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleFlexibleChange(type as keyof typeof flexiblePoints, 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {count * pointValues[type as keyof typeof pointValues]}pts
                      </span>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-2 border-t">
                <div className="flex justify-between text-sm font-medium">
                  <span>Flexible Total:</span>
                  <span className="text-gaming-purple">{flexiblePointsTotal} points</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <Button variant="outline" onClick={resetProgress} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Reset Progress
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;