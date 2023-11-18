import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import { AboutUs, Contact, HomePage, Events, TermsCondition } from "./pages";
import './styles/styles.css';
import './styles/App.css';


const App = () => {
  return(
    <>
        <div className="App">
          <Headers />
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/events" element={<Events />}/>
            <Route path="/terms-Condition" element={<TermsCondition />}/>
          </Routes>
          <Footers />
        </div>

    </>
  );
}

export default App;