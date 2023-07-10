import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Home, Laptop } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='relative z-0'>
            <Home />
            <StarsCanvas />
          </div>
        </div>
        {/* <Hero /> */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0 bg-primary'>
          <div className='bg-contact-pattern bg-cover bg-no-repeat bg-center'>
            <div className='relative z-0'>
              <Contact />
              {/* <Laptop /> */}
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
