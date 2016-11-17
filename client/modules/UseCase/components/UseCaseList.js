import React, { PropTypes } from 'react';

// Import Components
import UseCaseListItem from './UseCaseListItem/UseCaseListItem';

function UseCaseList(props) {
  return (
    <div className="listView">
      {
        props.usecases.map(usecase => (
          <UseCaseListItem
            usecase={usecase}
            key={usecase._id}
          />
        ))
      }
    </div>
  );
}

UseCaseList.propTypes = {
  usecases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    milestones: PropTypes.array
  })).isRequired
};

export default UseCaseList;
