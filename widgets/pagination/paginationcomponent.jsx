const PaginationComponent = () => {
  return (
    <nav aria-label="Page navigation example rounded">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
