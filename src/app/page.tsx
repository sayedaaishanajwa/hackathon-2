import Contact from '@/components/contact'
import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero";
import Subhero from "@/components/Subhero";
import Products from '@/components/Product';
import Footer from '@/components/footer';
import Slide from '@/components/Slides';

export default function Home() {
  return (
    <div>
      
    <Navbar />
    <Hero/>
    <Subhero/>
    <Products/>
      
      
      <Slide/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}