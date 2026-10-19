import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Menu, X, Code2, Globe2, Sparkles, Layers3,
  Smartphone, Cloud, Database, Palette, ChevronDown, Bot, Send,
  MessageCircle, Mail
} from "lucide-react";
import "./styles.css";

const WHATSAPP = "https://wa.me/918755521600";
const EMAIL = "hello@theinitalkyrotech.com";

const services = [
  {
    id: "01",
    tag: "ENGINEERING",
    title: "Software Development",
    icon: Code2,
    desc: "Custom software, APIs and full-stack platforms engineered for scale, reliability and clean user experiences.",
    points: [
      "Custom business platforms",
      "REST / API development",
      "Scalable full-stack systems",
      "Legacy modernization"
    ]
  },
  {
    id: "02",
    tag: "NO-CODE",
    title: "No-Code Development",
    icon: Layers3,
    desc: "Launch practical digital products faster with no-code and low-code systems tailored to your workflow.",
    points: [
      "Internal tools",
      "Automations & workflows",
      "Rapid MVP builds",
      "CMS & operations"
    ]
  },
  {
    id: "03",
    tag: "MOBILE",
    title: "Mobile App Development",
    icon: Smartphone,
    desc: "Native and cross-platform applications with smooth, reliable experiences across modern devices.",
    points: [
      "Android & iOS",
      "React Native",
      "Flutter apps",
      "App deployment"
    ]
  },
  {
    id: "04",
    tag: "WEB",
    title: "Web Development",
    icon: Globe2,
    desc: "Fast, responsive and conversion-focused websites for brands, institutions and growing businesses.",
    points: [
      "Business websites",
      "E-commerce",
      "Dashboards",
      "SEO-ready builds"
    ]
  },
  {
    id: "05",
    tag: "DESIGN",
    title: "UI/UX Design",
    icon: Palette,
    desc: "Premium interfaces and product systems that make complex technology simple and intuitive.",
    points: [
      "Product UX",
      "Design systems",
      "Prototyping",
      "Interaction design"
    ]
  },
  {
    id: "06",
    tag: "INFRASTRUCTURE",
    title: "Cloud Solutions",
    icon: Cloud,
    desc: "Modern cloud architecture, deployments and infrastructure built for performance and dependable delivery.",
    points: [
      "Cloud architecture",
      "CI/CD pipelines",
      "Hosting & deployment",
      "Monitoring"
    ]
  },
  {
    id: "07",
    tag: "DATA",
    title: "Database Management",
    icon: Database,
    desc: "Structured data systems designed for security, performance, reporting and long-term maintainability.",
    points: [
      "Database design",
      "Data migration",
      "Performance tuning",
      "Backups & security"
    ]
  },
  {
    id: "08",
    tag: "INTELLIGENCE",
    title: "AI Agent Solutions",
    icon: Bot,
    desc: "Intelligent agents and automation systems that turn repetitive work into smarter, autonomous workflows.",
    points: [
      "AI chatbots & assistants",
      "Process automation",
      "LLM integrations",
      "AI-powered business tools"
    ]
  }
];

const capabilities = [
  [
    "01",
    "Engineering",
    Code2,
    "Custom software, APIs, and full-stack platforms engineered for scale and reliability.",
    ["React", "Node.js", "TypeScript", "GraphQL"]
  ],
  [
    "02",
    "Mobile",
    Smartphone,
    "Native iOS, Android, and cross-platform apps with smooth, native-feeling experiences.",
    ["React Native", "Swift", "Kotlin", "Flutter"]
  ],
  [
    "03",
    "Cloud & DevOps",
    Cloud,
    "Scalable cloud architecture, CI/CD pipelines, and modern infrastructure-as-code.",
    ["AWS", "GCP", "Docker", "Kubernetes"]
  ],
  [
    "04",
    "AI & Automation",
    Sparkles,
    "Intelligent agents, ML pipelines, and automation that turn data into business outcomes.",
    ["LLMs", "Python", "LangChain", "Vector DBs"]
  ],
  [
    "05",
    "Data & Analytics",
    Database,
    "Database design, ETL pipelines, and analytics dashboards that surface what matters.",
    ["PostgreSQL", "Redis", "BigQuery", "dbt"]
  ],
  [
    "06",
    "Design",
    Palette,
    "Pixel-perfect UI, motion, and brand systems that make products feel inevitable.",
    ["Figma", "Framer", "Motion", "Design Systems"]
  ]
];

const projects = [
  {
    title: "THE SANTA KIDZ",
    cat: "EDUCATION",
    desc: "Complete school website and parent-facing management platform with attendance, examinations, performance, homework, complaints and parent communication.",
    theme: "school"
  },
  {
    title: "KESHAVPUR DHAM",
    cat: "TEMPLE & BOOKING",
    desc: "Modern digital platform with room booking, Google Maps integration, information pages and a premium responsive interface.",
    theme: "temple"
  },
  {
    title: "AI HEALTHCARE",
    cat: "ARTIFICIAL INTELLIGENCE",
    desc: "AI-powered healthcare platform featuring symptom analysis, treatment guidance and nutrition analysis.",
    theme: "healthcare"
  },
  {
    title: "RAJ MEDICAL",
    cat: "MEDICAL MANAGEMENT",
    desc: "Medical store management system for product entry, stock management, sales tracking and business reports.",
    theme: "medical"
  },
  {
    title: "KYROSCANNER",
    cat: "PRODUCTIVITY",
    desc: "Document scanning and PDF utility application designed for creating and managing digital documents.",
    theme: "scanner"
  },
  {
    title: "GREEN HUB",
    cat: "CAFE MANAGEMENT",
    desc: "Cafe management platform with menu management, table booking, QR menu, pricing, discounts and sales reporting.",
    theme: "cafe"
  },
  {
    title: "SMART ATTENDANCE",
    cat: "EDUCATION TECHNOLOGY",
    desc: "QR-based university attendance platform with faculty controls, student verification and digital classroom features.",
    theme: "attendance"
  },
  {
    title: "E-COMMERCE ORDER MANAGEMENT",
    cat: "E-COMMERCE",
    desc: "Order management system for products, customers, orders and transaction records.",
    theme: "ecommerce"
  },
  {
    title: "TALLY-STYLE BUSINESS MANAGER",
    cat: "BUSINESS SOFTWARE",
    desc: "Business management interface for item entry, data management and accounting-style workflows.",
    theme: "business"
  },
  {
    title: "THE KYRO",
    cat: "BRAND PLATFORM",
    desc: "Digital platform for THE KYRO covering brand, products, gaming and technology initiatives.",
    theme: "kyro"
  },
  {
    title: "THE INITIAL KYRO TECH",
    cat: "TECHNOLOGY",
    desc: "Premium technology company website featuring animated visuals, services, projects and technology showcase.",
    theme: "technology"
  },
    
];

const logos = [
  "SHARDA UNIVERSITY AGRA",
  "SIH / INNOVATION CELL",
  "SUSTAINABLE DEVELOPMENT GOALS",
  "THE SANTA KIDZ",
  "KESHAVPUR DHAM",
  "KYRO PROJECTS"
];

const techs = [
  "Docker",
  "Kubernetes",
  "GraphQL",
  "React Native",
  "Swift",
  "MongoDB",
  "Redis",
  "AWS",
  "GCP",
  "Firebase",
  "Vercel",
  "Python"
];

function Stars() {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    const ctx = c.getContext("2d");

    let w;
    let h;
    let dots = [];
    let raf;

    const resize = () => {
      const d = devicePixelRatio || 1;

      w = c.width = innerWidth * d;
      h = c.height = innerHeight * d;

      c.style.width = innerWidth + "px";
      c.style.height = innerHeight + "px";

      dots = Array.from(
        {
          length: Math.min(
            300,
            Math.floor(innerWidth / 4)
          )
        },
        () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.25,
          a: Math.random() * 0.65 + 0.15,
          s: Math.random() * 0.22 + 0.03
        })
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      dots.forEach((p) => {
        p.y -= p.s * (devicePixelRatio || 1);

        p.x +=
          Math.sin(p.y * 0.001) *
          0.03 *
          (devicePixelRatio || 1);

        if (p.y < 0) {
          p.y = h;
        }

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.r * (devicePixelRatio || 1),
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(190,220,255,${p.a})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();

    addEventListener("resize", resize);

    draw();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvas} className="stars" />;
}

function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
    }, 4300);

    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="introScreen">

      <div className="introStars" />

      <div className="introGlow glowOne" />
      <div className="introGlow glowTwo" />

      <div className="projectFloat projectOne">
        THE SANTA KIDZ
      </div>

      <div className="projectFloat projectTwo">
        AI HEALTHCARE
      </div>

      <div className="projectFloat projectThree">
        KESHAVPUR DHAM
      </div>

      <div className="introPlanet">

        <div className="introOrbit orbitA" />
        <div className="introOrbit orbitB" />
        <div className="introOrbit orbitC" />

        <div className="introPlanetCore">
          <span>KYRO</span>
        </div>

      </div>

      <div className="introBrand">

        <div className="introSmall">
          THE INITIAL
        </div>

        <div className="introMain">
          KYRO
        </div>

        <div className="introTech">
          TECH
        </div>

        <div className="introLine" />

        <p>
          TECHNOLOGY · DESIGN · ENGINEERING
        </p>

      </div>

      {Array.from(
        { length: 8 },
        (_, i) => (
          <div
            key={i}
            className={`sparkle s${i + 1}`}
          >
            ✦
          </div>
        )
      )}

      <div className="introLoading">
        <span />
        INITIALIZING KYRO
      </div>

    </div>
  );
}

function Marquee({ items, className = "" }) {
  return (
    <div className={`marquee ${className}`}>

      <div className="marqueeTrack">

        <div className="marqueeGroup">
          {items.map((x, i) => (
            <span key={`a-${i}`}>
              {x}
            </span>
          ))}
        </div>

        <div
          className="marqueeGroup"
          aria-hidden="true"
        >
          {items.map((x, i) => (
            <span key={`b-${i}`}>
              {x}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  accent,
  desc
}) {
  return (
    <div className="sectionHeader">

      <div className="eyebrow">
        {eyebrow}
      </div>

      <h2>
        {title} <em>{accent}</em>
      </h2>

      {desc && (
        <p>
          {desc}
        </p>
      )}

    </div>
  );
}
function MeetTheTeam({ go }) {
  const founders = [
  {
    name: "Vaibhav Upadhyay",
    role: "Founder & CEO",
    image: "/team/vaibhav-upadhyay.jpg",
    description:
      "Driving the vision, product strategy and technology behind THE INITIAL KYRO TECH.",
    initials: "VU",
  },
  {
    name: "Deep Saxena",
    role: "Co-Founder",
    image: "/team/Deep-Saxena.jpg",
    description:
      "Building the future with innovation, collaboration and technology-driven ideas.",
    initials: "DS",
  },
];

  return (
    <section id="team" className="cosmicSection teamSection">
      <div className="sectionHeader">
        <div className="eyebrow">03 / THE PEOPLE BEHIND KYRO</div>

        <h2>
          Meet the <em>Minds Behind KYRO.</em>
        </h2>

        <p>
          Two minds. One vision. Building technology for tomorrow.
        </p>
      </div>

      <div className="teamGrid">
        {founders.map((founder) => (
          <article className="teamCard" key={founder.name}>
            <div className="teamPhotoWrap">
              <img
                src={founder.image}
                alt={founder.name}
                className="teamPhoto"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display =
                    "grid";
                }}
              />

              <div className="teamPhotoFallback">
                {founder.initials}
              </div>

              <span className="teamPhotoLabel">THE INITIAL KYRO TECH</span>
            </div>

            <div className="teamInfo">
              <span className="teamRole">{founder.role}</span>

              <h3>{founder.name}</h3>

              <p>{founder.description}</p>

              <button
                className="teamContactBtn"
                onClick={() => go("contact")}
              >
                Connect with KYRO
                <ArrowUpRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function App() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(7);
  const [project, setProject] = useState(0);

  useEffect(() => {

    const f = () => {
      setScrolled(scrollY > 50);
    };

    addEventListener("scroll", f);

    return () => {
      removeEventListener("scroll", f);
    };

  }, []);

  const go = (id) => {
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  const activeService = services[active];

  const ActiveIcon = activeService.icon;

  return (
    <div className="page">

      <Intro />

      <Stars />

      <div className="nebula n1" />
      <div className="nebula n2" />

      <header
        className={
          scrolled
            ? "nav scrolled"
            : "nav"
        }
      >

        <button
          className="logo"
          onClick={() => go("home")}
        >
          <small>THE INITIAL</small>
          <strong>KYRO</strong>
          <i>TECH</i>
        </button>

        <div className="links">

          <button onClick={() => go("about")}>
            About
          </button>

          <button onClick={() => go("services")}>
            Services
          </button>

          <button onClick={() => go("work")}>
            Work
          </button>

          <button onClick={() => go("contact")}>
            Contact
          </button>

        </div>

        <button
          className="navCta"
          onClick={() => go("contact")}
        >
          Let's connect
          <ArrowUpRight size={15} />
        </button>

        <button
          className="hamb"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </header>

      {open && (
        <div className="mobileLinks">

          {[
            "about",
            "services",
            "work",
            "contact"
          ].map((x) => (
            <button
              key={x}
              onClick={() => go(x)}
            >
              {x}
            </button>
          ))}

        </div>
      )}

      <main>

        <section
          id="home"
          className="cosmicHero"
        >

          <div className="heroCopy">

            <div className="pill">
              <span />
              TECHNOLOGY · DESIGN · ENGINEERING
            </div>

            <h1>
              BUILDING
              <br />
              <span>THE DIGITAL</span>
              <br />
              FUTURE.
            </h1>

            <p>
              We create digital products,
              software and experiences for
              businesses ready to move beyond
              ordinary.
            </p>

            <div className="heroActions">

              <button
                className="heroBtn"
                onClick={() => go("contact")}
              >
                Explore KYRO
                <ArrowUpRight size={18} />
              </button>

              <a
                className="heroWhats"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

            </div>

          </div>

          <div className="planet">

            <div className="halo h1" />
            <div className="halo h2" />

            <div className="core">

              <div className="coreGlow" />

              <div className="ring r1" />
              <div className="ring r2" />
              <div className="ring r3" />

              <span>KYRO</span>

            </div>

            <div className="orbit o1" />
            <div className="orbit o2" />

          </div>

          <div className="heroBottom">
            <span>
              THEINITIALKYROTECH.COM
            </span>

            <span>
              EST. 2026
            </span>

            <span>
              SCROLL
              <ChevronDown size={13} />
            </span>
          </div>

        </section>

        <section
          id="about"
          className="cosmicSection aboutSection"
        >

          <SectionHeader
            eyebrow="01 / ABOUT KYRO"
            title="Ideas become"
            accent="systems."
          />

          <div className="aboutGrid">

            <div>

              <p className="lead">
                THE INITIAL KYRO TECH is a
                technology studio focused on
                turning ambitious ideas into
                useful digital products.
              </p>

              <p>
                We bring strategy, design and
                engineering together — from the
                first concept to the final
                experience. Our work spans web,
                mobile, AI, automation, cloud and
                custom software.
            </p>
                <div className="founderCredit">
                   <span>FOUNDER</span>
              <h3>Vaibhav Upadhyay</h3>
                    <p>Founder &amp; CEO — THE INITIAL KYRO TECH</p>
                    
</div>
            </div>

            <div className="aboutTerminal">

              <span>
                KYRO / SYSTEM STATUS
              </span>

              <b>
                ALL SYSTEMS OPERATIONAL
              </b>

              <i>
                BUILDING DIGITAL EXPERIENCES
                FOR THE NEXT GENERATION.
              </i>

            </div>

          </div>

        </section>

        <section
          id="services"
          className="cosmicSection servicesSection"
        >

          <SectionHeader
            eyebrow="02 / WHAT WE DO"
            title="Our"
            accent="Services"
            desc="Comprehensive software development services to help your business thrive in the digital landscape."
          />

          <div className="serviceLayout">

            <div className="serviceList">

              {services.map((s, i) => {

                const I = s.icon;

                return (
                  <button
                    key={s.id}
                    className={
                      active === i
                        ? "serviceListItem active"
                        : "serviceListItem"
                    }
                    onClick={() => setActive(i)}
                  >

                    <span>
                      {s.id}
                    </span>

                    <b>
                      {s.title}
                    </b>

                    <ArrowUpRight size={15} />

                  </button>
                );

              })}

            </div>

            <article className="activeService">

              <div className="activeServiceTop">

                <span>
                  {activeService.tag}
                </span>

                <small>
                  {activeService.id} / 08
                </small>

              </div>

              <div className="activeIcon">
                <ActiveIcon size={25} />
              </div>

              <h3>
                {activeService.title}
              </h3>

              <p>
                {activeService.desc}
              </p>

              <div className="servicePoints">

                {activeService.points.map((p) => (
                  <span key={p}>
                    • {p}
                  </span>
                ))}

              </div>

              <button
                onClick={() => go("contact")}
              >
                Explore service
                <ArrowUpRight size={15} />
              </button>

              <div className="cardDots">

                {services.map((_, i) => (
                  <i
                    key={i}
                    className={
                      i === active
                        ? "on"
                        : ""
                    }
                  />
                ))}

              </div>

            </article>

          </div>

        </section>

        <section className="cosmicSection stackSection">

          <SectionHeader
            eyebrow="03 / WHAT WE BUILD"
            title="Built for the"
            accent="modern stack"
            desc="Six core capabilities. One opinionated, end-to-end team that ships software people actually love using."
          />

          <div className="stats">

            <div>
              <b>2026</b>
              <span>FOUNDED</span>
            </div>

            <div>
              <b>
                12<em>+</em>
              </b>
              <span>
                PROJECTS COMPLETED
              </span>
            </div>

            <div>
              <b>
                10<em>+</em>
              </b>
              <span>
                TEAM MEMBERS
              </span>
            </div>

            <div>
              <b>
                1<em>+</em>
              </b>
              <span>
                COUNTRIES SERVED
              </span>
            </div>

          </div>

          <div className="capabilityGrid">

            {capabilities.map(
              ([n, t, I, d, tags]) => (
                <article
                  key={n}
                  className={`capability c${n}`}
                >

                  <div className="capTop">

                    <div className="capIcon">
                      <I size={19} />
                    </div>

                    <small>{n}</small>

                  </div>

                  <h3>{t}</h3>

                  <p>{d}</p>

                  <div className="tags">

                    {tags.map((x) => (
                      <span key={x}>
                        {x}
                      </span>
                    ))}

                  </div>

                </article>
              )
            )}

          </div>

        </section>

        <div className="trustedTech">

          <div className="eyebrow">
            TRUSTED TECHNOLOGIES
            POWERING OUR WORK
          </div>

          <Marquee items={techs} />

          <Marquee
            items={[...techs].reverse()}
            className="reverse"
          />

        </div>

        <section
          id="work"
          className="cosmicSection workSection"
        >

          <SectionHeader
            eyebrow="04 / SELECTED WORK"
            title="See Our Work in"
            accent="Action"
            desc="A look at recent products we've designed, built, and shipped."
          />

          <div className="featuredWork">

            <div
              className={`browserMock ${projects[project].theme}`}
            >

              <div className="browserBar">

                <i />
                <i />
                <i />

                <span>
                  {projects[
                    project
                  ].title
                    .toLowerCase()
                    .replaceAll(
                      " ",
                      "-"
                    )}.app
                </span>

              </div>

              <div className="browserVisual">

                <div className="mockWindowTitle">
                  {projects[project].title}
                </div>

                <div className="mockOrb" />

                <div className="mockLines">
                  <b />
                  <b />
                  <b />
                </div>

              </div>

              <button
                className="slide prev"
                onClick={() =>
                  setProject(
                    (project -
                      1 +
                      projects.length) %
                      projects.length
                  )
                }
              >
                ‹
              </button>

              <button
                className="slide next"
                onClick={() =>
                  setProject(
                    (project + 1) %
                      projects.length
                  )
                }
              >
                ›
              </button>

            </div>

            <div className="featuredMeta">

              <small>
                FEATURED CASE STUDY
              </small>

              <h3>
                {projects[project].title}
              </h3>

              <p>
                {projects[project].desc}
              </p>

              <div className="tags">
                <span>React</span>
                <span>Firebase</span>
                <span>AI</span>
                <span>UI/UX</span>
              </div>

              <button
                onClick={() => go("contact")}
              >
                View case study
                <ArrowUpRight size={15} />
              </button>

            </div>

          </div>

          <div className="projectThumbs">

            {projects.map((p, i) => (
              <button
                key={p.title}
                className={
                  i === project
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setProject(i)
                }
              >

                <span
                  className={`thumb ${p.theme}`}
                />

                <b>{p.title}</b>

              </button>
            ))}

          </div>

        </section>

        <section className="constellation">

          <SectionHeader
            eyebrow="05 / CLIENT SUCCESS"
            title="Client Success"
            accent="Constellation"
            desc="Real outcomes from innovative partnerships powered by our software architecture."
          />

          <div className="testimonial">

            <div className="starsMini">
              ★★★★★
            </div>

            <p>
              From concept to execution,
              KYRO brings design and technology
              together to turn ambitious ideas
              into polished digital experiences.
            </p>

            <div className="testimonialBottom">

              <div className="avatarStack">

                {[
                  "V",
                  "K",
                  "S",
                  "A",
                  "R"
                ].map((x, i) => (
                  <span key={i}>
                    {x}
                  </span>
                ))}

              </div>

              <small>
                SYSTEM AUTOPILOT: ONLINE
              </small>

            </div>

          </div>

        </section>

        <section className="cosmicSection trustedSection">

          <SectionHeader
            eyebrow="06 / GLOBAL VALIDATION"
            title="Trusted By Industry"
            accent="Leaders"
            desc="We collaborate with visionary organizations to architect high-performance software systems."
          />

          <Marquee
            items={logos}
            className="logoMarquee"
          />

        </section>
<MeetTheTeam go={go} />
        <section
          id="contact"
          className="contact"
        >

          <div className="contactPlanet">

            <div className="cpCore" />
            <div className="cpRing" />

          </div>

          <div className="contactContent">

            <div className="eyebrow">
              07 / CONTACT
            </div>

            <h2>
              Ready to
              <br />
              <em>
                Transform Your Business?
              </em>
            </h2>

            <p>
              Let's discuss how our software
              solutions can help you achieve
              your business goals. Contact us
              today for a free consultation.
            </p>

            <div className="contactButtons">

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
                <ArrowUpRight size={15} />
              </a>

              <a
                href={`mailto:${EMAIL}`}
              >
                <Mail size={17} />
                Email
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </section>

        <section className="newsletter">

          <div className="eyebrow">
            NEWSLETTER TELEMETRY
          </div>

          <h3>
            Stay updated with{" "}
            <span>
              THE INITIAL KYRO TECH
            </span>
          </h3>

          <p>
            Subscribe to receive product
            releases, technical insights and
            new project updates.
          </p>

          <form
            onSubmit={(e) =>
              e.preventDefault()
            }
          >

            <input
              type="email"
              placeholder="Enter your email address..."
              required
            />

            <button>
              Subscribe
              <Send size={14} />
            </button>

          </form>

        </section>

      </main>

      <footer>

        <div className="footBrand">

          <b>
            <span>THE INITIAL</span>
            KYRO
          </b>

          <p>
            An elite digital product
            engineering studio creating
            software, automation and
            high-fidelity digital experiences.
          </p>

          <div className="footContact">

            <a href={WHATSAPP}>
              <MessageCircle size={15} />
              +91 87555 21600
            </a>

            <a href={`mailto:${EMAIL}`}>
              <Mail size={15} />
              {EMAIL}
            </a>

          </div>

        </div>

        <div>

          <h4>SERVICES</h4>

          {[
            "Custom Software",
            "Web Development",
            "Mobile Apps",
            "UI/UX Design",
            "Cloud Solutions",
            "AI Agent Solutions"
          ].map((x) => (
            <button key={x}>
              {x}
            </button>
          ))}

        </div>

        <div>

          <h4>COMPANY</h4>

          {[
            "About Us",
            "Our Services",
            "Case Studies",
            "Contact Us",
            "Support"
          ].map((x) => (
            <button key={x}>
              {x}
            </button>
          ))}

        </div>

        <div>

          <h4>
            LEGAL & SECURITY
          </h4>

          {[
            "Privacy Policy",
            "Terms of Use",
            "Contact Us"
          ].map((x) => (
            <button key={x}>
              {x}
            </button>
          ))}

        </div>

        <div className="footerBottom">

          <small>
            © 2026 THE INITIAL KYRO TECH.
            ALL RIGHTS RESERVED.
          </small>

          <span>
            ◉ SECURE HTTPS CONNECTION
          </span>

          <b>
            ● ALL SYSTEMS OPERATIONAL
          </b>

        </div>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);