import styles from "./Input.module.css";
const Input = ({ type = "text", className, ...rest }) => {
  return (
    <input
      type={type}
      {...rest}
      className={className ? styles.input + " " + className : styles.input}
    />
  );
};
export default Input;
