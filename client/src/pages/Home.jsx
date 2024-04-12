import { Analytics } from "../Component/Analytics";


export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container" grid grid-two-cols>
            <div className="hero-content">
              <p>Its the World's best Website</p>
              <h1>Welcome to Muskan's Page</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                recusandae harum obcaecati impedit, cupiditate itaque nostrum
                asperiores atque pariatur deleniti provident laborum vitae
                ratione accusamus labore. Blanditiis earum est veritatis debitis
                ab aperiam sed.
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
            {/* hero images */}
            <div className="hero-image">
              <img src="/images/home.png" alt="home" width="400" height="500" />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd Section */}
      <Analytics/>

      {/* 3rd Section */}
      <section className="section-hero">
        <div className="container" grid grid-two-cols>
          {/* hero images */}
          <div className="hero-image">
            <img src="/images/design.png" alt="home" width="400" height="500" />
          </div>
          <div className="hero-content">
            <p>We're here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              recusandae harum obcaecati impedit, cupiditate itaque nostrum
              asperiores atque pariatur deleniti provident laborum vitae ratione
              accusamus labore. 
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
        </div>
      </section>
    </>
  );
};
