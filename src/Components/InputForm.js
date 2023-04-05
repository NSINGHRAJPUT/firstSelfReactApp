import { useState } from "react";
import "./InputForm.css";
import User from "./User";
let dummyData = [];
const InputForm = () => {
  const [dta, setDta] = useState(dummyData);
  let name, age;
  const nameChangeHandler = (e) => {
    name = e.target.value;
  };
  const ageChangeHandler = (e) => {
    age = e.target.value;
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let obj = { name: `${name}`, age: `${age}` };
    console.log(obj);
    setDta((preData) => {
      return [obj, ...preData];
    });
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="container">
          <div className="brand-title">Add Users</div>
          <div className="inputs">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={nameChangeHandler}
            />
            <label>Age</label>
            <input
              type="number"
              placeholder="Age"
              min="18"
              max="100"
              onChange={ageChangeHandler}
            />
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
      <div>
        <User userData={dta}></User>
      </div>
    </div>
  );
};

export default InputForm;
