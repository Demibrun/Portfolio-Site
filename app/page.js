import Image from "next/image";
import Navigation from "./components/navigation";
import VideoGallery from "./components/video-gallery";
import Arrow from "./components/arrow";

const email = "akinsipeadekemi@gmail.com";
const booking = (subject, body = "") =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const services = [
  {
    id: "ministry",
    number: "01",
    category: "THE WORD & WORSHIP",
    title: "Speaking & ministry",
    description:
      "Gospel-centred teaching and heartfelt worship that encourage faith and equip people to live with purpose.",
    details: [
      "Revival meetings & conferences",
      "Leadership workshops",
      "Worship ministrations",
    ],
    action: "Invite me to minister",
    subject: "Ministry booking request",
    body: "Event name:\nDate:\nLocation:\nAudience size:\nTell me about your event:\n",
  },
  {
    id: "consulting",
    number: "02",
    category: "STRATEGY & STEWARDSHIP",
    title: "Financial consulting",
    description:
      "Thoughtful financial guidance for churches, non-profits and growing businesses, grounded in integrity.",
    details: [
      "Financial strategy & SME advisory",
      "Budgeting, forecasting & controls",
      "Non-profit reporting & stewardship",
    ],
    action: "Start a conversation",
    subject: "Financial consulting inquiry",
    body: "Organisation:\nScope of work:\nTimeline:\nBudget:\n",
  },
  {
    id: "marriage",
    number: "03",
    category: "RELATIONSHIPS & FAMILY",
    title: "Marriage counselling",
    description:
      "A compassionate space for couples and singles to build stronger relationships through faith and practical guidance.",
    details: [
      "Pre-marital counselling",
      "Communication & conflict resolution",
      "Faith & family alignment",
    ],
    action: "Enquire about a session",
    subject: "Marriage counselling session",
    body: "Preferred dates:\nOnline or in person:\nHow can I help?\n",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section
          className="hero container"
          id="hero"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="short-line" /> FAITH. PURPOSE. INTEGRITY.
            </p>
            <h1 id="hero-title">
              A life of worship.
              <br />A heart to <em>serve.</em>
            </h1>
            <p className="hero-intro">
              I’m Adekemi Akinsipe. Evangelist, music minister and finance
              professional, serving people and organisations with faith and
              excellence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let’s connect <Arrow />
              </a>
              <a className="text-link" href="#music">
                <span className="mini-play" aria-hidden="true">
                  ▶
                </span>{" "}
                Watch a ministration
              </a>
            </div>
            <p className="hero-signature">
              Rooted in Christ. Guided by purpose.
            </p>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                src="/images/images7.jpg"
                alt="Evangelist Adekemi Akinsipe"
                fill
                priority
                sizes="(max-width: 700px) 90vw, 42vw"
                className="hero-portrait"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-line" />
              <div>
                <strong>Adekemi Akinsipe</strong>
                <span>Evangelist · Founder, KemmyMuzik International</span>
              </div>
            </div>
            <span className="portrait-accent" aria-hidden="true" />
          </div>
        </section>

        <div className="purpose-strip">
          <div className="container purpose-inner">
            <span>Sharing the Gospel</span>
            <i aria-hidden="true" />
            <span>Inspiring worship</span>
            <i aria-hidden="true" />
            <span>Building with integrity</span>
          </div>
        </div>

        <section
          className="section about container"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <p className="eyebrow">MEET ADEKEMI</p>
            <h2 id="about-title">
              One purpose.
              <br />
              Many ways to serve.
            </h2>
            <a href="#services" className="text-link">
              Explore my work <Arrow />
            </a>
          </div>
          <div className="about-copy">
            <p className="lead">“I was created to make His praise glorious.”</p>
            <p>
              My work brings together a love for the Gospel, a passion for music
              and a commitment to responsible leadership. As the founder of
              KemmyMuzik International, I share a message of hope through
              worship and ministry.
            </p>
            <p>
              Alongside ministry, I help churches and organisations make sound
              financial decisions, and support couples as they build homes
              rooted in faith, understanding and love.
            </p>
            <div
              className="credentials"
              aria-label="Education and professional credentials"
            >
              <div>
                <strong>MBA</strong>
                <span>Business Administration</span>
                <small>University of Ibadan · 2023</small>
              </div>
              <div>
                <strong>ACA / CPA</strong>
                <span>Chartered Accountant</span>
                <small>2016</small>
              </div>
              <div>
                <strong>B.Sc.</strong>
                <span>Chemistry</span>
                <small>University of Ibadan · 1992</small>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="container section">
            <div className="section-top">
              <div>
                <p className="eyebrow">HOW I CAN SERVE</p>
                <h2 id="services-title">Faith in action.</h2>
              </div>
              <p>
                For your church, your organisation
                <br className="desktop-break" /> and the people you care about.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service" id={service.id} key={service.id}>
                  <div className="service-label">
                    <span>{service.category}</span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={booking(service.subject, service.body)}
                  >
                    {service.action} <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section container music-section"
          id="music"
          aria-labelledby="music-title"
        >
          <div className="section-top">
            <div>
              <p className="eyebrow">WORSHIP & THE WORD</p>
              <h2 id="music-title">Moments of praise.</h2>
            </div>
            <a
              className="text-link"
              href="https://www.youtube.com/@MountZionPrayerMinistryI-fz9ls/search?query=Kemi%20Akinsipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on YouTube <Arrow />
            </a>
          </div>
          <VideoGallery />
          <div className="music-footnote">
            <p>
              Live worship with Kemi Akinsipe at Mount Zion Prayer Ministry
              Int’l.
            </p>
            <a
              href="https://www.youtube.com/@kemiakinsipe4993"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my music channel <Arrow />
            </a>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">GET IN TOUCH</p>
              <h2 id="contact-title">
                Let’s do something
                <br />
                <em>meaningful.</em>
              </h2>
              <p>
                For ministry invitations, financial consulting
                <br className="desktop-break" /> or counselling enquiries, I’d
                love to hear from you.
              </p>
            </div>
            <div className="contact-details">
              <a className="contact-email" href={`mailto:${email}`}>
                {email}
                <Arrow />
              </a>
              <p>
                When you write, include a little about your event or enquiry,
                your location and your preferred dates.
              </p>
              <div className="contact-links">
                <a
                  href="https://wa.me/2348160368444"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp <Arrow />
                </a>
                <span>Ibadan, Nigeria</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="brand footer-brand" href="#hero">
          <span className="brand-mark">
            KA<span>.</span>
          </span>
          <span>Adekemi Akinsipe</span>
        </a>
        <p>© {new Date().getFullYear()} Adekemi Akinsipe</p>
        <div className="social-links" aria-label="Social links">
          <a
            href="https://www.instagram.com/adekemiakinsipe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/adekemi-akinsipe-39b565b3"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <Arrow />
          </a>
          <a
            href="https://www.youtube.com/@kemiakinsipe4993"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube <Arrow />
          </a>
        </div>
      </footer>
    </>
  );
}
