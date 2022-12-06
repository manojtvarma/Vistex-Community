import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const getTemplate = function (location) {
    switch (location.pathname) {
      case "/add-question": {
        return (
          <Link to={location.pathname}>
            <span className="icon is-small">
              <i className="fa-solid fa-circle-question"></i>
            </span>
            <span>New Question</span>
          </Link>
        );
      }

      case "/login": {
        return (
          <Link to={location.pathname}>
            <span className="icon is-small">
              <i className="fa-solid fa-right-to-bracket"></i>
            </span>
            <span>Sign in</span>
          </Link>
        );
      }

      case "/create-user": {
        return (
          <Link to={location.pathname}>
            <span className="icon is-small">
              <i className="fa-solid fa-registered"></i>
            </span>
            <span>Create Account</span>
          </Link>
        );
      }
    }
  };

  return (
    <section className="hero is-info has-text-centered">
      <div className="hero-body is-centered">
        <nav className="breadcrumb has-dot-separator" aria-label="breadcrumbs">
          <ul className="is-centered">
            <li>
              <Link to="/">
                <span className="icon is-small">
                  <i className="fa-sharp fa-solid fa-house"></i>
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>{getTemplate(useLocation())}</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
