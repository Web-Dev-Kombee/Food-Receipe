import PropTypes from "prop-types";
import styles from "./container.module.css";

export function Container({ children }) {
  return (
    <div className={styles.parentContainer}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
