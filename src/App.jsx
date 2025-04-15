import { Button } from "@/components/ui/button";
import { toast } from "sonner";
function App() {
  const generateToast = () => {
    toast.success("A lovely toast!");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-3xl font-bold hover:text-chart-4">
        React + Vite + Tailwind
      </h1>
      <Button
        className="bg-chart-4 text-background hover:bg-chart-4/50 hover:animate-bounce m-4"
        onClick={generateToast}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
