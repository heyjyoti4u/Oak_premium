// app/destinations/page.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link"; // 👈 THIS WAS MISSING
import { destinations } from "../lib/data"; // Import shared data

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      
      <div className="hero overlay">
        <div className="img-bg">
          <img src="/images/some4.jpg" alt="Destinations" className="img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">Destinations</h1>
              <p className="mb-5" data-aos="fade-up">Choose your next adventure.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-3">
        <div className="container">
          <div className="row">
            {destinations.map((place) => (
              <div key={place.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div className="destination">
                  <div className="thumb">
                    {/* 👇 This Link goes to the dynamic page */}
                    <Link href={`/destinations/${place.id}`}>
                      <img 
                        src={place.image} 
                        alt={place.name} 
                        className="img-fluid" 
                        style={{ height: '250px', objectFit: 'cover', width: '100%' }}
                      />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <h3>
                      <Link href={`/destinations/${place.id}`}>{place.name}</Link>
                    </h3>
                    <p className="meta">{place.description}</p>
                  </div>
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