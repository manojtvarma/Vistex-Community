const Tags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map((tag, index) => {
          return (
            <p id={index} className="tag is-info is-rounded">
              {tag}
            </p>
          );
        })}
    </div>
  );
};

export default Tags;
