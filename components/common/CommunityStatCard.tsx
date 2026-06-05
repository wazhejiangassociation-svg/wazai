import { ScrollReveal } from "@/components/common/ScrollReveal";

type Props = { value: string; label: string };

export function CommunityStatCard({ value, label }: Props) {
  return (
    <ScrollReveal>
      <article className="card" style={{ padding: 24, textAlign: "center" }}>
        <p style={{ fontSize: "2rem", color: "var(--primary-gold-dark)", fontWeight: 700, margin: 0 }}>{value}</p>
        <p style={{ margin: "8px 0 0" }}>{label}</p>
      </article>
    </ScrollReveal>
  );
}
