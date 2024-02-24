import React, { useState, useEffect } from "react";
import "../../css/MediumPage.css";
import drinksData from "../data/drinksdata";
import { Link, useNavigate } from "react-router-dom";

export default function MediumPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state as true
  
  useEffect(() => {
    // An array of image URLs
    const imageUrls = drinksData.map((drinks) => drinks.coverPhoto);

    const loadImages = async () => {
      // Create an array of image loading promises
      const imagePromises = imageUrls.map((imageUrl) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = imageUrl;
        });
      });

      // Wait for all image loading promises to resolve
      await Promise.all(imagePromises);

      // All images are loaded, set isLoading to false 
      setIsLoading(false);
    };

    // Call the loadImages function to load images
    loadImages();
  }, []);

 
  function drinks(brandName){
    navigate(`/drinks/${brandName}`) 
  }

  return (
    <div className="medium-container"> 
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="medium">
          <h1>What we currently have</h1>
          <div className="items">
            {drinksData.map((drink, index) => {
              const { name, brandName, coverPhoto } = drink;

              return (
                <div key={index} className="item" onClick={() => drinks(brandName)}>
                  <div className="item-content">
                    <img src={coverPhoto} alt={`${name} Drink`} />
                  </div>
                  <h5>{name}</h5>
                </div>
              );
            })}
          </div>
          <h2>Select your preferred choice</h2>
        </div>
      )}
    </div>
  );
}
