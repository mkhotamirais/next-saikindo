import React from "react";

export default function Heroes({ title }: { title: string }) {
  return (
    <section className="bg-primary-bg">
      <div className="container pt-28 pb-12">
        <h1 className="h1">{title}</h1>
      </div>
    </section>
  );
}
