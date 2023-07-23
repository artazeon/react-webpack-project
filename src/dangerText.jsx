import React from 'react';

import styles from './style.css';

function DangerText({ text }) {
  return <p className={styles.title}>{text}</p>;
}

export default DangerText;