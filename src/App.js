import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import NavBar from './components/NavBar';

function App() {
  console.log("rendering!")
  const [currentPage, setCurrentPage] = useState("aboutMe")
  console.log(currentPage)

  return (
    <div className="Portfolio">
      <Header />
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === "aboutMe" ? <AboutMe /> : <></>}
      {currentPage === "contact" ? <ContactMe /> : <></>}
      {currentPage === "portfolio" ? <Portfolio /> : <></>}
      {currentPage === "resume" ? <Resume /> : <></>}
      <Footer />
    </div>
  );
}

export default App;

