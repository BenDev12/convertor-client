/* eslint-disable prettier/prettier */
import React from "react";
import './Loader.scss'

function Loader() {
  return (
    <div className='spinnerOverlay'>
      <div className='spinnerContainer' />
      <span>Loading please wait</span>
    </div>
  );
}

export default Loader;
