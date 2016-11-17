import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import UseCaseList from '../../components/UseCaseList';
import UseCaseCreateWidget from '../../components/UseCaseCreateWidget/UseCaseCreateWidget';

// Import Actions
import { addUseCaseRequest, fetchUseCases } from '../../UseCaseActions';
import { toggleAddUseCase } from '../../../App/AppActions';

// Import Selectors
import { getShowAddUseCase } from '../../../App/AppReducer';
import { getUseCases } from '../../UseCaseReducer';

class UseCaseListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUseCases());
  }

  handleAddUseCase = (title, body, milestones = []) => {
    this.props.dispatch(toggleAddUseCase());
    this.props.dispatch(addUseCaseRequest({ title, body, milestones }));
  };

  render() {
    return (
      <div>
        <UseCaseCreateWidget addUseCase={this.handleAddUseCase} showAddUseCase={this.props.showAddUseCase} />
        <UseCaseList handleDeleteUseCase={this.handleDeleteUseCase} usecases={this.props.usecases} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
UseCaseListPage.need = [() => { return fetchUseCases(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddUseCase: getShowAddUseCase(state),
    usecases: getUseCases(state)
  };
}

UseCaseListPage.propTypes = {
  usecases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    milestones: PropTypes.array.isRequired
  })).isRequired,
  showAddUseCase: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

UseCaseListPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps)(UseCaseListPage);
