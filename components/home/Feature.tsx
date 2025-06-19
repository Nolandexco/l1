"use client";

import { ALL_FEATURES } from "@/config/feature";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

const Feature = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);
  const FEATURES =
    ALL_FEATURES[`FEATURES_${langName?.toUpperCase?.()}`] ?? ALL_FEATURES.FEATURES_EN;

  const handleCardClick = (index: number) => {
    setSelectedFeatureIndex(selectedFeatureIndex === index ? null : index);
  };

  const YOUTUBE_EMBEDS: { [key: number]: string } = {
    1: "https://www.youtube.com/embed/dQw4w9WgXcQ", // fitur ke-2
    // Tambah key lain kalau fitur ke-3, ke-4, dll pakai video
  };

  return (
    <section id={id}>
      <div className="container space-y-6 rounded-md bg-secondary py-14 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-4xl md:text-6xl text-white">
            <RoughNotation type="highlight" show={true} color="#2563EB">
              {locale?.title ?? "Features"}
            </RoughNotation>
          </h2>
        </div>

        <div className="mx-auto grid justify-center gap-4 text-center sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => handleCardClick(index)}
              className="flex flex-col items-center justify-start rounded-md bg-background/70 p-8 shadow-md border dark:border-muted hover:bg-background/90 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-3 mt-1">
                {feature.icon && typeof feature.icon === "string" ? (
                  <span className="text-3xl">{feature.icon}</span>
                ) : (
                  feature.icon &&
                  React.createElement(feature.icon, {
                    className: "text-3xl",
                  })
                )}
              </div>

              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-0.5 mt-[-4px]">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-0">
                {feature.content}
              </p>

              {selectedFeatureIndex === index && (
                <div className="mt-4 w-full">
                  {YOUTUBE_EMBEDS[index] ? (
                    <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                      <iframe
                        src={YOUTUBE_EMBEDS[index]}
                        title={`Feature ${feature.title}`}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <Image
                      src={`/images/${index + 1}.jpg`}
                      alt={`Feature ${feature.title}`}
                      width={200}
                      height={150}
                      className="rounded-lg w-full h-auto"
                    />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
