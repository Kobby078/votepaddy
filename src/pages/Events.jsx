import '../styles/styles.css';
import Card from '../components/Card';
import { useState } from 'react';
import data from '../db/data';
import Products from '../components/Products';

export const Events = () => {
  const [query, setQuery] = useState("");

  const handleChanges = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (data) => data.eventName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1
  );

    //Filtering Imput Items
  function filteredData (data, query) {
    let filteredProducts  = filteredItems;

    return filteredProducts.map(
      ({eventName, category, image}) => (
        <Card 
          key={Math.random()}
          image={image}
          eventName={eventName}
          category={category}
        />
      )
    )

  }

  const result = filteredData(data, query)

  


  return (
    <>
      <div className="event-container">
        <div className="event-headers">
          <div className="event-head">
            <p>Events</p>
          </div>
          <p className="event-subText">
            Choose an ongoing event and start voting for your favourite participant(s).
          </p>
          <input type="text" id="" placeholder="Search by event name" onChange={handleChanges}/>
        </div>
        <div className="event-items">
          <Products result={result}/>
        </div>
      </div>
    </>
  )
}
