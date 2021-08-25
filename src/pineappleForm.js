import React, { useState } from "react";

const PineappleForm = () => {
  const [name, setName] = useState("");
  let [sliced, setSliced] = useState("unsliced");
  let [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
    e.preventDefault();
  };

  const handleSlice = (e) => {
    let slicer = e.target.value ? "sliced" : "unsliced";
    setSliced(slicer);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return !submitted ? (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className="label">
        Send Pineapple to those you{" "}
        <span role="img" aria-label="heart-letter">
          💌
        </span>
      </label>
      <br />
      <label htmlFor="name">Pineapple Ordered For:</label>
      <br />
      <input type="text" onChange={handleName}></input>
      <br />
      <label htmlFor="sliced">Check box for sliced pineapple</label>
      <br />
      <input type="radio" onClick={handleSlice}></input>
      <br />
      <input type="submit" value="Submit Form" onSubmit={handleSubmit} />
    </form>
  ) : (
    <div className="confirmation-message">
      A Pineapple has Been Ordered for {name} and it will arrive {sliced}
    </div>
  );
};

export default PineappleForm;
