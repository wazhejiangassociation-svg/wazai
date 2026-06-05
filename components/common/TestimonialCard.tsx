import Image from "next/image";
import { ScrollReveal } from "@/components/common/ScrollReveal";

type Props = { quote: string; name: string; role: string; image: string };

export function TestimonialCard({ quote, name, role, image }: Props) {
  return (
    <ScrollReveal>
      <article className="card" style={{ padding: 24 }}>
        <Image src={image} alt={name} width={64} height={64} style={{ width: 64, height: 64, borderRadius: 8, objectFit: "cover", marginBottom: 12 }} />
        <p style={{ fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
        <p style={{ marginBottom: 0, color: "var(--heritage-brown)", fontWeight: 600 }}>{name}</p>
        <p style={{ marginTop: 4 }}>{role}</p>
      </article>
    </ScrollReveal>
  );
}
