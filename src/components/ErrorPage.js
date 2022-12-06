import { Image } from "react-bootstrap";
import error from "../images/error.png";

const ErrorPage = () => {
  return (
    <div>
      <section className="section">
        <Image src={error}></Image>
      </section>
    </div>
  );
};

export default ErrorPage;
