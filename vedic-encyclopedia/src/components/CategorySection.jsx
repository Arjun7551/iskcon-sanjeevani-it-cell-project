"use client";

import { useRef } from "react";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const categories = [
    { title: "Scriptures", desc: "Ancient Sacred Texts", slug: "scriptures", image: "/categories/script.jpeg" },
    { title: "Deities", desc: "Gods & Avatars", slug: "deities", image: "/categories/diety.jpeg" },
    { title: "Spirituality", desc: "Sacred Celebrations", slug: "spirituality", image: "/categories/spri.jpeg" },
    { title: "Philosophy", desc: "Vedic Thought", slug: "philosophy", image: "/categories/philo.jpeg" },
    { title: "Rituals", desc: "Sacred Practices", slug: "rituals", image: "/categories/ritiuals.jpeg" },
    { title: "Mantras", desc: "Divine Sounds", slug: "mantras", image: "/categories/mantra.jpeg" },
  ];

  return (
    <section className="w-full mb-32">
      <h3 className="text-3xl font-serif text-orange-900 mb-10 text-center">
        Explore Categories
      </h3>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-orange-200 border border-orange-500 text-2xl"
        >
          ‹
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-orange-200 border border-orange-500 text-2xl"
        >
          ›
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
