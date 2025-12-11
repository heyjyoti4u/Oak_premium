import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="hero overlay">
        <div className="img-bg">
          <img src="/images/some4.jpg" alt="About" className="img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading">About Us</h1>
              <p className="mb-5">"The world is a canvas, paint it with your experiences and memories."</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
               <div className="row">
                  <div className="col-6"><img src="/images/img_v_1.jpg" alt="Team" className="img-fluid rounded" /></div>
                  <div className="col-6"><img src="/images/img_v_2.jpg" alt="Team" className="img-fluid rounded" /></div>
               </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <h2 className="heading mb-3">Explore All Corners of The World With Us</h2>
              <p>Harshvardhan, Srumitha, and Jyoti, three kindred spirits bound by their insatiable wanderlust, shared a dream to explore the world's uncharted territories together.</p>
              <p>Join us on exciting adventures to every corner of the globe! Experience stunning landscapes, vibrant cultures, and unforgettable memories.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="section">
         <div className="container">
            <div className="row mb-5"><div className="col-12 text-center"><h2>Meet Our Team</h2></div></div>
            <div className="row">
               <div className="col-lg-3 text-center">
                  <img src="/images/tanya.jpg" alt="Harshvardhan" className="img-fluid rounded-circle mb-3" style={{width:'150px', height:'150px'}} />
                  <h3>Harshvardhan Tailor</h3>
                  <p className="text-muted">Designer, Co-Founder</p>
               </div>
               <div className="col-lg-3 text-center">
                  <img src="/images/ajay.jpg" alt="Srumith" className="img-fluid rounded-circle mb-3" style={{width:'150px', height:'150px'}} />
                  <h3>Srumith Singh</h3>
                  <p className="text-muted">Developer, Founder</p>
               </div>
               <div className="col-lg-3 text-center">
                  <img src="/images/varun.jpg" alt="Jyoti" className="img-fluid rounded-circle mb-3" style={{width:'150px', height:'150px'}} />
                  <h3>Jyotiranjan Mohanty</h3>
                  <p className="text-muted">Coder, Founder</p>
               </div>
            </div>
         </div>
      </div>

      <Footer />
    </>
  );
}