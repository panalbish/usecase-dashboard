import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

function renderHTMLBody(body) {
  return { __html: body };
}

function UseCaseListItem(props) {
  return (
    <div>
      <Card>
        <CardTitle title={props.usecase.title} />
        <CardText>
          <p
            dangerouslySetInnerHTML={renderHTMLBody(props.usecase.body)}
          />
        </CardText>
      </Card>
      <br />
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
