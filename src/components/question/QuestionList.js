import QuestionItem from "./QuestionItem";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

const QuestionList = ({ questions, isPending, error }) => {
  return (
    <div>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-10">
            <nav className="navbar mb-4">
              <div className="navbar-start">
                <div className="nav-item">
                  <div className="field has-addons is-hidden-mobile">
                    <div className="control">
                      <input
                        className="input "
                        type="text"
                        placeholder="Search Questions"
                        style={{ width: 350 }}
                      />
                    </div>
                    <div className="control">
                      <a className="button is-info">Search</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div className="buttons is-right">
                  <Link className="button is-info" to="/questions/add-question">
                    Ask Question
                  </Link>
                </div>
              </div>
            </nav>
            <Loader isPending={isPending}></Loader>
            <ErrorMessage error={error}></ErrorMessage>
            {questions && <h1 className="subtitle"> All Questions</h1>}
            {questions &&
              questions.map((question) => {
                return (
                  <div key={question.id} className="box">
                    <QuestionItem question={question}></QuestionItem>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionList;
