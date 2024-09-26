import { useState } from "react";

const StatefullForm = () => {
  const [name, setName] = useState("Rojoni Klanto");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // console.log("form");
    e.preventDefault();
    if (password.length < 6) {
      setError("Passowrd must be 6 characters or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
    // console.log(name, email, password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    // eita hocche ekta field eta form na
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="pasword"
          required
        />
        <br />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
export default StatefullForm;
