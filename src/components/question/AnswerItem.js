import QAProfilePicture from "./QAProfilePicture";

const AnswerItem = ({ answer }) => {
  return (
    <div>
      <article className="media">
        <QAProfilePicture
          profilePicture={answer.profilePicture}
          author={answer.author}
        ></QAProfilePicture>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{answer.author}</strong>
              <p>
                <small>{new Date().toDateString(answer.timestamp)}</small>
              </p>
            </p>
            <p>{answer.body}</p>
          </div>
          <button className="button is-info">Add Comment</button>
        </div>
      </article>
    </div>
  );
};

export default AnswerItem;
