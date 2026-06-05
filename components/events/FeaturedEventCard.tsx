import { EventCard } from "./EventCard";

type FeaturedProps = {
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

export function FeaturedEventCard(props: FeaturedProps) {
  return (
    <div
      style={{
        boxShadow: "var(--elev-2)",
        borderRadius: "22px",
        overflow: "hidden",
      }}
    >
      <EventCard {...props} />
    </div>
  );
}