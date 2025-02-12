import PropTypes from "prop-types";
import styles from "./nav.module.css";
export function Nav({ title }) {
  return <div className={styles.nav}>🍔{title}</div>;
}
Nav.propTypes = {
  title: PropTypes.string.isRequired,
};
