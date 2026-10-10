import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Layers3, Sparkles, Command, Github, Linkedin, Mail } from "lucide-react";

const projects = [
  { n: "01", name: "Forma", type: "Brand platform · 2025", color: "forma", mark: "forma.", desc: "A calmer way to build a brand.", tag: "Brand & digital" },
  { n: "02", name: "Monument", type: "Digital product · 2025", color: "monument", mark: "M", desc: "Making the everyday feel considered.", tag: "Product design" },
  { n: "03", name: "Sunday Studio", type: "E-commerce · 2024", color: "sunday", mark: "SUNDAY", desc: "A little more ritual. A little less rush.", tag: "Web experience" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#" aria-label="Cupertino home"><span className="logo-symbol"><Asterisk size={21} strokeWidth={2.6}/></span> cupertino<span className="period">.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="availability" href="#contact"><span className="live-dot"/> Available for select projects <ArrowUpRight size={14}/></a>
      </nav>

      <section className="hero shell">
        <div className="eyebrow"><span className="eyebrow-line"/> INDEPENDENT DESIGNER & DEVELOPER <span className="eyebrow-year">2025 — 2026</span></div>
        <h1>Good design<br/>feels <span className="serif">like</span> <span className="soft-word">something.</span></h1>
        <div className="hero-bottom">
          <p className="hero-copy">I turn ambitious ideas into <strong>thoughtful digital experiences</strong> — clear in purpose, delightful in detail, and built to last.</p>
          <a href="#work" className="round-link" aria-label="Explore selected work"><ArrowDownRight size={22}/></a>
        </div>
        <div className="hero-art" aria-label="Abstract sculptural artwork">
          <div className="art-glow"/>
          <div className="art-orb orb-one"/><div className="art-orb orb-two"/><div className="art-orb orb-three"/>
          <div className="art-ring ring-one"/><div className="art-ring ring-two"/>
          <div className="art-caption"><span>FIG. 001</span><span>FORM, IN MOTION</span><span>37° 19′ N / 122° 02′ W</span></div>
          <div className="art-stamp"><Asterisk size={26}/><span>MADE WITH<br/>INTENTION</span></div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="foot-center">DESIGN × TECHNOLOGY × FEELING</span><span>BASED IN THE INTERNET</span></div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading"><div><span className="kicker">A FEW GOOD THINGS</span><h2>Selected <span className="serif">work.</span></h2></div><p>A small collection of ideas<br/>made real, with care.</p></div>
        <div className="project-list">
          {projects.map((p) => <a href="#contact" className="project" key={p.n}>
            <div className={`project-art ${p.color}`}>
              {p.color === "forma" && <><span className="forma-orbit orbit-a"/><span className="forma-orbit orbit-b"/><span className="forma-core">{p.mark}</span><span className="mini-label">IDENTITY / 2025</span></>}
              {p.color === "monument" && <><span className="monument-shape"/><span className="monument-letter">{p.mark}</span><span className="mini-label">OBJECTS FOR LIVING</span></>}
              {p.color === "sunday" && <><span className="sunday-sun"/><span className="sunday-type">{p.mark}</span><span className="mini-label">TAKE IT SLOW</span></>}
              <span className="project-open"><ArrowUpRight size={19}/></span>
            </div>
            <div className="project-info"><div><span className="project-number">{p.n} / {p.type}</span><h3>{p.name}</h3><p>{p.desc}</p></div><span className="project-tag">{p.tag}</span></div>
          </a>)}
        </div>
        <div className="more-work"><span>THAT’S THE SHORT VERSION.</span><a href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="about-section" id="about"><div className="shell about-grid">
        <div className="about-left"><span className="kicker">A LITTLE ABOUT ME</span><div className="about-icon"><Sparkles size={28}/></div><span className="about-note">CURIOUS BY NATURE.<br/>INTENTIONAL BY DESIGN.</span></div>
        <div className="about-right"><h2>Less, but<br/><span className="serif">with meaning.</span></h2><p>I’m a multidisciplinary creative who believes the best digital work lives where <strong>clarity meets character.</strong> I partner with people who care about the details — from the first sketch to the final pixel.</p><p>My approach is simple: listen closely, think deeply, make things that matter.</p><div className="skill-row"><span>WHAT I BRING</span><div><span>Art direction</span><span>Digital design</span><span>Development</span><span>Creative strategy</span></div></div></div>
      </div></section>

      <section className="contact-section shell" id="contact">
        <div className="contact-top"><span className="kicker">HAVE A GOOD ONE IN MIND?</span><span className="contact-index">LET’S MAKE IT REAL ↘</span></div>
        <h2>Let’s make<br/>something <span className="serif">matter.</span></h2>
        <a className="contact-button" href="mailto:hello@cupertino.design">Tell me about it <ArrowUpRight size={18}/></a>
        <div className="contact-bottom"><p>Have a project, a question, or just want to say hello?<br/>My inbox is always open for good people and good ideas.</p><div className="socials"><a href="https://github.com" aria-label="GitHub"><Github size={17}/></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:hello@cupertino.design" aria-label="Email"><Mail size={17}/></a></div></div>
      </section>
      <footer className="footer shell"><a className="wordmark" href="#"><span className="logo-symbol"><Asterisk size={19}/></span> cupertino<span className="period">.</span></a><span>INDEPENDENT BY DESIGN © 2026</span><a href="#">BACK TO TOP ↑</a></footer>
    </main>
  );
}