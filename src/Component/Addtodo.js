import React from "react";

const Addtodo = props => {
  const { value, todo, handleChange, handleSubmit } = props;
  return (
    <div>
      <form
        action=""
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          onChange={e => {
            handleChange(e);
          }}
          value={value}
          type="text"
          name="Asah"
          placeholder="BIRO"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addtodo;
