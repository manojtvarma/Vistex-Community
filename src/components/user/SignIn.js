import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signInUser } from "../../database/user";
import { toggleInputType } from "../../common/Util";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../components/UserAuthContext";
import ErrorMessage from "../ErrorMessage";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, user } = useUserAuth();

  // function resetLoginUserForm(event) {
  //   event.target.elements.email.value = "";
  //   event.target.elements.password.value = "";
  // }

  // function handleLogin(event) {
  // event.preventDefault();
  // signInUser({
  //   email: event.target.elements.email.value,
  //   password: event.target.elements.password.value,
  // });
  // resetLoginUserForm(event);
  // navigate(-1);
  // }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  function togglePassword() {
    let password = document.getElementById("password");
    toggleInputType(password);
  }

  return (
    <section className="section">
      <form onSubmit={handleLogin}>
        <div className="columns is-centered">
          <div className="column is-one-third box">
            <p className="subtitle has-text-centered py-4 is-size-3">Login</p>
            <ErrorMessage error={error}></ErrorMessage>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-medium"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>

                {/* <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span> */}
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-medium"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control py-2">
                <input
                  className="checkbox is-large"
                  type="checkbox"
                  onClick={togglePassword}
                />
                <span className="px-2">Show Password</span>
              </p>
            </div>

            <div className="field is-grouped is-grouped-centered py-5">
              <p className="control">
                <button
                  className="button is-info is-outlined is-medium"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </p>

              <p className="control has-text-right">
                <Link to="/user/signup" className="button is-info is-medium">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Login;
