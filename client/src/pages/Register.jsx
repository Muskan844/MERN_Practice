import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth} from "../store/auth";
export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  }); //user is a state variable and SetUser is an updated function and usestate is a hook

  const Navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value, // as we make name dynamic, we can change value of username on web. dynamic means name could be any field that we type on
      //we are storing inputs in state(as we did in Postman) in devtools whatever user is giving as input
      //And now we have to connect our Registration for to our backend(to pass the data(storing in State..to mongo))
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents from reloading
    console.log(user); //is shown in console of devtools
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      //empty the form and redirect to login page
      if (response.ok) {
        const res_data= await response.json();
        console.log("res from server", res_data);
        //storing token in localhost
         storeTokenInLS(res_data.token);
        // localStorage.setItem("token",res_data.token);  //token will be used at so many plces so we write it using useContext to prevent prop-drilling.
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });

        Navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="reg-image">
                <img
                  src="/images/register.png"
                  alt="registration"
                  width="400"
                  height="500"
                />
              </div>
              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="enter username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username} //this will display default value of user.username in page(unchangeable)
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email} //this will display default value of user.username in page(unchangeable)
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone} //this will display default value of user.username in page(unchangeable)
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password} //this will display default value of user.username in page(unchangeable)
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <button type="submit" className="btn btn-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
