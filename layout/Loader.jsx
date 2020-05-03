import React from 'react';

function Loader(props) {
  return (
    <div id="preloader">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
