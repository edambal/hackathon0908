import React from 'react';
import {Link } from 'react-router-dom'

const ResultsRandom = () => {
  return (
    <div>
      <Link to="/random/pie" className="invisiblePie"></Link>
      <div className="invisibleShelf"></div>
      <div className="invisibleMusic"></div>
      <button className="random2"></button>
    </div>
  );
}

export default ResultsRandom;