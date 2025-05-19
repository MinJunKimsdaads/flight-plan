import { create } from "zustand";
import { FeatureLike } from "ol/Feature";

interface HoverState {
    hoveredAircraft: FeatureLike | null;
    setHoveredAircraft: (feature:FeatureLike | null) => void
}

export const useAirplaneHoverStore = create<HoverState>((set)=>({
    hoveredAircraft: null,
    setHoveredAircraft: (feature) => set({hoveredAircraft: feature}),
}));
