import { AnatomicalStructure } from "./anatomy-data";

const API_BASE_URL = "http://localhost:1323/api";

export interface ViewConfig {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface LayoutResponse {
  structureId: string;
  layout: ViewConfig[];
  source: string;
}

export async function fetchLayout(id: string): Promise<LayoutResponse> {
  const response = await fetch(`${API_BASE_URL}/layout/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch layout configuration");
  }
  return response.json();
}
