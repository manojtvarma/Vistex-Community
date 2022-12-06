import React from "react";
import { Link, NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useUserAuth } from "./UserAuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  let userIconText;
  const navigate = useNavigate();
  const { logOut, user } = useUserAuth();

  const signInElement = document.getElementById("signIn");
  const signOutElement = document.getElementById("signOut");
  const userIcon = document.getElementById("userIcon");

  if (user) {
    if (user.displayName) {
      userIconText = user.displayName.split(" ")[0].charAt(0).toUpperCase();

      signInElement.classList.add("is-hidden");
      signOutElement.classList.remove("is-hidden");
      userIcon.classList.remove("is-hidden");
    }
  } else {
    if (signOutElement && signInElement && userIcon) {
      signInElement.classList.remove("is-hidden");
      signOutElement.classList.add("is-hidden");
      userIcon.classList.add("is-hidden");
    }
  }

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // function setDisplayName() {
  //   const displayName = document.getElementById("displayName");
  //   if (name) {
  //     displayName.innerText = "Welcome " + name;
  //   } else {
  //     displayName.innerText = "Welcome";
  //   }
  // }

  // function setUserEmail(email) {
  //   const userEmail = document.getElementById("userEmail");
  //   userEmail.innerText = email;
  // }

  // function setUserIconText(name) {
  //   if (name) {
  //     const nameInitialLetter = name.split(" ")[0].charAt(0).toUpperCase();
  //     const userIcon = document.getElementById("userIcon");
  //     if (userIcon) {
  //       userIcon.innerText = nameInitialLetter;
  //     }
  //   }
  // }

  // function signOut() {
  //   signOutUser();
  //   navigate(-1);
  // }

  // const fromErrorPage = props.fromErrorPage;
  // if (fromErrorPage) {
  //   const homeElement = document.getElementById("home");
  //   const signInElement = document.getElementById("signIn");
  //   //const searchInputElement = document.getElementById("searchInput");

  //   if (homeElement) {
  //     homeElement.classList.remove("is-hidden");
  //   }
  //   if (signInElement) {
  //     signInElement.classList.add("is-hidden");
  //   }
  //   // console.log(searchInputElement);
  //   // if (searchInputElement) {
  //   //   searchInputElement.classList.add("is-hidden");
  //   // }
  // }

  // onAuthStateChanged(auth, (user) => {
  //   const signInElement = document.getElementById("signIn");
  //   const signOutElement = document.getElementById("signOut");
  //   const userIcon = document.getElementById("userIcon");

  //   if (user) {
  //     //User is signed in =>hide signin btn
  //     console.log(user);
  //     if (signInElement) {
  //       setDisplayName(user.displayName);
  //       setEmail(user.email);
  //       setUserIconText(user.displayName);
  //       signInElement.classList.add("is-hidden"); //hide signin btn
  //       signOutElement.classList.remove("is-hidden"); //show signout btn
  //       userIcon.classList.remove("is-hidden"); //show user btn
  //     }
  //   } else {
  //     //No user is signed in =>hide signout btn
  //     if (signOutElement && signInElement) {
  //       signOutElement.classList.add("is-hidden"); //hide signout btn
  //       userIcon.classList.add("is-hidden"); //hide user btn
  //       signInElement.classList.remove("is-hidden"); //show signin btn
  //     }
  //   }
  // });

  return (
    <nav className="navbar has-shadow">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <Image src={logo} style={{ maxHeight: 50 }} />
          <p className="subtitle">Vistex Community</p>
        </Link>

        <span
          className="navbar-burger"
          data-target="navbarMenu"
          onClick={(event) => {
            event.target.classList.toggle("is-active");
            const navbarMenu = document.getElementById(
              event.target.dataset.target
            );
            navbarMenu.classList.toggle("is-active");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div
        className="navbar-menu"
        id="navbarMenu"
        onClick={(event) => {
          event.target.classList.toggle("is-active");
        }}
      >
        <div className="navbar-start">
          <div className="navbar-item is-active ">
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink to={"about"}>About</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink to={"resources"}>Resources</NavLink>
          </div>
        </div>
        <div className="navbar-end">
          {/* <div className="navbar-item">
            <div className="control has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Search"
                id="searchInput"
                style={{ width: 350 }}
              />
              <span className="icon is-small is-right">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div> */}

          {/* <div className="navbar-item">
            <Link>
              <Image
                src="images/user-icon.webp"
                id="userIcon"
                className="is-hidden"
                style={{ maxHeight: 40 }}
              ></Image>
            </Link>
          </div> */}
          <div className="navbar-item">
            <div className="dropdown is-hoverable is-right">
              <div className="dropdown-trigger">
                <div className="is-user-icon is-hidden" id="userIcon">
                  {userIconText}
                </div>
              </div>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <p className="subtitle has-text-centered" id="displayName">
                      {user && user.displayName}
                    </p>
                  </div>

                  <div className="dropdown-item">
                    <p className="is-size-6" id="userEmail">
                      {user && user.email}
                    </p>
                  </div>

                  <span className="dropdown-divider"></span>
                  <div className="dropdown-item ">
                    <Link
                      onClick={handleLogout}
                      className="is-hidden"
                      id="signOut"
                    >
                      <span className="icon is-medium">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </span>
                      <span className="is-size-6">Sign out</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-item">
            <Link to="/user/signin" className="button is-info " id="signIn">
              Sign in
            </Link>
          </div>

          {/* <div className="navbar-item">
            <div className="is-info is-user-icon">MV</div>
          </div> */}

          {/* <div className="navbar-item">
            <button onClick={signOutUser} className="button is-hidden" id="signOut">
              Sign out
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
