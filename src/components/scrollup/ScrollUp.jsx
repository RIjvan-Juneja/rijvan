import React from 'react';
import "./scrollup.css"

const ScrollUp = () => {
    // window.addEventListener('scroll', function (){
    //     const scrollUp = document.getElementsByClassName("scrollup");
    //     // this.alert(scrollUp);
    //     if(this.scrollUp >= 560) {
    //         scrollUp.classList.add(".show-scroll");
    //         // this.alert(scrollUp);
    //     }
    //     else {
    //         scrollUp.classList.remove("show-scroll");
    //     }
    // });
  return (
    <a href=" " className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp;