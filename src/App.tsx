import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import Classes from "./components/Classes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import { useAppContext } from "./contexts/AppContext";
import CheckOut from "./components/CheckOut";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/classes"
        element={
          <Layout>
            <Classes />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/user" />
          ) : (
            <Layout>
              <Login />
            </Layout>
          )
        }
      />
      <Route
        path="/register"
        element={
          isLoggedIn ? (
            <Navigate to="/user" />
          ) : (
            <Layout>
              <Register />
            </Layout>
          )
        }
      />
      <Route
        path="/user"
        element={
          isLoggedIn ? (
            <Layout>
              <User />{" "}
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/checkout"
        element={
          isLoggedIn ? (
            <Layout>
              <CheckOut />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
