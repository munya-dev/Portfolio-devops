"use client";
import * as AWS from "@aws-sdk/client-s3";
import axios from "axios";
import Keycloak from "keycloak-js";
import { useEffect, useState } from "react";
import OrganizerList from "../../../events-x/src/components/OrganizerList";

const client = new AWS.S3({ region: "us-east-1" });

const Home: React.FC = () => {
  const [organizers, setOrganizers] = useState();

  const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "EventsX",
    clientId: "eventsx_client",
  });
  const initKeycloak = () => {
    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframe: false, // 'check-sso', 'login-required'
      })
      .then(function (authenticated) {
        //call a function to set settings
      });
  };
  initKeycloak();

  const getOrganizers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/organizer");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchOrganizers = async () => {
      const res = await getOrganizers();
      if (res) setOrganizers(res);
    };
    fetchOrganizers();
  }, []);

  return (
    <div className="content">
      <div className="page">
        <header className="header">
          <div className="header-content">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Upload Video</a>
                </li>
                <li>
                  <a href="#">Watch Tutorials</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="spacer"></div>
        <div className="main-content">
          <div className="main-section">
            <h1>Cratos</h1>
            {organizers && <OrganizerList organizers={organizers} />}
          </div>
          <div className="testimonial-section">
            <div className="testimonial-card">
              <p>"Cratos has changed the way I learn and create content."</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial-card">
              <p>"The tutorials on Cratos are top-notch and easy to follow."</p>
              <p>- Jane Smith</p>
            </div>
            <div className="testimonial-card">
              <p>"I've learned so much from Cratos, it's amazing!"</p>
              <p>- Bob Johnson</p>
            </div>
            <div className="testimonial-card">
              <p>"Cratos has helped me grow my audience and engagement."</p>
              <p>- Alice Brown</p>
            </div>
            <div className="testimonial-card">
              <p>"The community on Cratos is supportive and inspiring."</p>
              <p>- Mike Davis</p>
            </div>
            <div className="testimonial-card">
              <p>"I love the variety of content on Cratos, it's endless!"</p>
              <p>- Emily Chen</p>
            </div>
            <div className="testimonial-card">
              <p>"Cratos has taken my content creation to the next level."</p>
              <p>- David Lee</p>
            </div>
            <div className="testimonial-card">
              <p>"The upload process on Cratos is seamless and easy."</p>
              <p>- Sophia Patel</p>
            </div>
            <div className="testimonial-card">
              <p>"I've learned new skills and techniques from Cratos."</p>
              <p>- Olivia Kim</p>
            </div>
            <div className="testimonial-card">
              <p>"Cratos is my go-to platform for video tutorials."</p>
              <p>- Jackson Hall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
