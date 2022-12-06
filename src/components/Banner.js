import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="hero is-info is-medium has-text-centered">
      <div className="hero-body">
        <p className="title">Welcome to Vistex Community!</p>
        <p className="subtitle my-4">
          Members around the world are invited to post questions and share their
          knowledge. Join the community and help others.
        </p>
        <Link
          to="/questions/add-question"
          className="button is-info is-medium is-inverted my-2"
        >
          Ask Question
        </Link>
      </div>
    </section>
  );
};
export default Banner;
