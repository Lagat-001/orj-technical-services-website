import {
  ShieldIcon,
  StarIcon,
  ClockIcon,
  ChatIcon,
  DoubleRule,
} from "@/components/ui/Icons";

const reasons = [
  {
    icon: <ShieldIcon />,
    title: "Licensed & Insured",
    desc: "Fully licensed in the UAE with comprehensive insurance. Your project is in safe hands.",
  },
  {
    icon: <StarIcon />,
    title: "Certified Engineers",
    desc: "Our team holds internationally recognised certifications in HVAC and technical services.",
  },
  {
    icon: <ClockIcon />,
    title: "On-Time Delivery",
    desc: "We respect your schedule. Projects are completed on time and within budget.",
  },
  {
    icon: <ChatIcon />,
    title: "Dedicated Support",
    desc: "A dedicated account manager and a 24/7 emergency line for every client.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="sect tinted" id="why">
      <div className="wrap">
        <div className="s-head center">
          <span className="s-eyebrow">Why ORJ</span>
          <h2 className="s-title">Built on trust &amp; excellence</h2>
          <DoubleRule center />
          <p className="s-sub">
            Developers and businesses across Dubai choose ORJ for professionalism, expertise and
            reliability.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r) => (
            <article className="why" key={r.title}>
              <span className="ic">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
