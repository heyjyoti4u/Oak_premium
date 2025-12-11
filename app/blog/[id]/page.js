import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { blogs } from "@/app/lib/data";

export function generateStaticParams() {
  return blogs.map((post) => ({ id: post.id }));
}

export default function BlogDetail({ params }) {
  const post = blogs.find((b) => b.id === params.id);

  if (!post) return <div>Blog not found</div>;

  return (
    <>
      <Navbar />
      <div className="hero overlay">
        <div className="img-bg">
          <img src={post.image} alt={post.title} className="img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-8">
              <h1 className="heading">{post.title}</h1>
              <p className="mb-5">Posted on {post.date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
           <div className="row">
             <div className="col-lg-8 mx-auto">
               <p className="lead">{post.excerpt}</p>
               <hr/>
               <p>{post.content}</p>
               <p>
                 {/* Placeholder content */}
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Tempora sed veniam quasi, nulla ex, nam, impedit ducimus 
                 ut esse alias obcaecati?
               </p>
             </div>
           </div>
        </div>
      </div>
      <Footer />
    </>
  );
}