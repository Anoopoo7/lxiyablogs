const HeadingComponent = ({ content }) => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <h1>{content?.heading_text}</h1>
      {content?.description_visible && <p>{content?.description}</p>}
      <hr />
    </div>
  );
};

export default HeadingComponent;
