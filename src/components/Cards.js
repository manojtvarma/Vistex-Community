import Card from "./CardItem";
import qa from "../images/qa.jpg";
import blog from "../images/blog.jpg";
import resources from "../images/resources.jpg";

const Cards = () => {
  const cards = [
    {
      id: "1",
      name: "QA Section",
      label: "See All Questions",
      url: qa,
      title: "10 Questions",
      subtitle: "20 Answers",
      linkTo: "questions",
    },
    {
      id: "2",
      name: "Blog Section",
      label: "Join The Blog",
      url: blog,
      title: "5 Topics",
      subtitle: "10 Posts",
      linkTo: "blogs",
    },
    {
      id: "3",
      name: "Latest Updates",
      label: "Get Updates",
      url: resources,
      title: "10 Updates",
      subtitle: "5 Comments",
      linkTo: "updates",
    },
  ];
  return (
    <section className="section">
      <div className="columns">
        {cards.map((card) => {
          return (
            <div key={card.id} className="column">
              <Card card={card}></Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
