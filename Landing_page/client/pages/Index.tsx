import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import Communities from '../components/sections/Communities';
import Fields from '../components/sections/Fields';
import Team from '../components/sections/Team';
import Blog from '../components/sections/Blog';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/sections/Footer';

export default function Index() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Decorative gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[30%] w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#9747FF66] to-transparent opacity-40 blur-3xl" />
        <div className="absolute top-[30%] -left-[20%] w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#9747FF66] to-transparent opacity-40 blur-3xl" />
        <div className="absolute top-[50%] right-[5%] w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#1D73F366] to-transparent opacity-60 blur-3xl" />
      </div>

      <Header />
      <Hero />
      <Services />
      <Products />
      <Communities />
      <Fields />
      <Team />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
