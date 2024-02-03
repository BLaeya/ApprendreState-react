import React from "react";

const Form = ({ handleChange }) => {
  return (
    <form>
      <label htmlFor="selectColor">Choisissez la couleur: </label>
      <select id="selectColor" onChange={handleChange}>
        <option value=" non définie">--Veuillez faire un choix--</option>
        <option value=": Blanc">Blanc</option>
        <option value=": Bleu">Bleu</option>
        <option value=": Noir">Noir</option>
        <option value=": Rouge">Rouge</option>
        <option value=": Vert">Vert</option>
      </select>
    </form>
  );
};

export default Form;
