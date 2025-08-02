import LogoEvent from "./LogoEvent";

export default function Header() {
  return (
    <header className="h-16 bg-slate-800 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <LogoEvent />
        <div>
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </header>
  );
}
