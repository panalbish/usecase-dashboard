import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';

// Import Actions
import { toggleAddUseCase } from './AppActions';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddUseCaseSection = () => {
    this.props.dispatch(toggleAddUseCase());
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <div>
            <Helmet
              title="UseCase Test Project"
              titleTemplate="%s - Test Project"
              meta={[
                { charset: 'utf-8' },
                {
                  'http-equiv': 'X-UA-Compatible',
                  content: 'IE=edge'
                },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1'
                }
              ]}
            />
            <Header
              toggleAddUseCase={this.toggleAddUseCaseSection}
            />
            <div className={styles.container}>
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);
