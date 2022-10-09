import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Projects } from './components/Projects/Projects';
import { Hero } from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import '../css/mystyles.css';
import ContactForm from './components/ContactForm/ContactForm';
import Cta from './components/Cta/Cta';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <NavBar />
            <Hero />
            <Projects />
            <Cta />
          </div>
          <Footer />
        </Route>
        <Route exact path="/contact">
          <div className="container">
            <NavBar />
            <ContactForm />
          </div>
          <Footer />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </>
  );
}

export default App;
