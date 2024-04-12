import { useState } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  //updating default value of user in form]
  const [userData, setUserData] = useState(true);
  const { user } = useAuth(); //this user contains all data of user except password

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

    // setContact((prev)=>({
    //     ...prev,
    //     [name]:value,
    // }))
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response= await fetch(`http://localhost:5000/api/form/contact`,{
        method:"POST",
        headers: {
           "Content-Type":"application/json"
        },
        body: JSON.stringify(contact),
      })
      if(response.ok){
        
        const res_data = await response.json();
        console.log("res from server ",res_data);
        setContact({
          username: "",
          email: "",
          message: "",
        });
        alert("message sent");
      }
    } catch (error) {
      console.log("contact", error);
    }
  };
  return (
    <>
      <main>
        <section className="contact-section">
          <div className="container contact-heading">
            <h1 className="main-heading">Contact Us</h1>
          </div>

          <div className="container grid grid-two-cols">
            <div className="contact-image">
              <img
                src="/images/support.png"
                alt="img"
                width="400"
                height="500"
              />
            </div>
            <div className="contact-content">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    autoComplete="off"
                    required
                    value={contact.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                    required
                    value={contact.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    required
                    cols="30"
                    rows="5"
                    value={contact.message}
                    onChange={handleInput}
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
          <div className="mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.085710882928!2d85.15354068102901!3d25.620814289670946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1707898991567!5m2!1sen!2sin"
              width="100%"
              height="260"
              allowfullscreen
              loading="lazy"
              eferrerolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};
