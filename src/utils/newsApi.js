import { checkResponse } from "./api";

export const getNewsData = (query, apiKey) => {
  const toDate = new Date().toISOString().slice(0, 10);
  const fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const newsApiBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://nomoreparties.co/news/v2/everything"
      : "https://newsapi.org/v2/everything";

  return fetch(
    `${newsApiBaseUrl}?from=${fromDate}&to=${toDate}&q=${encodeURIComponent(
      query
    )}&sortBy=relevancy&language=en&apiKey=${apiKey}`
  ).then(checkResponse);
};
