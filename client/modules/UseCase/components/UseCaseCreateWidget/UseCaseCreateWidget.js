import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './UseCaseCreateWidget.css';

export class UseCaseCreateWidget extends Component {
  addUseCase = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addUseCase(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddUseCase ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create New UseCase</h2>
          <input placeholder="Title" className={styles['form-field']} ref="title" />
          <textarea placeholder="Body" className={styles['form-field']} ref="content" />
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
