import Loader from "../Loader";
import AnswerItem from "./AnswerItem";
import ErrorMessage from "../ErrorMessage";
import AddAnswer from "./AddAnswer";

const Answers = ({ answers, isPending, error }) => {
  return (
    <div>
      <h1 className="subtitle">
        {answers && answers.length !== 0 && <span>{answers.length}</span>}
        <span class="ml-1">Answers</span>
      </h1>
      <section className="section">
        <div className="columns">
          <div className="column">
            <Loader isPending={isPending}></Loader>
            <ErrorMessage error={error}></ErrorMessage>
            {answers &&
              answers.map((answer) => {
                return (
                  <div key={answer.id} className="box">
                    <AnswerItem answer={answer}></AnswerItem>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="section">
        <AddAnswer></AddAnswer>
      </section>
    </div>
  );
};

export default Answers;
