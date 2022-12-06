import { Image } from "react-bootstrap";

const QAProfilePicture = ({ profilePicture, author }) => {
  return (
    <figure className="media-left">
      <p className="image is-64x64">
        {profilePicture ? (
          <Image className="is-circular" src={profilePicture} />
        ) : (
          <div className="is-profile-picture" id="profilePicture">
            {author && author.split(" ")[0].charAt(0).toUpperCase()}
          </div>
        )}
      </p>
    </figure>
  );
};

export default QAProfilePicture;
