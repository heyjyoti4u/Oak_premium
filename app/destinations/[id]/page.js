// app/destinations/[id]/page.js
'use client';

import { useState, useRef } from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { destinations } from "@/app/lib/data";
import { useParams } from "next/navigation";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from 'jspdf'; // For PDF Download

export default function DestinationDetail() {
  const params = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [vibe, setVibe] = useState("Relaxed"); // Default vibe
  const [generatedPlan, setGeneratedPlan] = useState([]);
  const [showPlan, setShowPlan] = useState(false);

  const destination = destinations.find((d) => d.id === params.id);

  if (!destination) return <div className="p-5 text-center">Destination not found</div>;

  // --- LOGIC: GENERATE ITINERARY ---
  const handleGeneratePlan = () => {
    if (!startDate || !endDate) {
      alert("Please select travel dates first!");
      return;
    }

    // 1. Calculate Days
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; 

    // 2. Fetch Activities from Pool
    const pool = destination.activityPool?.[vibe] || [];
    let plan = [];

    // 3. Logic to distribute activities over days
    // Agar pool mein items kam hain, toh repeat ya generic items add kar sakte hain
    for (let i = 0; i < diffDays; i++) {
      // Modulo operator (%) use kiya taaki agar din jyada ho toh activities repeat ho jayein safely
      const activity = pool[i % pool.length]; 
      plan.push({
        day: `Day ${i + 1}`,
        date: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000).toDateString(),
        ...activity
      });
    }

    setGeneratedPlan(plan);
    setShowPlan(true);
    
    // Smooth scroll to plan
    setTimeout(() => {
        document.getElementById('itinerary-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // --- LOGIC: DOWNLOAD PDF ---
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`Travel Guide: ${destination.name}`, 10, 20);
    
    doc.setFontSize(12);
    doc.text(`Dates: ${startDate.toDateString()} to ${endDate.toDateString()}`, 10, 30);
    doc.text(`Vibe: ${vibe}`, 10, 40);
    
    let yPos = 50;
    
    generatedPlan.forEach((item, index) => {
        if (yPos > 270) { doc.addPage(); yPos = 20; } // New page if full
        
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 255);
        doc.text(`${item.day}: ${item.title}`, 10, yPos);
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        // Split text to fit PDF width
        const splitDesc = doc.splitTextToSize(item.desc, 180);
        doc.text(splitDesc, 10, yPos + 7);
        
        doc.setTextColor(100, 100, 100);
        doc.text(`Tip: ${item.tip}`, 10, yPos + 15 + (splitDesc.length * 4));
        
        yPos += 30 + (splitDesc.length * 4);
    });

    doc.save(`${destination.name}_Itinerary.pdf`);
  };

  return (
    <>
      <Navbar />
      
      {/* HERO SECTION */}
      <div className="hero overlay" style={{height: '70vh', minHeight: '500px'}}>
        <div className="img-bg">
          <img src={destination.image} alt={destination.name} className="img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="heading display-3 fw-bold text-white mb-4" data-aos="fade-up">{destination.name}</h1>
              <p className="lead text-white-50 mb-5 w-75 mx-auto" data-aos="fade-up" data-aos-delay="100">{destination.description}</p>
              
              {/* --- PLANNER WIDGET (Hero ke andar) --- */}
              <div className="bg-white p-4 rounded shadow-lg mx-auto" style={{maxWidth: '800px'}} data-aos="zoom-in" data-aos-delay="200">
                <div className="row g-3 align-items-end">
                   
                   {/* Date Picker */}
                   <div className="col-md-4 text-start">
                      <label className="small fw-bold text-muted mb-1">When are you going?</label>
                      <div className="d-flex gap-2">
                        <DatePicker 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)} 
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Start Date"
                            className="form-control"
                        />
                        <DatePicker 
                            selected={endDate} 
                            onChange={(date) => setEndDate(date)} 
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="End Date"
                            className="form-control"
                        />
                      </div>
                   </div>

                   {/* Vibe Dropdown (Custom Styled) */}
                   <div className="col-md-4 text-start">
                      <label className="small fw-bold text-muted mb-1">What's your mood?</label>
                      <select 
                        className="form-select" 
                        value={vibe} 
                        onChange={(e) => setVibe(e.target.value)}
                        style={{border: '2px solid #eee', padding: '10px'}}
                      >
                         <option value="Relaxed">🧘 Relaxed & Chill</option>
                         <option value="Adventure">🏃 Adventure & Thrill</option>
                         <option value="Spiritual">🙏 Spiritual & Peace</option>
                      </select>
                   </div>

                   {/* Action Button */}
                   <div className="col-md-4">
                      <button onClick={handleGeneratePlan} className="btn btn-primary w-100 py-2 fw-bold">
                        Create My Plan ✨
                      </button>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- ITINERARY SECTION (Zig-Zag Layout) --- */}
      {showPlan && (
        <div id="itinerary-section" className="section bg-light">
          <div className="container">
            
            <div className="text-center mb-5">
               <h2 className="heading mb-3">Your Personalized Itinerary</h2>
               <p className="text-muted">A {generatedPlan.length}-day journey curated for your <strong>{vibe}</strong> soul.</p>
            </div>

            <div className="itinerary-timeline">
               {generatedPlan.map((item, index) => (
                 <div key={index} className="row align-items-center mb-5" data-aos="fade-up">
                    {/* Logic for Zig-Zag: Even index = Image Left, Odd index = Image Right */}
                    
                    {/* IMAGE COLUMN */}
                    <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                       <div className="position-relative overflow-hidden rounded shadow-lg hover-zoom">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="img-fluid w-100" 
                            style={{height: '350px', objectFit: 'cover'}}
                          />
                          <div className="position-absolute top-0 start-0 bg-primary text-white px-3 py-2 fw-bold rounded-end">
                             {item.day} • {item.date}
                          </div>
                       </div>
                    </div>

                    {/* CONTENT COLUMN */}
                    <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-1 text-md-end' : 'text-md-start'}`}>
                       <div className="p-4">
                          <h3 className="fw-bold mb-3">{item.title}</h3>
                          <p className="lead text-muted mb-4">{item.desc}</p>
                          
                          <div className={`d-inline-block p-3 rounded border-start border-4 border-warning bg-white shadow-sm ${index % 2 !== 0 ? 'border-end border-start-0' : ''}`}>
                             <strong>💡 Smart Tip:</strong> {item.tip}
                          </div>
                       </div>
                    </div>

                 </div>
               ))}
            </div>

            {/* DOWNLOAD BUTTON */}
            <div className="text-center mt-5" data-aos="zoom-in">
               <div className="card bg-primary text-white p-5 rounded-3 border-0" style={{backgroundImage: 'url(/images/pattern.png)'}}>
                  <h3>Love this plan? Take it with you!</h3>
                  <p className="mb-4 text-white-50">Download this complete guide as a PDF and access it offline during your trip.</p>
                  <button onClick={downloadPDF} className="btn btn-light btn-lg px-5 fw-bold text-primary shadow">
                     <span className="icon-download me-2"></span> Download Travel Guide PDF
                  </button>
               </div>
            </div>

          </div>
        </div>
      )}
      
      {/* NEARBY PLACES (Always Visible) */}
      <div className="section">
         <div className="container">
            <h3 className="mb-4 fw-bold">Also Explore Nearby</h3>
            <div className="row">
               {destination.nearbyPlaces?.map((place, idx) => (
                  <div key={idx} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={idx*100}>
                     <div className="d-flex align-items-center p-3 border rounded hover-shadow">
                        <img src={place.image} className="rounded-circle me-3" style={{width: '80px', height: '80px', objectFit: 'cover'}} />
                        <div>
                           <h5 className="mb-1">{place.name}</h5>
                           <span className="text-muted small">{place.dist}</span>
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