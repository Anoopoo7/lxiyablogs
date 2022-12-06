const RegisterComponent = ({ handleregister }) => {
  return (
    <>
      <br />
      <h3>Register </h3>
      <br />
      <form onSubmit={handleregister}>
        <div className="form-group">
          <label Htmlor="firstname">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputfirstname"
            name="name"
          />
        </div>
        <div className="form-group">
          <label Htmlor="phoneno">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputphoneno"
            name="phoneno"
          />
        </div>
        <div className="form-group">
          <label Htmlor="Email1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <div className="form-group">
          <label Htmlor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            name="password"
          />
        </div>
        <div className="form-group">
          <label Htmlor="Password">Re Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            name="repassword"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          name="create"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterComponent;
