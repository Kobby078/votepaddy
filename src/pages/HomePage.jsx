
import '../styles/styles.css';
import '../styles/card.css';
import '../styles/index.css'
import banner from '../assets/images/banner.jpg'
import data from "../db/data";
import Card from "../components/Card";
export const HomePage = () => {
    const firstFive = data.slice(0, 8)

   

  



    return (
        <>        
            <div className="home-main">
                <div className="banner">
                    <img className="banner-image" src={banner} alt="Banner"/>
                </div>
                <div className="home-text">
                    <span>Elevate  your events with VotePaddy’s <br />seamless voting solutions.</span>
                    <button className="text-reg">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">Register Now</a>   
                    </button>
                </div>
                <div className="flexColCenter">
                    <div className="flexColCenter event-subText">
                        <p>Event</p>
                        <p>
                            Choose an ongoing event and start voting for your favourite participant(s).
                        </p>
                    </div>
                
                    <div className="flexCenter innerWidth c-wrapper">
                        {firstFive.map(product => (
                            <Card
                                key={product.eventName}
                                image={product.image}
                                eventName={product.eventName}
                                category={product.category}
                            />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

