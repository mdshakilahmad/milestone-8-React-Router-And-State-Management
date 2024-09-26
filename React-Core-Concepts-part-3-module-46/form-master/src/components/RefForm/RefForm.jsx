import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus(); // focus() eta react eri ekta function eta dile focus hoye thakbe
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(nameRef);
    // console.log(nameRef.current);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input
          ref={emailRef}
          defaultValue={"rojoni@sojoni.com"}
          type="email"
          name="email"
          id=""
        />
        <br />
        <input ref={passwordRef} type="password" name="password" />
        <br />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
