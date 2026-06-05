import { ScrollReveal } from "@/components/common/ScrollReveal";

export function ContactForm() {
  return (
    <ScrollReveal className="card">
      <form style={{ padding: 24, display: "grid", gap: 12 }}>
      <label>
        Name 姓名
        <input style={{ width: "100%", minHeight: 48, borderRadius: 8, border: "1px solid var(--border-light)", padding: "0 12px" }} />
      </label>
      <label>
        Email 邮箱
        <input type="email" style={{ width: "100%", minHeight: 48, borderRadius: 8, border: "1px solid var(--border-light)", padding: "0 12px" }} />
      </label>
      <label>
        Message 留言
        <textarea rows={5} style={{ width: "100%", borderRadius: 8, border: "1px solid var(--border-light)", padding: 12 }} />
      </label>
      <button className="btn btn-primary" type="submit">Send 发送信息</button>
      </form>
    </ScrollReveal>
  );
}
