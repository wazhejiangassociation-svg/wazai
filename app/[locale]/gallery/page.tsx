import { BilingualText } from "@/components/common/BilingualText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { GalleryShowcase } from "@/components/gallery/GalleryShowcase";

export default function GalleryPage() {
  return (
    <main className="gallery-premium-page">
      <section
        className="events-editorial-hero gallery-hero-premium"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47, 41, 36, 0.5), rgba(47, 41, 36, 0.62)), url('/gallery.png')"
        }}
      >
        <div className="events-editorial-hero-inner">
          <ScrollReveal>
            <h1 className="events-editorial-title">
              <BilingualText en="Moments We Share" zh="我们共同记录的时刻" />
            </h1>
            <p className="events-editorial-subtitle gallery-hero-subtitle">
              <BilingualText
                en="A visual record of our gatherings, celebrations, partnerships, and community stories across Western Australia."
                zh="记录我们在西澳共同参与的聚会、庆典、合作与社区故事。"
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section gallery-showcase-section">
        <div className="events-wide-container">
          <ScrollReveal>
            <GalleryShowcase />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
