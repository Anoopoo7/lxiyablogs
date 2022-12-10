const LoginComponent = ({ handleLogin, setToggle }) => {
  return (
    <>
      <form onSubmit={handleLogin} className="form-outer">
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
        <button
          type="submit"
          className="btn btn-primary btn-block"
          name="create"
        >
          Login
        </button>
        <br />
        <i>
          if you dont have an account with us please consider{" "}
          <b
            style={{ cursor: "pointer" }}
            onClick={() => setToggle((prev) => !prev)}
          >
            registeration
          </b>
        </i>
      </form>
    </>
  );
};

export default LoginComponent;
