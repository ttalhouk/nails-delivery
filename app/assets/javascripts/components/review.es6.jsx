class Review extends React.Component {
  render () {
    return (
      <div>
        <div>Review: {this.props.review}</div>
      </div>
    );
  }
}

Review.propTypes = {
  review: React.PropTypes.object
};
