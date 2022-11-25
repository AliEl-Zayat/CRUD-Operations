import styles from "./ButtonGroup.module.css";
const ButtonGroup = ({ children, full }) => {
  const { fullBtn, ButtonGroup } = styles;
  return (
    <div className={`${ButtonGroup} ${full ? fullBtn : null}`}>{children}</div>
  );
};
export default ButtonGroup;
