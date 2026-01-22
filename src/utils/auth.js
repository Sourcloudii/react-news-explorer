import { checkResponse } from "./api";

// add parameters later
export const authorize = () => {
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  }).catch(checkResponse);
};

export const checkToken = () => {
  return new Promise((resolve) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fakeid" },
    });
  }).catch(checkResponse);
};
// add password later
export const register = (email, username) => {
  return new Promise((resolve) => {
    resolve({ data: { email, username, _id: "fakeid" } });
  }).catch(checkResponse);
};
