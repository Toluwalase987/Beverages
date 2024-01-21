import React from "react";
import man from "../../../img/man3.jpeg";
import stuff from "../../../img/stuff";
import woman from "../../../img/woman.webp";
import "../../../css/Reviews.css";

export default function Reviews() { 
  return (
    <div className="reviews">
      <div className="video">
        <video
          src="/video.mp4"
          className="video-content" 
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="stories">
        <h2>We make people genuinely happy</h2>
        <div className="story">
          <div className="story-shape">
            <img src={woman} alt="" />
            <figcaption>Iyabo Ojo</figcaption>
          </div>
          <div className="story-text">
            <h3>Naija's Beverages saved my event</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quibusdam repellat, rerum aut, dolorem, nisi excepturi cupiditate
              vel est soluta eum repellendus atque quisquam esse veritatis.
              Quaerat vitae libero exercitationem!
            </p>
          </div>
        </div>

        <div className="story">
          <div className="story-shape">
            <img src={man} alt="" />
            <figcaption>Ahmed Musa</figcaption>
          </div>
          <div className="story-text">
            <h3>I don't even shop for drinks anymore</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ab,
              architecto saepe harum distinctio aliquid eos accusamus inventore
              tempora, accusantium eum! Minus itaque ipsam debitis iusto
              corrupti nobis iste eius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
