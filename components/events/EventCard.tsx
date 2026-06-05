import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BilingualText } from "@/components/common/BilingualText";

type EventCardProps = {
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
  delay?: number;
};

export function EventCard(props: EventCardProps) {
  return (
    <ScrollReveal delay={props.delay}>
      <article className="event-card-premium">
        <div className="event-card-image-wrap">
          <Image
            src={props.image}
            alt={props.titleEn}
            width={720}
            height={900}
            className="event-card-image"
          />
        </div>

        <div className="event-card-body">
          <span className="event-card-kicker">
            <BilingualText en="Upcoming Event" zh="近期活动" />
          </span>

          <h3 className="event-card-title">
            <BilingualText en={props.titleEn} zh={props.titleZh} />
          </h3>

          <p className="event-card-description">
            <BilingualText en={props.descriptionEn} zh={props.descriptionZh} />
          </p>

          <div className="event-card-meta">
            <div className="event-card-meta-item">
              <Calendar size={14} aria-hidden="true" />
              <span>
                <BilingualText en={props.dateEn} zh={props.dateZh} />
              </span>
            </div>

            {props.timeEn && props.timeZh ? (
              <div className="event-card-meta-item">
                <Clock size={14} aria-hidden="true" />
                <span>
                  <BilingualText en={props.timeEn} zh={props.timeZh} />
                </span>
              </div>
            ) : null}

            <div className="event-card-meta-item">
              <MapPin size={14} aria-hidden="true" />
              <span>
                <BilingualText en={props.locationEn} zh={props.locationZh} />
              </span>
            </div>
          </div>

          <Link href="/events" className="event-card-link">
            <BilingualText en="Discover More" zh="了解更多" />
          </Link>
        </div>
      </article>
    </ScrollReveal>
  );
}
