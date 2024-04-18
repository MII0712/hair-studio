import './App.css';
import ContactPage from './Components/ContactPage/ContactPage';
import Footer from './Components/Footer/Footer';
import GoogleMaps from './GoogleMap/GoogleMap';
import Appointment from './Components/Appointment/Appointment'; 
import PricesPage from './Components/Prices/Prices';
import Stiylist from './Components/Stiylist/Stiylist';
import TeamExpert from './Components/TeamExperts/TeamExperts';
import OurTeam from './Components/OurTeam/OurTeam';
import AboutUs from './Components/AboutUS/AboutUs';
import HeroPage from './Components/Hero/HeroPage';
import Navbar from './Components/NavBar/NavBar';
import ChooseYourPage from './Components/ChooseYourPage/ChooseYourPage';


function App() {
  return (
    <>
      <div className="homepage">
        <Navbar />
        <HeroPage />
        <AboutUs />
        <ChooseYourPage />
        <OurTeam />
        <TeamExpert />
        <Stiylist />
        <PricesPage />
        <Appointment />
        <ContactPage />
        <GoogleMaps />
        <Footer />
      </div>
    </>
  );
}

export default App;
