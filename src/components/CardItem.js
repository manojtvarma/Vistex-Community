import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Card = (props) => {
  return (
    <div className="card has-text-centered">
      <div className="card-content">
        <Image src={props.card.url} style={{ maxHeight: 220 }} />
        <p className="subtitle">{props.card.name}</p>
        <p className="subtitle">
          {props.card.title} / {props.card.subtitle}
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <Link to={props.card.linkTo} className="button is-info">
              {props.card.label}
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Card;
