import './App.css';
import styles from './style';
import { Navbar, Billing, Business, Hero, Testimonials, CTA, Stats, CardDeal, FeedbackCard, Footer, Clients} from "./components";

function App() {

  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`text-white ${styles.marginX} ${styles.flexCenter} flex-col`}>
          <div className={`${styles.boxWidth}`}>
           < Navbar />
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} ${styles.start} `}>
             < Hero/>
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
             < Stats />
              <Business />
             < Billing />
              <CardDeal />
              <Testimonials />
              <FeedbackCard />
              <Clients />
              <CTA />
              <Footer />
            </div>
            </div>
          </div>
        </div>
      </>
      )
}

      export default App
