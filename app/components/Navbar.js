// app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="site-nav mt-3">
      <div className="container">
        <div className="site-navigation">
            <Link href="/" className="logo m-0 float-start">Oak</Link>
            
            <ul className="js-clone-nav d-none d-lg-inline-block text-center site-menu">
              {/* THESE LINKS MUST START WITH / */}
              <li><Link href="/">Home</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}