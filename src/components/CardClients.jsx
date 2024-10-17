import React, { useState } from "react";

export default function CardClients({img, alt, score, page, t1, t2, t3}) {

  const paragraphs =[
    t1,
    t2,
    t3
  ]

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if(current === paragraphs.length - 1){
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  const handlePrev = () => {
    if(current === 0){
      setCurrent(paragraphs.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  return (
    <div className="clients__card flex--col--nowrap">
      <div className="card__name flex--col--nowrap">
        <picture>
          <img className="reseña__img" src={img} alt={alt} />
        </picture>
        <p className="card__r">{score}</p>
      </div>
      <div className="card__container">
        <img src="/icons/a-2.png" alt="" className="card--a" onClick={handlePrev}/>
        <p className="reseña__p" id="p1">
          {paragraphs[current]}
        </p>
        <img src="/icons/a-2.png" alt="" className="card--a swipe" onClick={handleNext}/>
      </div>
      <a href={page} className="card__button">
        Ver más
      </a>
    </div>
  );
}
