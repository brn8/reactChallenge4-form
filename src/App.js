import "./styles.css";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [usernamebool, setUsernameBool] = useState(null);
  const [namebool, setNameBool] = useState(null);
  const [agebool, setAgeBool] = useState(null);

  const handlerUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlerName = (e) => {
    setName(e.target.value);
  };
  const handlerAge = (e) => {
    setAge(e.target.value);
  };
  const handlerSubmit = (e) => {
    console.log(age);
    if (username == "") {
      setUsernameBool(true);
    } else {
      setUsernameBool(false);
    }
    if (name == "") {
      setNameBool(true);
    } else {
      setNameBool(false);
    }
    if (age == "" || age == null) {
      setAgeBool(true);
    } else {
      setAgeBool(false);
    }

    e.preventDefault();
  };
  return (
    <form onSubmit={handlerSubmit}>
      <label>Username: </label> <br />
      {usernamebool ? (
        <input
          type="text"
          style={{ border: "1px solid red" }}
          onChange={handlerUsername}
        />
      ) : (
        <input type="text" onChange={handlerUsername} />
      )}
      <br />
      <p />
      <label>Full Name: </label> <br />
      {namebool ? (
        <input
          type="text"
          style={{ border: "1px solid red" }}
          onChange={handlerName}
        />
      ) : (
        <input type="text" onChange={handlerName} />
      )}
      <br /> <p />
      <label>Age: </label> <br />
      {agebool ? (
        <input
          type="number"
          style={{ border: "1px solid red" }}
          onChange={handlerAge}
        />
      ) : (
        <input type="number" onChange={handlerAge} />
      )}{" "}
      <br /> <p />
      <button>Submit</button>
      {usernamebool != null &&
      agebool != null &&
      namebool != null &&
      !usernamebool &&
      !agebool &&
      !namebool ? (
        <div>
          <h2>Request send to DB with below request data</h2>
          <ul>
            <li>UserName: {username}</li>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
