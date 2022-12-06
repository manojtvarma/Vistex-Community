const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="buttons is-centered">
          <a
            className="button is-circular"
            href="https://twitter.com/vistex"
            target="_blank"
          >
            <span className="icon">
              <i className="fa-brands fa-twitter"></i>
            </span>
          </a>
          <a
            className="button is-circular"
            href="https://www.linkedin.com/company/vistex/"
            target="_blank"
          >
            <span className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </span>
          </a>
          <a
            className="button is-circular"
            href="https://www.facebook.com/VistexInc"
            target="_blank"
          >
            <span className="icon">
              <i className="fa-brands fa-facebook"></i>
            </span>
          </a>

          <a
            className="button is-circular"
            href="https://www.youtube.com/user/VistexTV"
            target="_blank"
          >
            <span className="icon">
              <i className="fa-brands fa-youtube"></i>
            </span>
          </a>
        </div>

        <div className="has-text-centered">
          <p>Copyright &#169;2022 Vistex&#44; Inc&#46;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
