import React from "react";
import "./Stiylist.css";
import stiylist1 from '../../Assets/stiylist1.jpeg'
import stiylist2 from '../../Assets/stiylist2.jpeg'
import stiylist from '../../Assets/stiylist.jpeg'

const Stiylist = () => {
  return (
    <div className="image-gallery">
      <div className="image-card">
        <img src={stiylist1} alt="Image 1" />
        <p>Alex</p>
      </div>
      <div className="image-card">
        <img src={stiylist2} alt="Image 2" />
        <p>Brad</p>
      </div>
      <div className="image-card">
        <img src={stiylist} alt="Image 3" />
        <p>Josephina</p>
      </div>
    </div>
  );
};

export default Stiylist;
