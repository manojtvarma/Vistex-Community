import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";

const AddAnswer = () => {
  return (
    <form id="add-question">
      <div className="columns">
        <div className="column box">
          <h1 className="subtitle">
            You must be <Link to={"/user/signin"}>Logged in</Link> to submit an
            answer
          </h1>
          <Toolbar></Toolbar>
          <div className="field">
            <p className="control">
              <textarea
                className="textarea is-medium"
                name="body"
                placeholder="Answer Details"
                rows="10"
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-info">Submit</button>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddAnswer;
