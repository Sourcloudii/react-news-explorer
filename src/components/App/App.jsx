import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { apiKey } from "../../utils/constants.js";
import { getNewsData } from "../../utils/newsApi.js";
import { getToken, setToken, removeToken } from "../../utils/token.js";
import { CurrentUserContext } from "../../context/currentUserContent.js";
import * as auth from "../../utils/auth.js";
import * as api from "../../utils/api.js";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => e.key === "Escape" && handleCloseModal();

    document.addEventListener("keydown", handleEscClose);

    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  useEffect(() => {
    const tkn = getToken();
    if (tkn) {
      auth
        .checkToken()
        .then((res) => {
          setIsLoggedIn(true);
          setUser(res.data);
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    api
      .getItems()
      .then((data) => setSavedArticles(data))
      .catch(console.error);
  }, [isLoggedIn]);

  const handleSearchSubmit = (query) => {
    setIsLoading(true);
    getNewsData(query, apiKey)
      .then((res) => {
        const articleKeyword = res.articles.map((article) => ({ ...article, keyword: query }));
        setArticles(articleKeyword);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLoginModalSubmit = ({ email, password }) => {
    if (!email || !password) return;

    auth
      .authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          return auth.checkToken(data.token);
        }
      })
      .then((res) => {
        setIsLoggedIn(true);
        setUser(res.data);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleRegisterModalSubmit = ({ email, username, password }) => {
    if (!email || !username || !password) return;

    auth
      .register({ email, username, password })
      .then(() => {
        return auth.authorize({ email, password });
      })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          return auth.checkToken(data.token);
        }
      })
      .then((res) => {
        setIsLoggedIn(true);
        setUser(res.data);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleSaveArticle = (article) => {
    api
      .saveArticle(article, user._id)
      .then((savedArticle) => {
        setSavedArticles((prevArticles) => [...prevArticles, savedArticle]);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (articleId) => {
    api
      .deleteArticle(articleId, user._id)
      .then(() => {
        setSavedArticles((prevArticles) => prevArticles.filter((article) => article._id !== articleId));
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    setUser({});
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuState(!menuState);
    handleCloseModal();
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
    setModalState(true);
    setMenuState(false);
  };
  const handleLoginModal = () => {
    setActiveModal("login");
    setModalState(true);
    setMenuState(false);
  };
  const handleCloseModal = () => {
    setActiveModal("");
    setModalState(false);
  };

  return (
    <CurrentUserContext.Provider value={{ isLoggedIn, user }}>
      <div className="page">
        <div className="page__content">
          <Header
            handleLoginModal={handleLoginModal}
            handleLogout={handleLogout}
            setMenuState={setMenuState}
            menuState={menuState}
            modalState={modalState}
            toggleMenu={toggleMenu}
            location={location.pathname}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleSearchSubmit={handleSearchSubmit}
                  articles={articles}
                  isLoading={isLoading}
                  handleSaveArticle={handleSaveArticle}
                  handleDeleteArticle={handleDeleteArticle}
                  location={location.pathname}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute>
                  <SavedNews
                    savedArticles={savedArticles}
                    handleDeleteArticle={handleDeleteArticle}
                    location={location.pathname}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <LoginModal
            onClose={handleCloseModal}
            onOrClick={handleRegisterModal}
            activeModal={activeModal === "login"}
            handleLogin={handleLoginModalSubmit}
          />
          <RegisterModal
            onClose={handleCloseModal}
            onOrClick={handleLoginModal}
            activeModal={activeModal === "register"}
            handleRegister={handleRegisterModalSubmit}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
