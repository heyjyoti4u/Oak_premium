import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="hero overlay">
        <div className="img-bg">
          <img src="/images/some4.jpg" alt="Contact" className="img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="container">
           <div className="row align-items-center justify-content-center text-center">
              <div className="col-lg-6">
                 <h1 className="heading">Contact Us</h1>
                 <p>We're here to make your travel dreams come true!</p>
              </div>
           </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
               <div className="contact-info">
                  <div className="address mt-4">
                     <h4 className="mb-2">Location:</h4>
                     <p>Parul University, Vaghodia Subdistrict, Vadodara-391760</p>
                  </div>
                  <div class="email mt-4">
                     <h4 class="mb-2">Email:</h4>
                     <p>tsrumith@gmail.com</p>
                  </div>
                  <div class="phone mt-4">
                     <h4 class="mb-2">Call:</h4>
                     <p>+91 6303840702</p>
                  </div>
               </div>
            </div>
            
            <div className="col-lg-8">
               <form>
                  <div className="row">
                     <div className="col-6 mb-3"><input type="text" className="form-control" placeholder="Your Name" /></div>
                     <div className="col-6 mb-3"><input type="email" className="form-control" placeholder="Your Email" /></div>
                     <div className="col-12 mb-3"><input type="text" className="form-control" placeholder="Subject" /></div>
                     <div className="col-12 mb-3"><textarea className="form-control" rows="7" placeholder="Message"></textarea></div>
                     <div className="col-12"><input type="submit" value="Send Message" className="btn btn-primary" /></div>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}