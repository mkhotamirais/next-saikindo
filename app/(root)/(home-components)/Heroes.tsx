"use client";

export default function Heroes({ title }: { title: string }) {
  return (
    <section className="py-12 bg-secondary-bg text-white">
      <div className="container">
        <h1 className="h1">{title}</h1>
      </div>
    </section>
  );
}
