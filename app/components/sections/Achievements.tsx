"use client";

import { useCallback, useState } from "react";

import AchievementCard from "../ui/card/AchievementCard";
import ImageModal from "../ui/modal/ImageModal";
import { achievements } from "@/app/data/achievements";
import { PreviewImage } from "@/app/types/achievement";

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<PreviewImage | null>(null);

  const openImage = useCallback((image: PreviewImage) => {
    setSelectedImage(image);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <section id="achievements" className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="text-eyebrow">Recognition & Milestones</p>

        <h2 className="text-section-title text-foreground">
          Milestones worth celebrating.
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          A collection of academic achievements, competitive accomplishments,
          certifications, and professional recognition that reflects my growth
          beyond software development.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:gap-6">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.number}
            {...achievement}
            onImageClick={openImage}
          />
        ))}
      </div>

      <ImageModal image={selectedImage} onClose={closeImage} />
    </section>
  );
}
