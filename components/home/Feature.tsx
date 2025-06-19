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
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(
    null
  );
  const FEATURES =
    ALL_FEATURES[`FEATURES_${langName?.toUpperCase?.()}`] ??
    ALL_FEATURES.FEATURES_EN;

  const handleCardClick = (index: number) => {
    setSelectedFeatureIndex(selectedFeatureIndex === index ? null : index);
  };

  const YOUTUBE_EMBEDS: { [key: number]: string } = {
    1: "https://www.youtube.com/embed/dQw4w9WgXcQ", // fitur ke-2
    // Tambah key lain kalau fitur ke-3, ke-4, dll pakai video
  };

  const exampleLinks = Array.from({ length: 6 }, (_, i) => ({
    name: `Contoh ${i + 1}`,
    url: `https://bisnovocontoh${i + 1}.vercel.app`,
  }));

  return (
    // --- PERUBAHAN DI SINI ---
    // Menambahkan `className` untuk menaikkan stacking context section ini.
    <section id={id} className="relative z-10">
      <div className="container space-y-6 rounded-md bg-secondary py-14 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-4xl text-white md:text-6xl">
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
              className="flex flex-col items-center justify-start rounded-md border bg-background/70 p-8 shadow-md transition-colors hover:bg-background/90 dark:border-muted cursor-pointer"
            >
              <div className="mb-3 mt-1 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {feature.icon && typeof feature.icon === "string" ? (
                  <span className="text-3xl">{feature.icon}</span>
                ) : (
                  feature.icon &&
                  React.createElement(feature.icon, {
                    className: "text-3xl",
                  })
                )}
              </div>

              <h3 className="mb-0.5 mt-[-4px] text-base font-semibold text-slate-800 dark:text-slate-100">
                {feature.title}
              </h3>

              <p className="mt-0 text-sm text-muted-foreground">
                {feature.content}
              </p>

              {selectedFeatureIndex === index && (
                <div className="mt-4 w-full">
                  {/* Jika ini adalah kartu fitur pertama (index 0), tampilkan 6 tombol */}
                  {index === 0 ? (
                    <div className="grid w-full grid-cols-3 gap-2">
                      {exampleLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          // Hentikan event click agar tidak menutup kartu
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  ) : /* Jika ada video YouTube untuk fitur lain, tampilkan video */
                  YOUTUBE_EMBEDS[index] ? (
                    <div
                      className="relative"
                      style={{ paddingBottom: "56.25%", height: 0 }}
                    >
                      <iframe
                        src={YOUTUBE_EMBEDS[index]}
                        title={`Feature ${feature.title}`}
                        className="absolute left-0 top-0 h-full w-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    /* Jika tidak ada, tampilkan gambar default (untuk fitur ke-3, 4, dst.) */
                    <Image
                      src={`/images/${index + 1}.jpg`}
                      alt={`Feature ${feature.title}`}
                      width={200}
                      height={150}
                      className="h-auto w-full rounded-lg"
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
