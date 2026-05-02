import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Services from '../sections/Services';
import WorkStrip from '../sections/WorkStrip';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="page-enter">
      <Hero />
      <Stats />
      <Services />
      <WorkStrip />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
