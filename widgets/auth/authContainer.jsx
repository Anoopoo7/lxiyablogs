import LoginComponent from "./loginComponent";
import RegisterComponent from "./registerComponent";

const AuthContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <LoginComponent />
          </div>
          <div className="col-12 col-lg-6">
            <RegisterComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthContainer;
