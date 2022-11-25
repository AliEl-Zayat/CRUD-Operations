import styles from "./Button.module.css";
const Button = ({ children, onClick, className, variant, ...rest }) => {
  const { btn } = styles;
  return (
    <button
      onClick={onClick}
      className={
        className
          ? `${btn} ${className} ${variant ? styles[variant] : null}`
          : `${btn} ${styles[variant]}`
      }
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
