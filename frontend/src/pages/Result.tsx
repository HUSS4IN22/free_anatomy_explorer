import { useParams } from "react-router";
import { anatomicalStructures } from "@/lib/anatomy-data";
import BentoGrid from "@/blocks/BentoGrid";

export default function Result() {
  const { id } = useParams();
  const structure = anatomicalStructures.find(s => s.id === id);

  if (!structure) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold font-patrick">Structure not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-6">
      <div className="w-full max-w-7xl">
        <div className="mb-8">
          <h1 className="text-5xl font-bold font-patrick mb-2">{structure.name}</h1>
          <p className="text-2xl text-muted-foreground font-patrick">{structure.description}</p>
        </div>
        
        <BentoGrid structureId={id!} />
      </div>
    </div>
  );
}
