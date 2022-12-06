const LoginComponent = ({ handleLogin }) => {
  return (
    <>
      <br />
      <h3>Login </h3>
      <br />
      <form onSubmit={handleLogin}>
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
      </form>
    </>
  );
};

export default LoginComponent;
