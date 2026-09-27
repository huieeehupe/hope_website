import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="chapter-home">
      <a className="chapter-skip-link" href="#main-content">Skip to content</a>
      <header className="chapter-header">
        <Link href="/" className="chapter-logo" aria-label="IEEE chapter home">
          <Image src="/IEEE_logo.png" alt="IEEE chapter logo" width={110} height={62} priority />
        </Link>
        <nav aria-label="Main navigation">
          <ul className="chapter-nav">
            <li><Link href="/" aria-current="page">Home</Link></li>
            <li><Link href="/hope">HOPE Course</Link></li>
            <li><Link href="/vlsi">VLSI Course</Link></li>
          </ul>
        </nav>
      </header>
      <main id="main-content" className="chapter-main" tabIndex={-1}>
        <div className="chapter-photo-glass">
          <figure className="chapter-photo">
            <Image
              src="/eboard-2025-2026.jpeg"
              alt="IEEE chapter executive board for 2025–2026 posing together on a staircase"
              width={1202}
              height={1503}
              sizes="(max-width: 634px) calc(100vw - 74px), 560px"
              priority
            />
            <figcaption>IEEE Board 2025-2026</figcaption>
          </figure>
        </div>
        <h1 className="chapter-motto">&ldquo;Advancing Technology for Humanity&rdquo; — IEEE</h1>
      </main>
    </div>
  );
}
