import '../styles/card.css'
import '../styles/index.css';

const Card = ({image, eventName, category}) => {
  return (
    
        <div className="flexColStart e-card card">
          
            <div className="innerWidth c-image">
                <img 
                        src={image} 
                        alt={eventName}
                        className="card-img"
                    />
            </div>
            
            <div className="flexColCenter c-text">
                <p>{eventName}</p>
                <p>{category}</p>
            </div>
        </div>

  )
}

export default Card;