"use client";

import TherapistCard from "./TherapistCard";

export default function TherapistGrid() {
  return (
    <div className="therapist-grid">
      <div className="therapist-row">
        <TherapistCard />
        <TherapistCard />
        <TherapistCard />
      </div>
      <div className="therapist-row">
        <TherapistCard />
        <TherapistCard />
        <TherapistCard />
      </div>
    </div>
  );
}
