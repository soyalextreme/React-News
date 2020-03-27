import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

/// Personal Hooks
import useSelect from "../hooks/useSelect";

const Form = ({ setCategory }) => {
  const OPCION = [
    { value: "general", name: "General" },
    { value: "business", name: "Negocios" },
    { value: "entertainment", name: "Entretenimiento" },
    { value: "health", name: "Salud" },
    { value: "science", name: "Ciencia" },
    { value: "technology", name: "Tecnologia" },
    { value: "sports", name: "Depotes" }
  ];

  const [categoria, Select] = useSelect("general", OPCION);

  const handleSubmit = e => {
    e.preventDefault();
    setCategory(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col-sm-12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra noticas por categoria</h2>
          <div className="input-field col s12">
            <Select />
            <input
              className={`waves-effect ${styles.btnBlock} btn-large amber darken-2`}
              type="submit"
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategory: PropTypes.func.isRequired
};

export default Form;
