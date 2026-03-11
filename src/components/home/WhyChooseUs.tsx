import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed in the UAE with comprehensive insurance. Your projects are in safe hands.",
  },
  {
    icon: Award,
    title: "Certified Engineers",
    description: "Our team holds internationally recognized certifications in HVAC and technical services.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your schedule. Projects are completed on time and within budget.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A dedicated account manager and 24/7 emergency support line for all our clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
            Why ORJ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
            Built on Trust & Excellence
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Businesses across Dubai choose ORJ for our professionalism, expertise, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(10,22,40,0.06)" }}
                >
                  <Icon size={26} style={{ color: "var(--color-steel)" }} />
                </div>
                <h3 className="font-bold mb-2 text-base" style={{ color: "var(--color-navy)" }}>
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
