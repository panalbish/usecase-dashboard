import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import UseCaseList from '../../components/UseCaseList';
import UseCaseCreateWidget from '../../components/UseCaseCreateWidget/UseCaseCreateWidget';

// Import Actions
import { addUseCaseRequest, fetchUseCases, deleteUseCaseRequest } from '../../UseCaseActions';
import { toggleAddUseCase } from '../../../App/AppActions';

// Import Selectors
import { getShowAddUseCase } from '../../../App/AppReducer';
import { getUseCases } from '../../UseCaseReducer';

class UseCaseListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUseCases());
  }

  handleDeleteUseCase = usecase => {
    if (confirm('Do you want to delete this usecase')) { // eslint-disable-line
      this.props.dispatch(deleteUseCaseRequest(usecase));
    }
  };

  handleAddUseCase = (name, title, content) => {
    this.props.dispatch(toggleAddUseCase());
    this.props.dispatch(addUseCaseRequest({ name, title, content }));
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
