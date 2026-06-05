import { ScrollReveal } from "@/components/common/ScrollReveal";

export function NewsletterBanner() {
  return (
    <section className="section">
      <ScrollReveal className="container card" >
        <div style={{ background: "var(--surface-soft)", padding: 32, borderRadius: 10 }}>
          <h2>Stay Connected with WAZAI</h2>
          <p className="zh">关注 WAZAI 最新动态</p>
          <p>Get event updates, member opportunities, and community stories every month.</p>
          <form style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input aria-label="Email address" type="email" placeholder="Your email address 邮箱地址" style={{ minHeight: 48, borderRadius: 8, border: "1px solid var(--border-light)", padding: "0 16px", minWidth: 260 }} />
            <button className="btn btn-primary" type="submit">Subscribe 订阅</button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
