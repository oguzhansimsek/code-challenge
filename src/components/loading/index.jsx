import React from 'react';

import { Spinner } from 'react-bootstrap';

import styles from './styles.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
