import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faBus,
  faCoins,
  faDice,
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Knut Bjørnevik </h4>
    <p className="text-center">Følg meg på sosiale medier</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            className="google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
