
import './App.css';
import Header from "./components/scripts/Header";
import AboutUs from "./components/scripts/About";
import ProjectDescription from "./components/scripts/ProjectDesc";
import PhotoGallery from "./components/scripts/Photo";
import ContactUs from "./components/scripts/ContactUs";
import Footer from "./components/scripts/Footer";
import Demonstration from "./components/scripts/Demonstration.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutUs />
        <ProjectDescription />
        <Demonstration />
        <PhotoGallery />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;