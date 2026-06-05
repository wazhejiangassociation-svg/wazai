import Image from "next/image";

import { BilingualText } from "@/components/common/BilingualText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

type StoryBlock = {
  titleEn: string;
  titleZh: string;
  copyEn: string;
  copyZh: string;
  image: string;
};

const STORY_BLOCKS: StoryBlock[] = [
  {
    titleEn: "Our Mission",
    titleZh: "我们的使命",
    copyEn:
      "The Western Australia Zhejiang Association exists to connect people, culture, and opportunity. We bring together Zhejiang families, professionals, entrepreneurs, and partners across Western Australia, creating a trusted platform for long-term community connection and meaningful collaboration.",
    copyZh:
      "西澳浙江联合会致力于连接人、文化与机遇。我们凝聚在西澳生活与发展的浙江同仁、专业人士、企业家及合作伙伴，打造一个值得信赖、可持续发展的社区交流与合作平台。",
    image: "/ourmission.png",
  },
  {
    titleEn: "Cultural Connection",
    titleZh: "文化联结",
    copyEn:
      "Through festivals, gatherings, cultural projects, and community celebrations, we preserve the warmth of Zhejiang heritage while sharing it with Western Australia’s diverse society. Culture is not only remembered here - it is experienced, renewed, and passed on.",
    copyZh:
      "通过节庆活动、社区聚会、文化项目与社区庆典，我们延续浙江文化的温度，也将其融入西澳多元社会。在这里，文化不只是被记住，更被体验、焕新与传承。",
    image: "/culture.jpg",
  },
  {
    titleEn: "Business & Opportunity",
    titleZh: "商务与机遇",
    copyEn:
      "We support members by creating opportunities for business exchange, professional networking, industry dialogue, and cross-community collaboration. The association serves as a bridge between local resources, member needs, and future possibilities.",
    copyZh:
      "我们通过商务交流、专业社交、行业对话与跨社区合作，为会员创造更多连接与发展机遇。联合会不仅连接本地资源与会员需求，也连接当下行动与未来可能。",
    image: "/business.jpg",
  },
  {
    titleEn: "Community Stewardship",
    titleZh: "社区共建",
    copyEn:
      "Beyond events, we are committed to building a responsible and caring community. We encourage participation, mutual support, public engagement, and shared growth, so every member can find belonging and contribute to something greater.",
    copyZh:
      "在活动之外，我们更重视建设一个有责任感、有温度的社区。我们鼓励参与、互助、公共参与与共同成长，让每一位会员都能找到归属，并为更大的共同体贡献力量。",
    image: "/community.png",
  },
];

export default function AboutPage() {
  return (
    <main className="about-story-page">
      <section
        className="events-editorial-hero about-story-intro"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47, 41, 36, 0.45), rgba(47, 41, 36, 0.58)), url('/aboutus.png')",
        }}
      >
        <div className="events-editorial-hero-inner about-story-intro-inner">
          <ScrollReveal>
            <h1 className="events-editorial-title">
              <BilingualText en="About Us" zh="关于我们" />
            </h1>
            <p className="events-editorial-subtitle about-story-hero-subtitle">
              <BilingualText
                en="A trusted bridge connecting culture, community, and opportunity."
                zh="连接文化、社区与机遇的可信赖桥梁。"
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="about-story-timeline"
        aria-label="About us story timeline"
      >
        <div className="about-story-line" aria-hidden="true" />

        {STORY_BLOCKS.map((block, index) => {
          const reverse = index % 2 === 1;

          return (
            <article
              key={block.titleEn}
              className={`about-story-block ${reverse ? "about-story-block-reverse" : ""}`.trim()}
            >
              <ScrollReveal delay={50} className="about-story-visual-reveal">
                <div className="about-story-visual">
                  <Image
                    src={block.image}
                    alt={block.titleEn}
                    fill
                    sizes="(max-width: 1023px) 92vw, 44vw"
                    className="about-story-image"
                  />
                  <div className="about-story-image-overlay" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={130} className="about-story-content-reveal">
                <div className="about-story-content">
                  <h2 className="about-story-heading">
                    <BilingualText en={block.titleEn} zh={block.titleZh} />
                  </h2>
                  <p className="about-story-copy">
                    <BilingualText en={block.copyEn} zh={block.copyZh} />
                  </p>
                </div>
              </ScrollReveal>
            </article>
          );
        })}
      </section>
    </main>
  );
}
