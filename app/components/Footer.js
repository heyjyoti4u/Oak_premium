// app/components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>About Passport<span className="text-primary">.</span> </h3>
              <p>Your journey is our priority. Let's make your travel experience extraordinary!</p>
            </div>
            <div className="widget">
              <h3>Connect</h3>
              <ul className="list-unstyled social">
                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                {/* Aap baaki icons add kar sakte hain */}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 ml-auto">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled float-left links">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3>Contact</h3>
              <address>Parul University, Vaghodia Subdistrict, Vadodara-391760</address>
              <ul className="list-unstyled links mb-4">
                <li><a href="tel://+918144850416">+91 8144850416</a></li>
                <li><a href="mailto:info@mydomain.com">guptaakanksha23@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="mb-0">
              Copyright &copy;{new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}