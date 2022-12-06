import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QuestionPage from "../components/question/QuestionPage";
import UserPage from "../components/user/UserPage";
import QuestionList from "../components/question/QuestionList";
import QuestionDetails from "../components/question/QuestionDetails";
import AddQuestion from "../components/question/AddQuestion";
import SignIn from "../components/user/SignIn";
import SignUp from "../components/user/SignUp";
import About from "../components/About";
import Resources from "../components/Resources";
import { UserAuthContextProvider } from "../components/UserAuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/index.css";

const AppRouter = () => {
  return (
    <Router>
      <UserAuthContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="questions" element={<QuestionPage />}>
            <Route path=":questionId" element={<QuestionDetails />} />
            <Route
              path="add-question"
              element={
                <ProtectedRoute>
                  <AddQuestion />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="user" element={<UserPage />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="about" element={<About />}></Route>
          <Route path="resources" element={<Resources />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer></Footer>
      </UserAuthContextProvider>
    </Router>
  );
};

export default AppRouter;
