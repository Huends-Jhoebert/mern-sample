import { useState, useEffect } from "react";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg">
                Submit
              </Button>
            </div>
            {/* <Button type="submit" variant="dark">
              Submit
            </Button> */}
            {/* <button type="submit" className="btn btn-block">
              Submit
            </button> */}
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
