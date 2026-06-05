import { Calendar, Clock, MapPin } from "lucide-react";

import { BilingualText } from "@/components/common/BilingualText";
import { EventsCarousel } from "@/components/events/EventsCarousel";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Link } from "@/i18n/navigation";

type EventItem = {
  titleEn: string;
  titleZh: string;
  dateEn: string;
  dateZh: string;
  timeEn: string;
  timeZh: string;
  locationEn: string;
  locationZh: string;
  descriptionEn: string;
  descriptionZh: string;
  image: string;
};

const UPCOMING_EVENTS: EventItem[] = [
  {
    titleEn: "Zhejiang Heritage Evening",
    titleZh: "浙江文化雅集之夜",
    dateEn: "August 24, 2026",
    dateZh: "2026年8月24日",
    timeEn: "6:00 PM - 9:00 PM",
    timeZh: "18:00 - 21:00",
    locationEn: "Perth Convention Precinct",
    locationZh: "珀斯会展区",
    descriptionEn:
      "An intimate cultural evening featuring music, cuisine, and stories that celebrate the enduring spirit of Zhejiang in Western Australia.",
    descriptionZh:
      "以音乐、美食与人文分享，呈现浙江文化在西澳延续与焕新的温度。",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleEn: "Industry Dialogue Luncheon",
    titleZh: "行业对话午宴",
    dateEn: "September 10, 2026",
    dateZh: "2026年9月10日",
    timeEn: "12:00 PM - 2:00 PM",
    timeZh: "12:00 - 14:00",
    locationEn: "Riverside Business Club, Perth",
    locationZh: "珀斯河畔商务会所",
    descriptionEn:
      "A focused forum for entrepreneurs and professionals to exchange ideas, build partnerships, and explore practical cross-community opportunities.",
    descriptionZh:
      "面向企业家与专业人士的高质量交流平台，聚焦合作机会与可持续发展。",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleEn: "Community Mid-Autumn Celebration",
    titleZh: "社区中秋联谊庆典",
    dateEn: "September 27, 2026",
    dateZh: "2026年9月27日",
    timeEn: "5:30 PM - 9:30 PM",
    timeZh: "17:30 - 21:30",
    locationEn: "South Perth Foreshore",
    locationZh: "南珀斯河滨公园",
    descriptionEn:
      "A family-friendly gathering with performances, cultural workshops, and shared traditions that strengthen intergenerational belonging.",
    descriptionZh: "以演出、文化体验与传统共享，连接不同世代，凝聚社区归属感。",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleEn: "Western Australia Zhejiang Business Gala",
    titleZh: "西澳浙江商务交流晚宴",
    dateEn: "November 14, 2026",
    dateZh: "2026年11月14日",
    timeEn: "6:30 PM - 10:00 PM",
    timeZh: "18:30 - 22:00",
    locationEn: "Perth Grand Ballroom",
    locationZh: "珀斯大宴会厅",
    descriptionEn:
      "A flagship evening for professional exchange, member recognition, and cross-community collaboration.",
    descriptionZh: "汇聚专业交流、会员表彰与跨社区协作的年度标志性晚宴。",
    image:
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleEn: "Young Professionals Forum",
    titleZh: "青年专业人士论坛",
    dateEn: "December 6, 2026",
    dateZh: "2026年12月6日",
    timeEn: "2:00 PM - 5:00 PM",
    timeZh: "14:00 - 17:00",
    locationEn: "UWA Business School",
    locationZh: "西澳大学商学院",
    descriptionEn:
      "Mentorship-led dialogue connecting emerging talent with experienced community and business leaders.",
    descriptionZh:
      "通过导师引导的对话，促进新生代人才与社区及商业领袖之间的深度连接。",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleEn: "Summer Community Celebration",
    titleZh: "夏季社区庆典",
    dateEn: "January 18, 2027",
    dateZh: "2027年1月18日",
    timeEn: "4:00 PM - 8:00 PM",
    timeZh: "16:00 - 20:00",
    locationEn: "Elizabeth Quay, Perth",
    locationZh: "珀斯伊丽莎白码头",
    descriptionEn:
      "An open-air celebration of culture and belonging with performances, family activities, and community storytelling.",
    descriptionZh:
      "通过演出、家庭活动与社区故事分享，呈现开放而温暖的文化庆典体验。",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
  },
];

const FEATURED_EVENT = {
  categoryEn: "Featured Event",
  categoryZh: "精选活动",
  titleEn: "Western Australia Zhejiang Business Gala",
  titleZh: "西澳浙江商务交流晚宴",
  dateEn: "November 14, 2026",
  dateZh: "2026年11月14日",
  timeEn: "6:30 PM - 10:00 PM",
  timeZh: "18:30 - 22:00",
  locationEn: "Perth Grand Ballroom",
  locationZh: "珀斯大宴会厅",
  descriptionEn:
    "A flagship gathering bringing together entrepreneurs, professionals, community leaders, and partners for networking, collaboration, and cultural exchange.",
  descriptionZh:
    "汇聚企业家、专业人士、社区代表与合作伙伴，共同促进交流合作、资源共享与文化联结。",
  highlightsEn: [
    "Business networking",
    "Community recognition",
    "Cultural performances",
    "Member engagement",
  ],
  highlightsZh: ["商务交流", "社区表彰", "文化演出", "会员互动"],
  image:
    "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1800&q=80",
};

export default function EventsPage() {
  return (
    <main className="events-editorial-page">
      <section
        className="events-editorial-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47, 41, 36, 0.48), rgba(47, 41, 36, 0.56)), url('/events.png')",
        }}
      >
        <div className="container events-editorial-hero-inner">
          <ScrollReveal>
            <h1 className="events-editorial-title">
              <BilingualText en="Events" zh="活动" />
            </h1>
            <p className="events-editorial-subtitle">
              <BilingualText
                en="We host regular cultural and celebratory events that foster connection and community. Stay tuned and be part of the vibrant spirit of Zhejiang in Western Australia."
                zh="我们定期举办文化交流、节庆庆典与社区活动，促进会员之间的联系与互动。欢迎关注并参与，共同感受浙江人在西澳的活力与凝聚力。"
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="events-upcoming-section">
        <div className="events-wide-container">
          <ScrollReveal>
            <h2 className="events-section-title">
              <BilingualText en="Upcoming Events" zh="近期活动" />
            </h2>
          </ScrollReveal>

          <EventsCarousel events={UPCOMING_EVENTS} />
        </div>
      </section>

      <section className="events-featured-section">
        <div className="events-wide-container">
          <ScrollReveal>
            <h2 className="events-section-title">
              <BilingualText
                en={FEATURED_EVENT.categoryEn}
                zh={FEATURED_EVENT.categoryZh}
              />
            </h2>
          </ScrollReveal>

          <div className="events-featured-layout">
            <ScrollReveal delay={40} className="events-featured-copy-reveal">
              <div className="events-featured-copy">
                <h3 className="events-featured-title">
                  <BilingualText
                    en={FEATURED_EVENT.titleEn}
                    zh={FEATURED_EVENT.titleZh}
                  />
                </h3>

                <p className="events-editorial-meta-row">
                  <Calendar size={14} aria-hidden="true" />
                  <span>
                    <BilingualText
                      en={FEATURED_EVENT.dateEn}
                      zh={FEATURED_EVENT.dateZh}
                    />
                  </span>
                </p>
                <p className="events-editorial-meta-row">
                  <Clock size={14} aria-hidden="true" />
                  <span>
                    <BilingualText
                      en={FEATURED_EVENT.timeEn}
                      zh={FEATURED_EVENT.timeZh}
                    />
                  </span>
                </p>
                <p className="events-editorial-meta-row">
                  <MapPin size={14} aria-hidden="true" />
                  <span>
                    <BilingualText
                      en={FEATURED_EVENT.locationEn}
                      zh={FEATURED_EVENT.locationZh}
                    />
                  </span>
                </p>

                <p className="events-featured-description">
                  <BilingualText
                    en={FEATURED_EVENT.descriptionEn}
                    zh={FEATURED_EVENT.descriptionZh}
                  />
                </p>

                <h4 className="events-featured-subheading">
                  <BilingualText en="Highlights" zh="亮点" />
                </h4>

                <ul className="events-featured-list">
                  {FEATURED_EVENT.highlightsEn.map((item, index) => (
                    <li key={item}>
                      <BilingualText
                        en={item}
                        zh={FEATURED_EVENT.highlightsZh[index]}
                      />
                    </li>
                  ))}
                </ul>

                <Link href="/events" className="editorial-link">
                  <BilingualText en="Discover More" zh="了解更多" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="events-featured-image-reveal">
              <div className="events-featured-image-wrap">
                <img
                  src={FEATURED_EVENT.image}
                  alt={FEATURED_EVENT.titleEn}
                  className="events-featured-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
