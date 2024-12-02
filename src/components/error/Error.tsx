import React from 'react';
import styles from './error.module.css';

type ErrorProps = {
  text?: string;
};

export const Error = ({ text = 'Ops... Something went wrong' }: ErrorProps) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <strong className={styles.errorHeader}>Error!</strong>{' '}
        <span className={styles.errorText}>{text}</span>
      </div>
    </div>
  );
};
