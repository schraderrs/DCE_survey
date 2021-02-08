import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import questionOne from "../formQuestions/questionsOne";

const MySurvey = () => {
  return <Survey.SurveyWindow isExpanded={true} json={questionOne} />;
};

export default MySurvey;
