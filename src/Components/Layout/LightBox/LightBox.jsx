import Container from "../Container/Container";
import styles from "./LightBox.module.css";
const LightBox = ({ children, closeLightBox }) => {
  const { LightBox } = styles;
  return (
    <>
      <div onClick={closeLightBox} className={LightBox}></div>
      <Container
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "0.8rem",
          zIndex: "3",
          position: "absolute",
          width: "40%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </Container>
    </>
  );
};
export default LightBox;
