import React, { PropTypes } from 'react';

// Import Style
import styles from './UseCaseListItem.css';

function UseCaseListItem(props) {
  return (
    <div className={styles['single-usecase']}>
      <h3 className={styles['usecase-title']}>
        {props.usecase.title}
      </h3>
      <p className={styles['usecase-desc']}>{props.usecase.body}</p>
      <hr className={styles.divider} />
    </div>
  );
}

UseCaseListItem.propTypes = {
  usecase: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    milestones: PropTypes.array.isRequired
  }).isRequired
};

export default UseCaseListItem;
