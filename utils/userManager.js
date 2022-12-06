import user from "./user.json";

const saveUser = (details) => {
  const userdetails = user.USER_DETAILS;
  localStorage.setItem(userdetails, JSON.stringify(details));
};

const getUser = () => {
  const userdetails = user.USER_DETAILS;
  return JSON.parse(localStorage?.getItem(userdetails)) || null;
};

export { saveUser, getUser };
