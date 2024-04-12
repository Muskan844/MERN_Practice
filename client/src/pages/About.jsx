import { useEffect, useState } from "react";
import { Analytics } from "../Component/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const {user} = useAuth();
 
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              
              <p>Welcome, {user? `${user.username} to our website` : `to our website`}</p>
              <h1>Why Choose Us?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, neque dolore cum ut est fugiat quam{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, neque dolore cum ut est fugiat quam{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, neque dolore cum ut est fu
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, neque dolore{" "}
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/about.png" alt="img" width="400" height="500" />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
