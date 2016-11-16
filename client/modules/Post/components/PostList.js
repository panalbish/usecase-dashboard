import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.usecases.map(usecase => (
          <PostListItem
            usecase={usecase}
            key={usecase._id}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  usecases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    milestones: PropTypes.array,
  })).isRequired,
};

export default PostList;
