import { HeroCommunity } from "@/components/hero/HeroCommunity";
import { BilingualHeading } from "@/components/common/BilingualHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { upcomingEvents } from "@/lib/content";
import { BilingualText } from "@/components/common/BilingualText";
import { EventsCarousel } from "@/components/events/EventsCarousel";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { HomeFeatureVideo } from "@/components/home/HomeFeatureVideo";

export default function HomePage() {
  return (
    <main>
      <HeroCommunity
        titleEn="Winds from Zhejiang embrace the tide, where cultures meet and dreams reside."
        titleZh="浙风融澳海 文汇共繁荣"
        subtitleEn="Zhejiang Association brings together families, professionals, and business leaders across Western Australia through culture, connection, and long-term community stewardship."
        subtitleZh="浙江联合会通过文化传承、商务联结与社区服务，凝聚西澳的浙江家庭、专业人士与行业领袖。"
        image="/homepage.png"
      />

      <section className="section overlap-section home-intro-section">
        <div className="container home-intro-shell">
          <div className="home-intro-panel">
            <ScrollReveal>
              <span className="section-kicker">
                <BilingualText
                  en="Growing together in Western Australia"
                  zh="与西澳共同成长"
                />
              </span>

              <BilingualHeading
                en="A refined community platform for connection, heritage, and opportunity"
                zh="一个连接乡情、文化与机遇的高品质社区平台"
              />
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <p className="home-intro-copy">
                <BilingualText
                  en="Together, we have built more than a network — a warm community where culture, connection, and opportunity grow side by side in Western Australia."
                  zh="我们连接的不只是一个社群，更是在西澳共同建立一个有温度的家园，让文化传承、人脉连接与发展机遇在这里共同生长。"
                />
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-soft home-feature-section">
        <div className="container home-feature-grid">
          <ScrollReveal>
            <div className="home-feature-content">
              <BilingualHeading
                en="Feel at home in Western Australia"
                zh="在西澳，找到归属与机遇"
              />

              <p className="home-feature-copy">
                <BilingualText
                  en="Through exclusive events, community updates, partner benefits, and meaningful cultural gatherings, Zhejiang Association helps members connect, grow, and enjoy a stronger sense of belonging."
                  zh="通过会员专属活动、社区资讯、合作商家权益与高质量文化交流，西澳浙江联合会帮助会员建立联系、共享资源，并获得更强的归属感。"
                />
              </p>

              <Link href="/events" className="editorial-link">
                <BilingualText en="Explore events →" zh="查看活动 →" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <HomeFeatureVideo />
          </ScrollReveal>
        </div>
      </section>

      <section className="section upcoming-events-section">
        <div className="events-full-width">
          <ScrollReveal>
            <div className="home-events-header">
              <BilingualHeading en="Upcoming Events" zh="近期活动" />

              <Link
                href="/events"
                className="editorial-link editorial-link-inline"
              >
                <BilingualText en="View All Events" zh="查看全部活动" />
              </Link>
            </div>
          </ScrollReveal>

          <EventsCarousel events={upcomingEvents} />
        </div>
      </section>

      <section className="section membership-home-section">
        <div className="events-full-width membership-home-editorial">
          <div className="membership-home-grid">
            <ScrollReveal>
              <div className="membership-home-copy-panel">
                <span className="section-kicker">
                  <BilingualText en="Membership Invitation" zh="会员邀请" />
                </span>
                <BilingualHeading
                  en="Belong to a community shaped by culture, connection, and opportunity"
                  zh="加入一个由文化、连接与机遇共同塑造的社群"
                />
                <p className="membership-home-editorial-copy">
                  <BilingualText
                    en="Membership with us brings you closer to a trusted network of families, professionals, entrepreneurs, and community partners across Western Australia."
                    zh="成为我们的会员，意味着加入一个连接西澳浙江家庭、专业人士、企业家与社区伙伴的可信赖网络。"
                  />
                </p>

                <div className="membership-home-highlights">
                  <p>
                    <BilingualText en="Cultural belonging" zh="文化归属" />
                  </p>
                  <p>
                    <BilingualText en="Business dialogue" zh="商务连接" />
                  </p>
                  <p>
                    <BilingualText en="Community support" zh="社区支持" />
                  </p>
                </div>

                <Link href="/contact" className="editorial-link">
                  <BilingualText en="Contact Us" zh="联系我们" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={90}>
              <div className="membership-home-visual">
                <Image
                  src="/membership.jpg"
                  alt="WAZAI membership community gathering"
                  fill
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  className="membership-home-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
