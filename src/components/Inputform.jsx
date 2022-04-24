import "./form.css";
import { useState } from "react";
export const Inputform = () => {
  const [formData, setformData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    married: "",
  });
  const handleEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/employees", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Enter Your Name:
          <input
            type="text"
            placeholder="Your name"
            name="name"
            onChange={handleEvent}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={handleEvent}
          />
        </label>
        <label>
          Address:{" "}
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleEvent}
          />
        </label>

        <label>
          Department:
          <select
            name="department"
            placeholder="Department"
            onChange={handleEvent}
          >
            <option defaultValue="webdeveloper">Web Developer</option>
            <option value="androiddeveloper">Android Developer</option>
            <option value="data analyist">Data analyist</option>
            <option value="uiux developer">UI UX Developer</option>
          </select>
        </label>
        <label>
          Salary:{" "}
          <input
            type="number"
            placeholder="salary"
            name="salary"
            onChange={handleEvent}
          />
        </label>

        <label>
          <span> Marital Status:</span>
          <input
            type="checkbox"
            name="married"
            value="married"
            onChange={handleEvent}
          />
        </label>

        <input type="submit" value="Submit" onChange={handleEvent} />
      </form>
    </div>
  );
};
