const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "24/7", label: "Emergency Support" },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: "var(--color-steel)" }} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: "var(--color-gold)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
