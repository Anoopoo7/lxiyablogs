const HeadingComponent = ({ content }) => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <h5><b>{content?.heading_text}</b></h5>
      {content?.description_visible && <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repellat!</p>}
      <hr />
    </div>
  );
};

export default HeadingComponent;
