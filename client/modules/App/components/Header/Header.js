import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id="switchLanguage" /></li>
          {languageNodes}
        </ul>
      </div>
      <div className={styles.content}>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddUseCase}><FormattedMessage id="addUseCase" /></a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object
};

Header.propTypes = {
  toggleAddUseCase: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

export default Header;
