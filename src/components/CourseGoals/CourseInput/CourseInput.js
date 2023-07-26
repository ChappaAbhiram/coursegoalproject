import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const[validbutt,setValidbutt]=useState(true);
  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
      setValidbutt(true);
    }
    setEnteredValue(event.target.value);
  };
  const buttonChangeHandler=(event)=>{
    event.preventDefault();
    if(enteredValue.trim().length === 0){
    setValidbutt(false);
      return;
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setValidbutt(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}` }>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" val={validbutt} onSubmit={buttonChangeHandler}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
