import { useParams } from "react-router-dom";
import useFetchSingle from "../useFetchSingle";
import useFetch from "../useFetch";
import QAProfilePicture from "./QAProfilePicture";
import Tags from "./Tags";
import Loader from "../Loader";
import Answers from "./Answers";
import ErrorMessage from "../ErrorMessage";

const QuestionDetails = () => {
  const { questionId } = useParams();

  const {
    data: question,
    isPending,
    error,
  } = useFetchSingle("questions", questionId);

  const {
    data: answers,
    isAnsPending,
    ansError,
  } = useFetch("questions", questionId, "answers");

  return (
    <div className="section">
      <div className="box">
        <Loader isPending={isPending}></Loader>
        <ErrorMessage error={error}></ErrorMessage>
        {question && (
          <article className="media">
            <QAProfilePicture
              profilePicture={question.profilePicture}
              author={question.author}
            ></QAProfilePicture>

            <div className="media-content">
              <div className="content">
                <strong>{question.author}</strong>
                <p>
                  <small>{new Date().toDateString(question.timestamp)}</small>
                </p>
                <p className="subtitle is-size-4">{question.title}</p>
                <p>{question.body}</p>
                {/* <button className="button is-info">Add Comment</button> */}
              </div>
            </div>

            <div className="media-right is-hidden-mobile">
              <nav className="level">
                <Tags tags={question.tags}></Tags>
              </nav>
            </div>
          </article>
        )}
      </div>

      <Answers
        answers={answers}
        isPending={isAnsPending}
        error={ansError}
      ></Answers>
    </div>
  );
};

export default QuestionDetails;
