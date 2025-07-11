import React from "react";
import LogoPower from "./(components)/LogoPower";

export default function Power() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center flex flex-col items-center">
        <LogoPower />
        <h1 className="text-5xl">Saikindo Power</h1>
        <p className="text-3xl">Comming Soon</p>
      </div>
    </section>
  );
}
