import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './UseCaseCreateWidget.css';

export class UseCaseCreateWidget extends Component {
  addUseCase = () => {
    const titleRef = this.refs.title;
    const bodyRef = this.refs.body;
    if (bodyRef.value && titleRef.value) {
      this.props.addUseCase(titleRef.value, bodyRef.value);
      bodyRef.value = titleRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddUseCase ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create New UseCase</h2>
          <input placeholder="Title" className={styles['form-field']} ref="title" />
          <textarea placeholder="Body" className={styles['form-field']} ref="body" />
          <a className={styles['usecase-submit-button']} href="#" onClick={this.addUseCase}>Add</a>
        </div>
      </div>
    );
  }
}

UseCaseCreateWidget.propTypes = {
  addUseCase: PropTypes.func.isRequired,
  showAddUseCase: PropTypes.bool.isRequired
};

export default UseCaseCreateWidget;
