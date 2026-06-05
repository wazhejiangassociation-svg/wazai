"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { EventCard } from "@/components/events/EventCard";

type EventItem = {
  titleEn: string;
  titleZh: string;
  dateEn: string;
  dateZh: string;
  timeEn?: string;
  timeZh?: string;
  locationEn: string;
  locationZh: string;
  descriptionEn: string;
  descriptionZh: string;
  image: string;
};

type Props = {
  events: EventItem[];
};

type CarouselLayout = {
  cardsPerPage: 1 | 2 | 3;
  gapClass: string;
};

function getLayout(width: number): CarouselLayout {
  if (width < 768) {
    return { cardsPerPage: 1, gapClass: "events-carousel-page-gap-mobile" };
  }

  if (width < 1024) {
    return { cardsPerPage: 2, gapClass: "events-carousel-page-gap-tablet" };
  }

  return { cardsPerPage: 3, gapClass: "events-carousel-page-gap-desktop" };
}

function chunkEvents<T>(items: T[], size: number) {
  const pages: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }

  return pages;
}

export function EventsCarousel({ events }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activePage, setActivePage] = useState(0);
  const [layout, setLayout] = useState<CarouselLayout>({
    cardsPerPage: 3,
    gapClass: "events-carousel-page-gap-desktop"
  });

  useEffect(() => {
    const updateLayout = () => {
      const nextLayout = getLayout(window.innerWidth);
      setLayout(nextLayout);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const pages = useMemo(() => chunkEvents(events, layout.cardsPerPage), [events, layout.cardsPerPage]);

  useEffect(() => {
    pageRefs.current = pageRefs.current.slice(0, pages.length);
    setActivePage((current) => Math.min(current, Math.max(0, pages.length - 1)));
  }, [pages.length]);

  const scrollToPage = (pageIndex: number) => {
    const track = trackRef.current;
    const page = pageRefs.current[pageIndex];
    if (!track || !page) return;

    track.scrollTo({
      left: page.offsetLeft,
      behavior: "smooth"
    });
    setActivePage(pageIndex);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const pagesNode = pageRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!track || pagesNode.length === 0) return;

    const trackLeft = track.getBoundingClientRect().left;

    let nearest = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    pagesNode.forEach((page, index) => {
      const distance = Math.abs(page.getBoundingClientRect().left - trackLeft);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearest = index;
      }
    });

    setActivePage(nearest);
  };

  return (
    <div className="events-carousel-premium">
      <div
        ref={trackRef}
        className={`events-scroll-track ${layout.gapClass}`}
        onScroll={handleScroll}
      >
        {pages.map((page, pageIndex) => (
          <div
            key={`page-${pageIndex}`}
            className="events-carousel-page"
            ref={(node) => {
              pageRefs.current[pageIndex] = node;
            }}
          >
            <div className="events-carousel-page-grid">
              {page.map((event, index) => {
                const itemIndex = pageIndex * layout.cardsPerPage + index;
                return (
                  <div key={event.titleEn} className="events-carousel-card-slot">
                    <EventCard {...event} delay={itemIndex * 80} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="events-carousel-dots">
        {pages.map((_, pageIndex) => (
          <button
            key={pageIndex}
            type="button"
            onClick={() => scrollToPage(pageIndex)}
            className={pageIndex === activePage ? "events-dot active" : "events-dot"}
            aria-label={`Show event page ${pageIndex + 1}`}
            aria-pressed={pageIndex === activePage}
          />
        ))}
      </div>
    </div>
  );
}
