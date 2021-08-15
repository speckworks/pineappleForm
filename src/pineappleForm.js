import React, { useState } from "react";

const pineappleForm = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <label for="sendMe">Send Pineapple</label>
      <br />
      <label for="name">Name:</label>
      <input type="text"></input>
      <input type="radio"></input>
    </form>
  );
};

export default pineappleForm;
