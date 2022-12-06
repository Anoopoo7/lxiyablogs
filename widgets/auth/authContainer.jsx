import LoginComponent from "./loginComponent";
import RegisterComponent from "./registerComponent";
import { login, register } from "../../services/userServices";
import { useRouter } from "next/router";

const AuthContainer = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = await login("/login", { email, password });
    if (user.data.id) return router.push("/profile");
  };

  const handleregister = async (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.phoneno.value;
    const phone = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    const user = await register("/register", {
      username,
      email,
      phone,
      password,
      repassword,
    });
    if (user.data.id) return router.push("/profile");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <LoginComponent handleLogin={handleLogin} />
          </div>
          <div className="col-12 col-lg-6">
            <RegisterComponent handleregister={handleregister} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthContainer;
