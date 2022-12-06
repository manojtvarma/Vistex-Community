const ErrorMessage = ({ error }) => {
  return (
    <div>
      {error && (
        <div className="box mb-5">
          <h2 style={{ color: "#AF0606" }}>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
