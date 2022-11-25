import styles from "./Container.module.css";
const Container = ({ children, style }) => {
  const { container } = styles;
  return (
    <div className={container} style={style}>
      {children}
    </div>
  );
};
export default Container;
