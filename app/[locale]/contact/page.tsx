import { Mail, MapPin, Phone } from "lucide-react";

import { FAQAccordion } from "@/components/common/FAQAccordion";
import { BilingualText } from "@/components/common/BilingualText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const faqItems = [
  {
    questionEn: "How can I become a member?",
    questionZh: "如何成为会员？",
    answerEn:
      "We welcome individuals, professionals, and businesses who share our vision. To apply for membership, please scroll down to the Contact Information section and reach out via email, phone, or a visit to our office. Our team will assist you with the application process.",
    answerZh:
      "我们欢迎认同商会理念的个人、专业人士及企业加入。申请会员请向下滑动至 “联系方式” 页面，通过电子邮件、电话或亲临办公室与我们联系。我们的团队将协助您完成会员申请流程。",
  },
  {
    questionEn: "What events does the association offer?",
    questionZh: "联合会提供哪些活动？",
    answerEn:
      "We organize a variety of events such as Lunar New Year Gala, Mid-Autumn Reunion, Youth Forums, Business Networking, Family Outings, and more. These activities aim to strengthen connections, share resources, and celebrate our cultural heritage.",
    answerZh:
      "我们组织多种活动，包括春节联欢、中秋团聚、青年论坛、商务交流、家庭出游等。这些活动旨在加强联系、共享资源，并共同传承与庆祝我们的文化。",
  },
  {
    questionEn: "Who can join?",
    questionZh: "哪些人可以加入？",
    answerEn:
      "Anyone who studies, works, or lives in Western Australia and is originally from Zhejiang, or who is interested in Zhejiang culture and willing to participate in our community events, is welcome to apply. Students, individuals, families, and businesses are all encouraged to join.",
    answerZh:
      "凡是在西澳学习、工作或生活，来自浙江，或对浙江文化感兴趣并愿意参与社区活动的人士，均欢迎申请加入。学生、个人、家庭与企业都可以成为会员。",
  },
  {
    questionEn: "What does the Zhejiang Association do?",
    questionZh: "浙江联合会主要做什么？",
    answerEn:
      "The Zhejiang Association is a non-profit community established by Zhejiang locals in Western Australia. It is dedicated to fostering hometown ties, mutual support, and cultural exchange between China and Australia. Our mission is to build a warm and supportive Zhejiang community in Western Australia.",
    answerZh:
      "浙江联合会是由在西澳的浙江同仁共同建立的非营利性社区组织，致力于促进乡情联结、互助支持以及中澳文化交流。我们的使命是在西澳建设一个温暖、互助、具有凝聚力的浙江社群。",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-premium-page">
      <section className="section contact-faq-premium">
        <div className="events-wide-container contact-section-grid">
          <ScrollReveal>
            <div className="contact-section-copy">
              <span className="section-kicker">
                <BilingualText en="FAQ" zh="常见问题" />
              </span>
              <h1 className="contact-page-title">
                <BilingualText
                  en="Before you get in touch"
                  zh="联系之前，先看这里"
                />
              </h1>
              <p className="contact-page-description">
                <BilingualText
                  en="The most common questions about joining, fees, and community participation are answered below."
                  zh="关于入会、会费与社区参与的常见问题，我们已整理在下面。"
                />
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section contact-info-premium">
        <div className="events-wide-container contact-info-grid">
          <ScrollReveal>
            <div className="contact-section-copy">
              <span className="section-kicker">
                <BilingualText en="Contact Information" zh="联系方式" />
              </span>
              <h2 className="contact-page-title">
                <BilingualText
                  en="Western Australia Zhejiang Association"
                  zh="西澳大利亚浙江联合会"
                />
              </h2>
              <p className="contact-page-description">
                <BilingualText
                  en="We welcome enquiries about membership, events, partnerships, and community initiatives."
                  zh="欢迎咨询会员申请、活动参与、合作洽谈与社区项目。"
                />
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="contact-details-panel">
              <a
                className="contact-detail-row"
                href="mailto:wazhejianassociation@gmail.com"
              >
                <span className="contact-detail-icon">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">
                    wazhejianassociation@gmail.com
                  </span>
                </div>
              </a>

              <a className="contact-detail-row" href="tel:+61452558523">
                <span className="contact-detail-icon">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <span className="contact-detail-value">+61 0452 558 523</span>
                </div>
              </a>

              <a
                className="contact-detail-row"
                href="https://www.google.com/maps/search/?api=1&query=Unit+5+%2F+10+Canning+Highway%2C+South+Perth%2C+WA+6151"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-icon">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-detail-label">Address</span>
                  <span className="contact-detail-value">
                    Unit 5 / 10 Canning Highway, South Perth, WA 6151
                  </span>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section contact-map-premium">
        <div className="events-wide-container">
          <ScrollReveal>
            <div className="contact-section-copy">
              <span className="section-kicker">
                <BilingualText en="Map" zh="地图" />
              </span>
              <h2 className="contact-page-title contact-map-title">
                <BilingualText en="Find Us" zh="找到我们" />
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="contact-map-frame">
              <iframe
                title="Western Australia Zhejiang Association map"
                src="https://www.google.com/maps?q=Unit+5+%2F+10+Canning+Highway%2C+South+Perth%2C+WA+6151&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
