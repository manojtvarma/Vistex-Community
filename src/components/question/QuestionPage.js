import React from "react";
import QuestionList from "./QuestionList";
import useFetch from "../useFetch";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const QuestionPage = (props) => {
  const { data: questions, isPending, error } = useFetch("questions");
  const location = useLocation();

  return (
    <div>
      {location.pathname == "/questions" && (
        <QuestionList
          questions={questions}
          isPending={isPending}
          error={error}
        />
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default QuestionPage;
