import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BilingualText } from "@/components/common/BilingualText";

type Props = {
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  index?: number;
  featured?: boolean;
};

export function MembershipBenefitCard({
  titleEn,
  titleZh,
  descriptionEn,
  descriptionZh,
  index = 1,
  featured = false,
}: Props) {
  return (
    <ScrollReveal delay={index * 80}>
      <article
        className={
          featured
            ? "membership-benefit-card membership-benefit-card-featured"
            : "membership-benefit-card"
        }
      >
        <div className="membership-benefit-index">
          {String(index).padStart(2, "0")}
        </div>

        <h3>
          <BilingualText en={titleEn} zh={titleZh} />
        </h3>

        <p>
          <BilingualText en={descriptionEn} zh={descriptionZh} />
        </p>

        <Link href="/contact" className="membership-benefit-button">
          <BilingualText en="Contact Us" zh="鑱旂郴鎴戜滑" />
        </Link>
      </article>
    </ScrollReveal>
  );
}
