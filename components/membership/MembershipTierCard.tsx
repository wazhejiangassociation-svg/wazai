import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BilingualText } from "@/components/common/BilingualText";

type Props = {
  titleEn: string;
  titleZh: string;
  priceEn: string;
  priceZh: string;
  benefitsEn: string[];
  benefitsZh: string[];
};

export function MembershipTierCard({
  titleEn,
  titleZh,
  priceEn,
  priceZh,
  benefitsEn,
  benefitsZh,
}: Props) {
  return (
    <ScrollReveal>
      <article className="membership-tier-card">
        <h3>
          <BilingualText en={titleEn} zh={titleZh} />
        </h3>

        <p className="membership-tier-price">
          <BilingualText en={priceEn} zh={priceZh} />
        </p>

        <ul>
          {benefitsEn.map((item, index) => (
            <li key={item}>
              <BilingualText en={item} zh={benefitsZh[index]} />
            </li>
          ))}
        </ul>

        <Link href="/contact" className="membership-benefit-button">
          <BilingualText en="Apply" zh="立即申请" />
        </Link>
      </article>
    </ScrollReveal>
  );
}