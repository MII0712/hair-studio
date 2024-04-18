import React from "react";
import "./TeamExperts.css"; 
import experts1 from '../../Assets/experts1.jpeg'
import experts2 from '../../Assets/experts2.jpeg'
import experts3 from '../../Assets/experts3.jpeg'
import experts4 from '../../Assets/experts4.jpeg'
import experts5 from '../../Assets/experts5.jpeg'
import experts6 from '../../Assets/experts6.jpeg'

const TeamExpert = () => {
  return (
    <div className="TeamExpert">
      <h1>Meet Our Team of Experts</h1>
      <h2>Hair Dresser</h2>
      <div className="image-gallery-expert">
        <div className="image-card-expert">
          <img src={experts1} alt="Image 1" />
          <p>Erica</p>
        </div>
        <div className="image-card-expert">
          <img src={experts2} alt="Image 2" />
          <p>Jane</p>
        </div>
        <div className="image-card-expert">
          <img src={experts3} alt="Image 3" />
          <p>Camelea</p>
        </div>
        <div className="image-card-expert">
          <img src={experts4} alt="Image 4" />
          <p>JAcob</p>
        </div>
        <div className="image-card-expert">
          <img src={experts5} alt="Image 5" />
          <p>Helena</p>
        </div>
        <div className="image-card-expert">
          <img src={experts6} alt="Image 6" />
          <p>Bruce</p>
        </div>
      </div>
    </div>
  );
};

export default TeamExpert;
