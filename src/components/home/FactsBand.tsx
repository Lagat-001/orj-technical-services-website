// Static facts band from the reference. Replaces the previous animated
// count-up StatsBar on the homepage (StatsBar.tsx is kept but unused).
const facts = [
  { value: "2014", label: "Serving Dubai since" },
  { value: "24/7", label: "Emergency support" },
  { value: "< 1 hr", label: "Response time" },
  { value: "DEWA", label: "Approved works" },
];

export default function FactsBand() {
  return (
    <section className="facts" aria-label="Key facts">
      <div className="wrap grid">
        {facts.map((f) => (
          <div className="fact" key={f.label}>
            <b>{f.value}</b>
            <span>{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
