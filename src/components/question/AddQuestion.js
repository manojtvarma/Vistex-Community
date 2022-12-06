import { Link } from "react-router-dom";
import { addQuestion } from "../../database/question";
import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useUserAuth } from "../../components/UserAuthContext";

const AddQuestion = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  // function resetAddQuestionForm(event) {
  //   event.target.elements.title.value = "";
  //   event.target.elements.body.value = "";
  //   event.target.elements.tag.value = "";
  // }
  function getVotes() {
    //dummy implementation
    return Math.floor(Math.random() * 100 + 1);
  }

  function handleAddQuestion(event) {
    const tags = [];

    event.preventDefault();

    console.log(user);

    const tag = event.target.elements.tag.value;
    tags.push(tag);

    const question = {
      title: event.target.elements.title.value,
      body: event.target.elements.body.value,
      tags: tags,
      author: user.displayName,
      votes: getVotes(),
      uid: user.uid,
    };
    console.log(question);
    addQuestion(question);
    //resetAddQuestionForm(event);
    navigate("/questions");
  }

  return (
    <section className="section">
      <form onSubmit={handleAddQuestion} id="add-question">
        <div className="columns is-centered">
          <div className="column is-half box">
            <p className="subtitle py-4 is-size-3 has-text-centered">
              New Question
            </p>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="input"
                  name="title"
                  placeholder="Title"
                />
              </p>
            </div>

            <Toolbar></Toolbar>

            <div className="field">
              <p className="control">
                <textarea
                  className="textarea is-medium"
                  name="body"
                  placeholder="Question Details"
                  rows="10"
                ></textarea>
              </p>
            </div>

            <div className="select is-fullwidth">
              <select name="tag">
                <option>Select Tags</option>
                <option>ABAP</option>
                <option>Open SQL</option>
                <option>Data Dictionay</option>
                <option>CDS View</option>
                <option>SAP UI5</option>
                <option>RectJS</option>
              </select>
            </div>

            <div className="field is-grouped py-5">
              <p className="control">
                <button className="button is-info">Submit</button>
              </p>

              <p className="control">
                <Link to="/" className="button is-info is-outlined">
                  Cancel
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddQuestion;
