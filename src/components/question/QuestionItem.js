import { Link } from "react-router-dom";
import QAProfilePicture from "./QAProfilePicture";
import Tags from "./Tags";

const Question = ({ question }) => {
  return (
    <article className="media">
      <QAProfilePicture
        profilePicture={question.profilePicture}
        author={question.author}
      ></QAProfilePicture>

      <div className="media-content">
        <div className="content">
          <p>
            <strong>{question.author}</strong>
            <p>
              <small>{new Date().toDateString(question.timestamp)}</small>
            </p>
            <p>
              <Link to={`${question.id}`}>{question.title}</Link>
            </p>
            <Tags tags={question.tags}></Tags>
          </p>
        </div>
      </div>
      <div className="media-right is-hidden-mobile">
        <nav className="level">
          <div className="level-item mx-4">
            <div>
              <p className="subtitle has-text-centered">10</p>
              <p className="heading">Answers</p>
            </div>
          </div>

          <div className="level-item mx-4">
            <div>
              <p className="subtitle has-text-centered">{question.votes}</p>
              <p className="heading">Votes</p>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default Question;
