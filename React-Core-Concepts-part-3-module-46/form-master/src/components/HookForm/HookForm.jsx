import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  /* 
      // * 1. return hisebe array korlam eta ekta niyom
  const [name, handleNameChange] = useInputState("Rojoni hooked");
  const handleSubmit = (e) => {
    console.log("form data", name);
    e.preventDefault();
  };
 */

  //  * 2. return hisebe object korlam eta abar arekta niyom
  const emailState = useInputState("rojoni@sojoni.go");
  // console.log(emailState);

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
