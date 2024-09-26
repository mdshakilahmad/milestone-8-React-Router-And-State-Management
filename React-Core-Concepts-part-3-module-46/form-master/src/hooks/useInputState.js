import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  /* 
    // * 1. return hisebe array korlam eta ekta niyom
  const handleChange = (e) => {
    // setValue(e);
    setValue(e.target.value);
  };

  return [value, handleChange];
   */

  //  * 2. return hisebe object korlam eta abar arekta niyom
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
};

export default useInputState;
