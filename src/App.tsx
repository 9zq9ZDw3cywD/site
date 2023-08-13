import './App.css';

const NavBar = () => {
  const scrollTo = (id: string) =>
    document.getElementById(`pre-anchor-${id}`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="navbar">
      <div className="title-text">Holbloom</div>
      <div className="nav-items">
        <div className="nav-entry" onClick={() => scrollTo('about')}>About</div>
        <div className="nav-entry" onClick={() => scrollTo('work')}>Work</div>
        <div className="nav-entry" onClick={() => scrollTo('contact')}>Contact</div>
      </div>
    </div>
  )
}

interface BackgroundImageProps {
  imageFileName: string,
};

const BackgroundImage = (props: BackgroundImageProps) => {
  return (
    <div
      className="large-background-image"
      style={{backgroundImage: `url(${props.imageFileName})`}}
    >
      <div className="image-overlay">
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="center-view">
        <h3>Holbloom</h3>
        <div className="footer-contact">
          <p>
            1846 E. Innovation Park Dr. Ste. 100
            <br />
            Oro Valley, Arizona, 85755
          </p>
          <div>
            <p>contact@holbloom.com</p>
            <br />
            <p>(602) 341-5574</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PreAnchorProps {
  id: string,
}

const PreAnchor = (props: PreAnchorProps) => (
  <div id={`pre-anchor-${props.id}`} className="pre-anchor" />
);

const App = () => {
  return (
    <>
      {/* The header nav, tagline, and immediate graphic + wave */}
      <NavBar />
      <section>
        <div className="center-view">
          <h1>Holbloom is a consulting firm based in Phoenix, Arizona.</h1>
        </div>
      </section>
      <section>
        <svg
          id="wave"
          style={{transform: "rotate(180deg)"}}
          viewBox="0 0 1440 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(249, 249, 249, 1)" offset="0%"></stop>
              <stop stop-color="rgba(249, 249, 249, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,180L60,156.7C120,133,240,87,360,66.7C480,47,600,53,720,70C840,87,960,113,1080,133.3C1200,153,1320,167,1440,166.7C1560,167,1680,153,1800,130C1920,107,2040,73,2160,56.7C2280,40,2400,40,2520,53.3C2640,67,2760,93,2880,106.7C3000,120,3120,120,3240,100C3360,80,3480,40,3600,43.3C3720,47,3840,93,3960,96.7C4080,100,4200,60,4320,60C4440,60,4560,100,4680,100C4800,100,4920,60,5040,43.3C5160,27,5280,33,5400,30C5520,27,5640,13,5760,20C5880,27,6000,53,6120,56.7C6240,60,6360,40,6480,43.3C6600,47,6720,73,6840,90C6960,107,7080,113,7200,100C7320,87,7440,53,7560,50C7680,47,7800,73,7920,93.3C8040,113,8160,127,8280,133.3C8400,140,8520,140,8580,140L8640,140L8640,200L8580,200C8520,200,8400,200,8280,200C8160,200,8040,200,7920,200C7800,200,7680,200,7560,200C7440,200,7320,200,7200,200C7080,200,6960,200,6840,200C6720,200,6600,200,6480,200C6360,200,6240,200,6120,200C6000,200,5880,200,5760,200C5640,200,5520,200,5400,200C5280,200,5160,200,5040,200C4920,200,4800,200,4680,200C4560,200,4440,200,4320,200C4200,200,4080,200,3960,200C3840,200,3720,200,3600,200C3480,200,3360,200,3240,200C3120,200,3000,200,2880,200C2760,200,2640,200,2520,200C2400,200,2280,200,2160,200C2040,200,1920,200,1800,200C1680,200,1560,200,1440,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z">
          </path>
        </svg>
        <BackgroundImage imageFileName="background.jpg" />
      </section>
      <hr style={{marginTop: '0'}} />
      {/* The about section */}
      <section id="about">
        <div className="center-view">
          <PreAnchor id="about" />
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis lacus, facilisis ac arcu sit amet, faucibus faucibus libero. Suspendisse posuere enim metus, ac facilisis eros elementum sollicitudin. Vivamus consectetur elementum tellus, ut tristique mauris placerat et. Cras interdum posuere quam vel mattis. Nunc porttitor ex nec sapien elementum vestibulum. Integer ipsum purus, luctus et odio et, fermentum placerat ex. In sit amet tellus vel libero hendrerit tincidunt non et augue. 
          </p>
        </div>
      </section>
      {/* The work section */}
      <hr />
      <section id="work">
        <div className="center-view">
          <PreAnchor id="work" />
          <h1>Work</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis lacus, facilisis ac arcu sit amet, faucibus faucibus libero. Suspendisse posuere enim metus, ac facilisis eros elementum sollicitudin. Vivamus consectetur elementum tellus, ut tristique mauris placerat et. Cras interdum posuere quam vel mattis. Nunc porttitor ex nec sapien elementum vestibulum. Integer ipsum purus, luctus et odio et, fermentum placerat ex. In sit amet tellus vel libero hendrerit tincidunt non et augue. 
          </p>
        </div>
      </section>
      <hr style={{marginTop: '0', marginBottom: '0'}} />
      <section id="contact">
        <div className="center-view">
          <PreAnchor id="contact" />
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis lacus, facilisis ac arcu sit amet, faucibus faucibus libero. Suspendisse posuere enim metus, ac facilisis eros elementum sollicitudin. Vivamus consectetur elementum tellus, ut tristique mauris placerat et. Cras interdum posuere quam vel mattis. Nunc porttitor ex nec sapien elementum vestibulum. Integer ipsum purus, luctus et odio et, fermentum placerat ex. In sit amet tellus vel libero hendrerit tincidunt non et augue. 
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
};

export default App;
