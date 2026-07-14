import { COMPANY } from "@/config/company";
import { CheckIcon, DoubleRule } from "@/components/ui/Icons";

const points = [
  "Licensed & insured UAE company",
  "Certified, experienced engineers",
  "Transparent quotations — no surprises",
  "24/7 emergency response",
];

export default function AboutPreview() {
  return (
    <section className="sect" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <span className="s-eyebrow">About ORJ</span>
          <h2 className="s-title">A Dubai company built on workmanship</h2>
          <DoubleRule />
          <p>
            ORJ Technical Services L.L.C is a Dubai-based technical services company delivering
            HVAC, MEP and electromechanical maintenance across the UAE since 2014.
          </p>
          <p>
            From single-villa AC installations to full facility maintenance contracts, our certified
            engineers combine rapid response with workmanship that lasts — and quotations you can
            actually read.
          </p>
          <ul className="ticks">
            {points.map((p) => (
              <li key={p}>
                <CheckIcon />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <aside className="brandcard" aria-label="Company identity">
          <DoubleRule center />
          <div className="bc-emblem" role="img" aria-label="ORJ emblem" />
          <div className="ar" lang="ar" dir="rtl">
            {COMPANY.nameArabic}
          </div>
          <div className="en">ORJ TECHNICAL SERVICES L.L.C</div>
          <div className="tag">HVAC · MEP · Electromechanical Maintenance</div>
          <hr />
          <div className="addr">
            {COMPANY.addressLine1}
            <br />
            {COMPANY.addressLine2}
          </div>
        </aside>
      </div>
    </section>
  );
}
