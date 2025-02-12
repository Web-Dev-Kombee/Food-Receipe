import styles from "./innerContainer.module.css";
import PropTypes from "prop-types";

export function InnerContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}

InnerContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
