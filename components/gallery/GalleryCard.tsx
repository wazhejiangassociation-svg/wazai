import Image from "next/image";
import { ScrollReveal } from "@/components/common/ScrollReveal";

type Props = { image: string; alt: string; caption?: string };

export function GalleryCard({ image, alt, caption }: Props) {
  return (
    <ScrollReveal>
      <figure className="card" style={{ overflow: "hidden", margin: 0 }}>
        <Image src={image} alt={alt} width={640} height={240} style={{ width: "100%", height: 240, objectFit: "cover" }} />
        {caption ? <figcaption style={{ padding: 12 }}>{caption}</figcaption> : null}
      </figure>
    </ScrollReveal>
  );
}
