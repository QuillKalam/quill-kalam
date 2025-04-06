import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Edit } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Progress } from "../ui/progress";
import { WordCountWidgetProps } from "@/types/tiptap/WordCountWidgetProps";

const WordCountWidget: React.FC<WordCountWidgetProps> = ({
  current,
  goal,
  setGoal,
  mode,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newGoal, setNewGoal] = useState(goal);

  const progressPercentage = Math.min(Math.round((current / goal) * 100), 100);

  const handleSaveGoal = () => {
    setGoal(Number(newGoal));
    setIsDialogOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {current} / {goal} {mode === "novel" ? "words" : "pages"}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5"
              onClick={() => setIsDialogOpen(true)}
            >
              <Edit className="h-3 w-3" />
            </Button>
          </div>
          <Progress value={progressPercentage} className="w-48 h-2" />
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Set {mode === "novel" ? "Word" : "Page"} Count Goal
              </DialogTitle>
            </DialogHeader>

            <div className="py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Target {mode === "novel" ? "Words" : "Pages"}
                </label>
                <Input
                  type="number"
                  value={newGoal}
                  onChange={(e) => setNewGoal(Number(e.target.value))}
                  min="1"
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveGoal}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default WordCountWidget;
