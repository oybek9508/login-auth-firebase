import React, { useState, useRef } from "react";

function UseRef() {
  const [name, setName] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
    </>
  );
}

export default UseRef;
