import React from "react";
import Button from "./Button";
// import Tasks from "./Tasks";

//This is a component created using arrow function, we pass the Default Props destruturing as paramater using single curly brackets!

/* //Same with the Button PROPS we call them but in this case we declare them in the file we created the Button COMPONENT!(line 17) */

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
};

//Default Props Syntax: call the component's name.defaultProps
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
