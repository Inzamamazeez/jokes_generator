
import React, { useState, useEffect } from "react";
import "./joke.css";


function ChuckNorries() {
  const [name, setName] = useState([]);
  const [popUpHead, setPopUpHead] = useState("");
  const [joke, setJoke] = useState({});
  const [count, setCount]=useState(0)
  const [showPopup, setShowPopup]= useState(false)


  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${popUpHead}`)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, [popUpHead, count]);

  const handleCard = (cardName) => {
    setPopUpHead(cardName);
    setShowPopup(true)
  };

  const handleNextJoke = () => {
    // fetch(`https://api.chucknorris.io/jokes/random?category=${popUpHead}`)
    //   .then((res) => res.json())
    //   .then((data) => setJoke(data));
setCount(count+1)

  };



  return (
    <div className="container">
      <div className="sub_container">
      <h1 className="chuck">Chuck Norris</h1>
      <div className="grid_cntnr">
        {name.map((item, index) => {
          return (
            <div className="card" key={index} onClick={() => handleCard(item)}>
                <section>
              <h1>{item}</h1>
              <div className="unlimited">Unlimited jokes on {item}</div>
              </section>
            </div>
          );
        })}
      </div>
{showPopup && 
      <div className="popUpBox">
        <div className="relative">
        <div className="heading">
        {popUpHead}</div>
        <span className="cross" onClick={()=>setShowPopup(false)}>X</span>
        
        <div className="contentBox">
       
          <div>"{joke.value}"</div>
          <button onClick={handleNextJoke}>Next joke</button>
        </div>
      </div>
      </div>
}

    </div>
    </div>
  );
}

export default ChuckNorries;



