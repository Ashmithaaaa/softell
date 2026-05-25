import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["How It Works", "Why Us", "Testimonials", "Contact"];

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(/ /g, "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1rem 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "var(--surface)" : "transparent",
      boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
      transition: "all 0.3s"
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.35rem", letterSpacing: "-0.02em" }}>
        <span style={{ color: "var(--accent)" }}>Soft</span>Sell
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ background: "none", border: "none", color: "var(--ink2)", fontSize: "0.9rem", fontWeight: 500, cursor: "pointer" }}>
              {link}
            </button>
          ))}
        </div>
        <button onClick={toggleTheme} aria-label="Toggle theme"
          style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "50%", width: 36, height: 36, fontSize: "1rem", cursor: "pointer" }}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button onClick={() => scrollTo("Contact")}
          style={{ background: "var(--accent)", color: "#fff", border: "none", borderRadius: "8px", padding: "0.5rem 1.2rem", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer" }}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8rem 2rem 4rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "100px", padding: "0.4rem 1rem", fontSize: "0.8rem", fontWeight: 500, color: "var(--ink2)", marginBottom: "2rem" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
        Trusted by 12,000+ businesses
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 820, marginBottom: "1.5rem" }}>
        Turn Unused Software<br /><span style={{ color: "var(--accent)" }}>Into Real Cash</span>
      </h1>
      <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--ink2)", maxWidth: 560, lineHeight: 1.7, marginBottom: "2.5rem", fontWeight: 300 }}>
        SoftSell is the marketplace where businesses sell unused software licenses and buyers get verified software at up to 70% off retail price.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: "var(--accent)", color: "#fff", border: "none", borderRadius: "10px", padding: "0.9rem 2rem", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>
          Sell My Licenses
        </button>
        <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: "transparent", color: "var(--ink)", border: "1.5px solid var(--border)", borderRadius: "10px", padding: "0.9rem 2rem", fontSize: "1rem", fontWeight: 500, cursor: "pointer" }}>
          See How It Works →
        </button>
      </div>
      <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
        {[["$40M+", "Paid to sellers"], ["70%", "Avg savings"], ["48hr", "Avg payout time"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800 }}>{num}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--ink2)", marginTop: "0.2rem" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  { icon: "📤", num: "01", title: "Upload Your License", desc: "Tell us what software licenses you have. We support 500+ major software vendors including Adobe, Microsoft, Autodesk, and more." },
  { icon: "✅", num: "02", title: "Get a Valuation", desc: "Our system analyzes market demand and gives you a competitive quote within minutes. No haggling, no waiting." },
  { icon: "💸", num: "03", title: "Get Paid Fast", desc: "Accept the offer and receive payment via bank transfer or PayPal within 48 hours. It is that simple." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel>The Process</SectionLabel>
      <h2 style={headingStyle}>How It Works</h2>
      <p style={subStyle}>Selling unused software takes under 5 minutes.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
        {STEPS.map((step, i) => (
          <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "1rem", right: "1.2rem", fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 800, color: "var(--border)", lineHeight: 1 }}>{step.num}</div>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{step.icon}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{step.title}</h3>
            <p style={{ color: "var(--ink2)", fontSize: "0.925rem", lineHeight: 1.7 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const REASONS = [
  { icon: "🔒", title: "Verified & Secure", desc: "Every license is authenticated before listing. Buyers get what they pay for, every time." },
  { icon: "⚡", title: "Instant Valuation", desc: "AI-powered pricing engine gives you a fair market quote in real time, not days." },
  { icon: "🌍", title: "Global Marketplace", desc: "Connect with buyers and sellers across 60+ countries. Wider reach means better prices." },
  { icon: "💬", title: "Dedicated Support", desc: "Our team is available 7 days a week to guide you through every transaction." },
  { icon: "📊", title: "Market Analytics", desc: "See live pricing trends so you know exactly when to sell for maximum value." },
  { icon: "🤝", title: "Buyer Protection", desc: "Full money-back guarantee for 30 days. Zero-risk purchases, always." },
];

function WhyUs() {
  return (
    <section id="why-us" style={{ padding: "6rem 2rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Why Choose Us</SectionLabel>
        <h2 style={headingStyle}>Built for Trust, Speed & Value</h2>
        <p style={subStyle}>We built SoftSell because businesses waste millions on licenses they never use.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem", marginTop: "3rem" }}>
          {REASONS.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: "1rem", padding: "1.5rem", background: "var(--surface)", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "1.75rem", flexShrink: 0 }}>{r.icon}</div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>{r.title}</h3>
                <p style={{ color: "var(--ink2)", fontSize: "0.875rem", lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Sarah Mitchell", role: "IT Manager", company: "Praxis Systems", avatar: "SM", review: "We had 40 unused Adobe licenses sitting after a team restructure. SoftSell gave us a valuation in minutes and we had the money in two days. Genuinely surprised how painless it was.", rating: 5 },
  { name: "David Okafor", role: "Founder", company: "NexaStack", avatar: "DO", review: "As a startup, we needed Autodesk tools but could not afford retail. Found verified licenses on SoftSell at 65% off. The whole process took 20 minutes and everything worked perfectly.", rating: 5 },
  { name: "Priya Nair", role: "CFO", company: "Brightline Analytics", avatar: "PN", review: "Finally a platform that takes software asset management seriously. We have sold 3 rounds of licenses through SoftSell and each time it has been faster than the last. Highly recommended.", rating: 5 },
];

function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel>Social Proof</SectionLabel>
      <h2 style={headingStyle}>Loved by Businesses Worldwide</h2>
      <p style={subStyle}>Join thousands of companies who have unlocked value from unused software.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ color: "#f59e0b", fontSize: "0.9rem" }}>{"★".repeat(t.rating)}</div>
            <p style={{ color: "var(--ink)", fontSize: "0.95rem", lineHeight: 1.75, fontStyle: "italic", fontWeight: 300 }}>"{t.review}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{t.avatar}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                <div style={{ color: "var(--ink2)", fontSize: "0.8rem" }}>{t.role}, {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const LICENSE_TYPES = ["Adobe Creative Cloud", "Microsoft Office", "Autodesk Suite", "Salesforce", "Other"];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.license) e.license = "Please select a license type";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = { width: "100%", padding: "0.75rem 1rem", background: "var(--bg)", border: "1.5px solid var(--border)", borderRadius: "8px", fontSize: "0.925rem", color: "var(--ink)", fontFamily: "var(--font-body)", outline: "none" };

  return (
    <section id="contact" style={{ padding: "6rem 2rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <SectionLabel>Get In Touch</SectionLabel>
        <h2 style={headingStyle}>Ready to Sell?</h2>
        <p style={subStyle}>Tell us about your licenses and we will get back with a valuation within 24 hours.</p>
        {submitted ? (
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "3rem", textAlign: "center", marginTop: "2.5rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>We got your message!</h3>
            <p style={{ color: "var(--ink2)" }}>Expect a valuation in your inbox within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem", marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "var(--border)" }} placeholder="Jane Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                {errors.name && <span style={{ color: "#ef4444", fontSize: "0.8rem" }}>{errors.name}</span>}
              </div>
              <div>
                <label style={labelStyle}>Work Email *</label>
                <input style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : "var(--border)" }} placeholder="jane@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                {errors.email && <span style={{ color: "#ef4444", fontSize: "0.8rem" }}>{errors.email}</span>}
              </div>
            </div>
            <div>
              <label style={labelStyle}>Company</label>
              <input style={inputStyle} placeholder="Your company name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
            </div>
            <div>
              <label style={labelStyle}>License Type *</label>
              <select style={{ ...inputStyle, borderColor: errors.license ? "#ef4444" : "var(--border)" }} value={form.license} onChange={e => setForm({ ...form, license: e.target.value })}>
                <option value="">Select license type...</option>
                {LICENSE_TYPES.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              {errors.license && <span style={{ color: "#ef4444", fontSize: "0.8rem" }}>{errors.license}</span>}
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea style={{ ...inputStyle, height: 100, resize: "vertical" }} placeholder="Tell us more about the licenses you want to sell..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" style={{ background: "var(--accent)", color: "#fff", border: "none", borderRadius: "10px", padding: "0.9rem", fontSize: "1rem", fontWeight: 600, cursor: "pointer", width: "100%" }}>
              Get My Valuation →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", text: "Hi! I am the SoftSell assistant. Ask me anything about selling your software licenses 👋" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are SoftSell's helpful AI assistant. SoftSell is a marketplace for buying and selling unused software licenses. Answer questions about the process of selling licenses, valuations, supported vendors (500+), payment timelines (48 hours), pricing (up to 70% off retail), buyer protection (30 day guarantee). Be concise and friendly. Keep responses to 2-3 sentences max.",
          messages: newMessages.map(m => ({ role: m.role === "user" ? "user" : "assistant", content: m.text }))
        })
      });
      const data = await res.json();
      const reply = data.content?.find(c => c.type === "text")?.text || "Sorry, try again.";
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "I am having trouble connecting. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 200 }}>
      {open && (
        <div style={{ position: "absolute", bottom: "4.5rem", right: 0, width: 340, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ background: "var(--accent)", color: "#fff", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem" }}>SoftSell AI</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>Ask me anything</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: "1.4rem", cursor: "pointer" }}>×</button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem", maxHeight: 320 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{ background: m.role === "user" ? "var(--accent)" : "var(--bg2)", color: m.role === "user" ? "#fff" : "var(--ink)", padding: "0.65rem 0.9rem", borderRadius: "12px", borderBottomRightRadius: m.role === "user" ? 4 : 12, borderBottomLeftRadius: m.role === "assistant" ? 4 : 12, maxWidth: "85%", fontSize: "0.875rem", lineHeight: 1.5 }}>{m.text}</div>
              </div>
            ))}
            {loading && <div style={{ display: "flex", justifyContent: "flex-start" }}><div style={{ background: "var(--bg2)", padding: "0.65rem 0.9rem", borderRadius: "12px", borderBottomLeftRadius: 4, fontSize: "0.875rem", color: "var(--ink2)" }}>Thinking...</div></div>}
            <div ref={endRef} />
          </div>
          <div style={{ padding: "0.75rem", borderTop: "1px solid var(--border)", display: "flex", gap: "0.5rem" }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Ask a question..." style={{ flex: 1, padding: "0.6rem 0.85rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "0.875rem", color: "var(--ink)", fontFamily: "var(--font-body)", outline: "none" }} />
            <button onClick={send} disabled={loading} style={{ background: "var(--accent)", color: "#fff", border: "none", borderRadius: "8px", padding: "0.6rem 1rem", fontSize: "0.9rem", cursor: "pointer" }}>→</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(o => !o)} style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--accent)", color: "#fff", border: "none", fontSize: "1.4rem", boxShadow: "0 4px 20px rgba(200,75,47,0.4)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} aria-label="Open chat">
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", textAlign: "center", color: "var(--ink2)", fontSize: "0.875rem" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}><span style={{ color: "var(--accent)" }}>Soft</span>Sell</div>
      <p>© {new Date().getFullYear()} SoftSell. Turning unused licenses into value.</p>
    </footer>
  );
}

const SectionLabel = ({ children }) => (
  <div style={{ display: "inline-block", background: "var(--accent)", color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.3rem 0.85rem", borderRadius: "100px", marginBottom: "1rem" }}>{children}</div>
);
const headingStyle = { fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.15 };
const subStyle = { color: "var(--ink2)", fontSize: "1rem", maxWidth: 520, lineHeight: 1.75, fontWeight: 300, marginBottom: 0 };
const labelStyle = { display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--ink2)", marginBottom: "0.4rem" };

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}
