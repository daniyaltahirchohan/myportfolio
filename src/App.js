import './App.css';
import NavBar from './components/navbar/NavBar'
import Banner from './components/home/Banner'
import AboutMe from './components/aboutMe/AboutMe'
import Services from './components/services/Services';
import Experiences from './components/experience/Experiences';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App' id='app'>
      <NavBar />
      <Banner/>
      <AboutMe/>
      <Services/>
      <Experiences/>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;
