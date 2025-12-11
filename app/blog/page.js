import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { blogs } from "@/app/lib/data"; // Import shared data

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="hero overlay">
        <div className="img-bg">
          <img src="/images/some4.jpg" alt="Blog" className="img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
             <div className="col-lg-5">
               <h1 className="heading">Our Blogs</h1>
               <p className="mb-5">Read about our latest adventures.</p>
             </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row align-items-stretch">
            {blogs.map((post) => (
              <div key={post.id} className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="media-entry">
                  <Link href={`/blog/${post.id}`}>
                    <img src={post.image} alt={post.title} className="img-fluid" style={{height: '200px', objectFit: 'cover', width: '100%'}}/>
                  </Link>
                  <div className="bg-white m-body p-3 shadow-sm">
                    <span className="date text-muted small">{post.date}</span>
                    <h3 className="mt-2"><Link href={`/blog/${post.id}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="more d-flex align-items-center float-start text-primary">
                      <span className="label">Read More</span>
                    </Link>
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