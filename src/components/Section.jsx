export default function Section({ children, variant = "default", id }) {
  const variants = {
    default: "bg-transparent",
    subtle: "bg-white/5",
    divider: "bg-transparent border-t border-white/10",
  };

  return (
    <section id={id} className={`py-24 ${variants[variant]}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
