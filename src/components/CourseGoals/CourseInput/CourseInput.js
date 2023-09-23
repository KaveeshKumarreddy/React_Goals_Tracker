import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    let newValue = event.target.value;
    setEnteredValue(newValue);
    newValue.length === 0 ? setIsValid(false) : setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    enteredValue.length > 0 ? props.onAddGoal(enteredValue) : setIsValid(false) ;
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']}`}>
        <label className={`${styles['form-label']} ${!isValid && styles.active}`} >Course Goal</label>
        <input
          type="text" className={`${styles['form-input']} ${!isValid && styles.active}`}
          onChange={goalInputChangeHandler} value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
