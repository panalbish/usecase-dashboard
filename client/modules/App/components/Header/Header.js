import React, { PropTypes } from 'react';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.content}>
      {
        context.router.isActive('/', true)
          ? <a className={styles['add-usecase-button']} href="#" onClick={props.toggleAddUseCase}>Add UseCase</a>
          : null
      }
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object
};

Header.propTypes = {
  toggleAddUseCase: PropTypes.func.isRequired
};

export default Header;
