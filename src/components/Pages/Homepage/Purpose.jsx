import React from "react";
import deliver from "../../../img/deliver3.jpeg";
import "../../../css/Purpose.css";
import { PiTarget } from "react-icons/pi";
import { FaShip } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa"; 
import event from "../../../img/event.jpeg";
import home from "../../../img/home1.avif";
import office from "../../../img/office.jpg";

export default function Purpose() {
  return (
    <div className="purpose">
      <div className="purpose1">
        <div className="purpose1-img">
          <img src={deliver} alt="" />
        </div>
        <div className="purpose-text">
          <h3>What we do</h3>
          <p>
            Naija's Beverages receives products from{" "}
            <span className="span">
              Nigeria's finest manufacturers wey sabi
            </span>{" "}
            and delivers them to your doorstep at any location.
          </p>

          <ul className="list">
            <li>We find the best manufacturers in the country</li>
            <li>Receive their finest beverages at agreeable rates</li>
            <li>Distribute and deliver them to customers at fair prices</li>
          </ul>
        </div>
      </div>

      <div className="purpose2">
        <div className="purpose-top">
          <h2>Why naija's beverages?</h2>
          <h4>
            Cause Craving a particular drink miles away sucks, we've fixed that. 
          </h4>
        </div>

        <div className="purpose-bottom">
          <div className="mission">
            <h3>
              <PiTarget /> Our Mission
            </h3>
            <p>
              To serve Nigeria's best beverages, distributing Naija's finest and
              also support home grown businesses.
            </p>
          </div>
          <div className="suppliers">
            <h3>
              <FaShip /> Our Suppliers
            </h3>
            <p>
              We get our beverages from the best so we can serve the best and
              also support and encourage Nigerian businesses.
            </p>
          </div>
          <div className="customers">
            <h3>
              <FaPeopleCarry /> Our Customers
            </h3>
            <p>
              We serve Naija's finest to all willing to enjoy the refreshing
              taste of Nigerian beverages in any community within the 36 states.
            </p>
          </div>
        </div>
      </div>

      <div className="purpose3">
        <h2>We supply to</h2>
        <div className="supply">
          <div className="events">
            <h4>Events</h4>
            <div className="purpose-img">
              <img src={event} alt="Event Center" />
            </div> 
            <p>
              What easier way to get drinks served at events and occations than
              with Naija's very best.
            </p>
          </div>
          <div>
            <h4>Homes</h4>
            <div className="purpose-img">
              <img src={home} alt="Home" />
            </div>
            <p>
              We deliver to homes to ensure you never run out of drinks while
              also not going to the supermarket.
            </p>
          </div>
          <div className="office">
            <h4>Offices</h4>
            <div className="purpose-img">
              <img src={office} alt="Event Center" />
            </div>
            <p>
              One good way to keep the mind and body focused is to have Nigerian
              beverages in the heat of meetings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
