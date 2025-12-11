import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  // 1. Data for Destinations (So we can link to them)
  const destinations = [
    { id: "manali", name: "Manali", image: "/images/manali.jpg", desc: "Snow-capped mountains..." },
    { id: "goa", name: "Goa", image: "/images/goa.jpg", desc: "Stunning beaches..." },
    { id: "dwarka", name: "Dwarka", image: "/images/dwarka.jpg", desc: "Ancient kingdom..." },
  ];

  // 2. Data for Testimonials
  const testimonials = [
    { id: 1, name: "Neelima Vallangi", role: "Photographer", image: "/images/nelima.jpg", quote: "One of her most memorable was her trek to Tso Moriri..." },
    { id: 2, name: "Ajay Sood", role: "Explorer", image: "/images/ajay.jpg", quote: "His photography has garnered significant acclaim..." },
    { id: 3, name: "Mohit Manocha", role: "Vlogger", image: "/images/Mohit.jpg", quote: "During one of his trips, he encountered unexpected challenges..." },
  ];

  return (
    <>
      <Navbar /> 
      
      {/* --- HERO SECTION --- */}
      <div className="hero overlay">
        <div className="img-bg">
          <img src="/images/some1.jpg" alt="Hero" className="img-fluid" style={{width:'100%', height:'100%', objectFit:'cover'}} />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">Breathe in the Beauty of the World</h1>
              <p className="mb-5" data-aos="fade-up" data-aos-delay="100">The world is vast, filled with breathtaking landscapes...</p>
              <div data-aos="fade-up" data-aos-delay="200">
                <Link href="/destinations" className="play-button align-items-center d-flex">
                  <span className="icon-button me-3"><span className="icon-play"></span></span>
                  <span className="caption">Explore Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- DESTINATIONS SECTION (This was missing!) --- */}
      <div className="section section-3">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-lg-5" data-aos="fade-up">
              <h2 className="heading mb-3">Popular Destinations</h2>
              <p>Click on any destination to view full details.</p>
            </div>
          </div>
          <div className="row">
            {destinations.map((place) => (
              <div key={place.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div className="destination">
                  <div className="thumb">
                    {/* 👇 THIS LINK HANDLES REDIRECTION TO SPECIFIC PAGES */}
                    <Link href={`/destinations/${place.id}`}>
                      <img src={place.image} alt={place.name} className="img-fluid" />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <h3><Link href={`/destinations/${place.id}`}>{place.name}</Link></h3>
                    <span className="meta">{place.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- EXPLORE SECTION --- */}
      <div className="section section-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
               <div className="image-stack">
                  <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                    <img src="/images/some2.jpg" alt="Stack 1" className="img-fluid" />
                  </div>
                  <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100">
                    <img src="/images/some3.jpg" alt="Stack 2" className="img-fluid" />
                  </div>
               </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <h2 className="heading mb-3" data-aos="fade-up">Explore With Us</h2>
              <p data-aos="fade-up" data-aos-delay="100">Harshvardhan, Srumitha, and Jyoti...</p>
              <p className="my-4" data-aos="fade-up" data-aos-delay="200">
                <Link href="/about" className="btn btn-primary">Read more</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- TESTIMONIALS --- */}
      <div className="section bg-light">
        <div className="container">
          <h2 className="heading mb-5 text-center" data-aos="fade-up">Travel Diaries</h2>
          <div className="row">
            {testimonials.map((t) => (
              <div key={t.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div className="block-testimonial text-center bg-white p-4 rounded shadow-sm">
                  <img src={t.image} alt={t.name} className="img-fluid rounded-circle mb-3" style={{width:'100px', height:'100px', objectFit:'cover'}} />
                  <h3>{t.name}</h3>
                  <p className="position text-muted mb-3">{t.role}</p>
                  <p className="fst-italic">&ldquo;{t.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}