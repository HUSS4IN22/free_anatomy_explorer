export type StructureCategory = "Bone" | "Muscle" | "Artery" | "Vein" | "Nerve" | "Organ";

export interface AnatomicalStructure {
  id: string;
  name: string;
  category: StructureCategory;
  description: string;
  symbol: string;
}

export const anatomicalStructures: AnatomicalStructure[] = [
  {
    id: "femur",
    name: "Femur",
    category: "Bone",
    description: "The longest and strongest bone in the human body, located in the thigh.",
    symbol: "B",
  },
  {
    id: "tibia",
    name: "Tibia",
    category: "Bone",
    description: "The larger, stronger, and anterior of the two bones in the leg below the knee.",
    symbol: "B",
  },
  {
    id: "fibula",
    name: "Fibula",
    category: "Bone",
    description: "The outer and smaller of the two bones between the knee and the ankle.",
    symbol: "B",
  },
  {
    id: "radius",
    name: "Radius",
    category: "Bone",
    description: "The lateral bone of the forearm.",
    symbol: "B",
  },
  {
    id: "ulna",
    name: "Ulna",
    category: "Bone",
    description: "The medial bone of the forearm, on the side opposite to the thumb.",
    symbol: "B",
  },
  {
    id: "biceps-brachii",
    name: "Biceps Brachii",
    category: "Muscle",
    description: "A two-headed muscle that lies on the upper arm between the shoulder and the elbow.",
    symbol: "M",
  },
  {
    id: "pectoralis-major",
    name: "Pectoralis Major",
    category: "Muscle",
    description: "A thick, fan-shaped muscle, situated at the chest of the human body.",
    symbol: "M",
  },
  {
    id: "latissimus-dorsi",
    name: "Latissimus Dorsi",
    category: "Muscle",
    description: "The largest muscle in the upper body, responsible for extension, adduction, and internal rotation of the shoulder.",
    symbol: "M",
  },
  {
    id: "quadriceps-femoris",
    name: "Quadriceps Femoris",
    category: "Muscle",
    description: "A large muscle group that includes the four prevailing muscles on the front of the thigh.",
    symbol: "M",
  },
  {
    id: "brachial-artery",
    name: "Brachial Artery",
    category: "Artery",
    description: "The major blood vessel of the (upper) arm.",
    symbol: "A",
  },
  {
    id: "cephalic-vein",
    name: "Cephalic Vein",
    category: "Vein",
    description: "A superficial vein in the arm.",
    symbol: "V",
  },
  {
    id: "sciatic-nerve",
    name: "Sciatic Nerve",
    category: "Nerve",
    description: "The largest and longest nerve in the human body.",
    symbol: "N",
  },
  {
    id: "heart",
    name: "Heart",
    category: "Organ",
    description: "A muscular organ which pumps blood through the blood vessels of the circulatory system.",
    symbol: "O",
  },
  {
    id: "liver",
    name: "Liver",
    category: "Organ",
    description: "A large, meaty organ that sits on the right side of the belly.",
    symbol: "O",
  },
];
