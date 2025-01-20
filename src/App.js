import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import Hero from './nav/nav';
import Services from './servicess/service';
import Industries from './indu/indu';
import WhyChooseUs from './why/why';
import Statistics from './stat/stat';
import Marquee from './awa/awa';
import TestimonialSlider from './teast/test';
import CaseStudies from './case/case';
import HealthCareSlider from './health/health';
import Insights from './late/late';
import ContactForm from './contact/contact';
import FAQ from './faq/faq';
import Footer from './footer/footer';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Statistics />
      <Marquee />
      <TestimonialSlider />
      <CaseStudies />
      <HealthCareSlider />
      <Insights />
      <ContactForm />
      <FAQ />
      <Footer />


    </>
  );
}

export default App;
