"use client";

import Image from "next/image";
import { useState } from "react";

import { BilingualText } from "@/components/common/BilingualText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

type Category = "all" | "events" | "culture" | "business" | "community";

type GalleryItem = {
  category: Exclude<Category, "all">;
  image: string;
  spanClass:
    | "gallery-span-wide"
    | "gallery-span-tall"
    | "gallery-span-standard";
};

const filters: Array<{ value: Category; labelEn: string; labelZh: string }> = [
  { value: "all", labelEn: "All", labelZh: "全部" },
  { value: "events", labelEn: "Events", labelZh: "活动" },
  { value: "culture", labelEn: "Culture", labelZh: "文化" },
  { value: "business", labelEn: "Business", labelZh: "商务" },
  { value: "community", labelEn: "Community", labelZh: "社群" },
];

const galleryItems: GalleryItem[] = [
  {
    category: "events",
    image: "/gallery/1.png",
    spanClass: "gallery-span-wide",
  },
  {
    category: "business",
    image: "/gallery/2.png",
    spanClass: "gallery-span-standard",
  },
  {
    category: "culture",
    image: "/gallery/3.png",
    spanClass: "gallery-span-tall",
  },
  {
    category: "community",
    image: "/gallery/4.png",
    spanClass: "gallery-span-standard",
  },
  {
    category: "events",
    image: "/gallery/5.jpg",
    spanClass: "gallery-span-standard",
  },
  {
    category: "business",
    image: "/gallery/6.jpg",
    spanClass: "gallery-span-wide",
  },
  {
    category: "culture",
    image: "/gallery/7.jpg",
    spanClass: "gallery-span-tall",
  },
  {
    category: "community",
    image: "/gallery/8.png",
    spanClass: "gallery-span-tall",
  },
  {
    category: "culture",
    image: "/gallery/9.png",
    spanClass: "gallery-span-tall",
  },
  {
    category: "business",
    image: "/gallery/10.jpg",
    spanClass: "gallery-span-tall",
  },
  {
    category: "events",
    image: "/gallery/11.jpg",
    spanClass: "gallery-span-tall",
  },
];

export function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const items =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-showcase">
      <div className="gallery-filter-bar">
        {filters.map((filter) => {
          const isActive = activeCategory === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              className={`editorial-filter-link gallery-filter-link ${isActive ? "is-active" : ""}`}
              aria-pressed={isActive}
              onClick={() => setActiveCategory(filter.value)}
            >
              <BilingualText en={filter.labelEn} zh={filter.labelZh} />
            </button>
          );
        })}
      </div>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <ScrollReveal
            key={`${item.category}-${item.image}`}
            delay={index * 70}
          >
            <figure className="gallery-card">
              <div className="gallery-card-image-wrap">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="gallery-card-image"
                />
              </div>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
