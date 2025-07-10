import LogoEvent from "./(components)/LogoEvent";

export default function Event() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center">
        <LogoEvent />
        <h1 className="text-5xl">Saikindo Event</h1>
        <p className="text-3xl">Comming Soon</p>
      </div>
    </section>
  );
}
