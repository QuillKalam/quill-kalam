export interface WordCountWidgetProps {
  current: number;
  goal: number;
  setGoal: (goal: number) => void;
  mode: "novel" | "page" | "screenplay";
}