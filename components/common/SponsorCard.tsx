import {ScrollReveal} from "@/components/common/ScrollReveal";

type Props = {name: string; description: string; website: string};

export function SponsorCard({name, description, website}: Props) {
  return (
    <ScrollReveal>
      <article className="card" style={{padding: 24}}>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={website} target="_blank" rel="noreferrer" className="btn btn-secondary">Visit Website</a>
      </article>
    </ScrollReveal>
  );
}
