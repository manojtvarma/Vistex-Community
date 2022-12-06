const Loader = ({ isPending }) => {
  return (
    <div>
      {isPending && (
        <div className="box">
          <span className="loader is-large"></span>
        </div>
      )}
    </div>
  );
};

export default Loader;
