const Toolbar = () => {
  return (
    <div className="field has-addons has-no-margin-bottom">
      <p className="control">
        <button className="button">
          <span className="icon">
            <i className="fas fa-bold"></i>
          </span>
        </button>
      </p>
      <p className="control">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-italic"></i>
          </span>
        </button>
      </p>
      <p className="control">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-underline"></i>
          </span>
        </button>
      </p>

      <p className="control">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-align-left"></i>
          </span>
        </button>
      </p>
      <p className="control">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-align-center"></i>
          </span>
        </button>
      </p>
      <p className="control">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-align-right"></i>
          </span>
        </button>
      </p>

      <p className="control">
        <button className="button">
          <span className="icon is-small">
            <i className="fa-solid fa-upload"></i>
          </span>
        </button>
      </p>
    </div>
  );
};

export default Toolbar;
