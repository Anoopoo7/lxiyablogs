const DropdownComponent = ({ quantity }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        x{quantity}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          x1
        </a>
        <a className="dropdown-item" href="#">
          x2
        </a>
        <a className="dropdown-item" href="#">
          x3
        </a>
      </div>
    </div>
  );
};

export default DropdownComponent;
