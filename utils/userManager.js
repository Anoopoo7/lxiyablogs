import user from "./user.json";

const saveUser = (details) => {
  const userdetails = user.USER_DETAILS;
  localStorage.setItem(userdetails, JSON.stringify(details));
};

const getUser = () => {
  const userdetails = user.USER_DETAILS;
  if(typeof localStorage !== "undefined"){
    return JSON.parse(localStorage?.getItem(userdetails)) || null;
  }
  return {};
};

export { saveUser, getUser };
