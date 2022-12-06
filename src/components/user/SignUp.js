import { createUser } from "../../database/user";
import { toggleInputType } from "../../common/Util";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../components/UserAuthContext";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useUserAuth();

  function getDisplayName(firstName, lastName) {
    return firstName + " " + lastName;
  }

  const validEmail = new RegExp("^[a-zA-Z0-9.]+$");

  // function resetCreateUserForm(event) {
  //   event.target.elements.email.value = "";
  //   event.target.elements.password.value = "";
  //   event.target.elements.confirmPassword.value = "";
  //   event.target.elements.firstName.value = "";
  //   event.target.elements.lastName.value = "";
  // }

  // function isInitial(value, messageElementId, message) {
  // let messageElement = document.getElementById(messageElementId);
  // if (value) {
  //   messageElement.innerText = "";
  //   messageElement.classNameList.remove("is-danger");
  // } else {
  //   messageElement.innerText = message;
  //   messageElement.classNameList.add("is-danger");
  // }
  // }

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (validEmail.test(email)) {
        const newEmail = email.concat("@vistex.com");
        setEmail(newEmail);
        await createUser(
          newEmail,
          password,
          getDisplayName(firstName, lastName)
        );
        navigate("/");
      } else {
        setError("Enter valid username");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // function handleCreateUser(event) {
  //   event.preventDefault();

  //   const password = event.target.elements.password.value;
  //   const confirmPassword = event.target.elements.confirmPassword.value;
  //   const email = event.target.elements.email.value;

  //   let passwordElement = document.getElementById("password");
  //   let confirmPasswordElement = document.getElementById("confirmPassword");
  //   let emailElement = document.getElementById("email");

  //   let confirmPasswordMessage = document.getElementById(
  //     "confirmPasswordMessage"
  //   );

  //   isInitial(password, "passwordMessage", "Password is required");
  //   isInitial(
  //     confirmPassword,
  //     "confirmPasswordMessage",
  //     "Confim Password is required"
  //   );
  //   isInitial(email, "emailMessage", "Email is required");

  //   if (password && confirmPassword && password === confirmPassword) {
  //     // passwordElement.classNameList.remove("is-danger");
  //     // confirmPasswordElement.classNameList.remove("is-danger");
  //     // emailElement.classNameList.remove("is-danger");

  //     // passwordElement.classNameList.add("is-success");
  //     // confirmPasswordElement.classNameList.add("is-success");
  //     // emailElement.classNameList.add("is-success");

  //     createUser({
  //       email: event.target.elements.email.value,
  //       password: event.target.elements.password.value,
  //       name: getDisplayName(
  //         event.target.elements.firstName.value,
  //         event.target.elements.lastName.value
  //       ),
  //     });
  //   } else if (password && confirmPassword) {
  //     confirmPasswordMessage.innerText =
  //       "The Password and Confirm Password do not match";

  //     // passwordElement.classNameList.add("is-danger");
  //     // confirmPasswordElement.classNameList.add("is-danger");
  //   }
  // }

  function togglePassword() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    toggleInputType(password);
    toggleInputType(confirmPassword);
  }
  return (
    <section className="section">
      <form onSubmit={handleSignUp}>
        <div className="columns is-centered">
          <div className="column is-one-third box">
            <p className="subtitle has-text-centered py-4 is-size-3">
              Create an Account
            </p>
            <ErrorMessage error={error}></ErrorMessage>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </p>
              </div>
            </div>

            {/* <div className="field py-4">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div> */}

            <div className="field has-addons my-3">
              <p className="control is-expanded has-icons-left ">
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Username"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
              <p className="control is-right">
                <a className="button is-static">@vistex.com</a>
              </p>
            </div>
            <p className="help is-danger" id="emailMessage"></p>

            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>

                {/* <span className="icon is-small is-right">
                  <i className="fa-solid fa-eye"></i>
                </span> */}
              </p>
              <p className="help is-danger is-large" id="passwordMessage"></p>
            </div>

            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
              <p
                className="help is-danger is-large"
                id="confirmPasswordMessage"
              ></p>
            </div>

            <div className="field">
              <p className="control py-4">
                <input
                  className="checkbox is-large"
                  type="checkbox"
                  onClick={togglePassword}
                />
                <span className="px-2">Show Password</span>
              </p>
            </div>

            <div className="field has-text-centered">
              <p className="control">
                <button to="/" className="button is-info">
                  Submit
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default CreateAccount;
