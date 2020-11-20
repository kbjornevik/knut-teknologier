import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faStrava
  
} from "@fortawesome/free-brands-svg-icons";
import {
  faMountain
  
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Knut Bjørnevik </h4>
    <p className="text-center">Følg meg på sosiale medier</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com/knut.bjornevik"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faFacebook} size="2x" />
           
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/knutbjornevik/"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer">
           <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
         <li>
          <a
            href="https://www.google.com"
            className="google"
            target="_blank"
            rel="noopener noreferrer" >
             <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.strava.com/athletes/1874315"
            className="strava"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faStrava} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.uc.no/nb/"
            className="ulriken"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faMountain} size="2x" />
          </a>
        </li>
        
        
      </ul>
    </div>
  </div>
)

export default Footer
