import { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import "./formStyles.css"

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [classCode, setClassCode] = useState("");

  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await addUser({
      variables: {
        username,
        password,
        email,
        classCode,
      },
    });
    Auth.login(data.addUser.token);
    console.log("success")
    // console.log(data.login.token)

  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
          required
        />
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required
        />
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
        />
        <input
          name="classCode"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
          placeholder="Class Code"
          type="classCode"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
