import { checkResponse } from "./api";

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  }).catch(checkResponse);
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fakeid" },
    });
  }).catch(checkResponse);
};
