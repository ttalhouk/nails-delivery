class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm:false
    }
  }
  componentWillMount(){
    console.log('mounted');
  }

  handleFormSubmit(reviewData) {
    console.log(reviewData);

    // ajax request to review create route
  }

  renderReviews() {
    return this.props.reviews.map((review) => {
      return(
        <Review key={review.id} review={review} />
      );
    });
  }

  renderReviewForm() {
    if (this.state.openForm) {
      return (
        <ReviewForm
          handleSubmit={this.handleFormSubmit.bind(this)}
          />
        )
    } else {
      return undefined;
    }
  }

  handleOpenForm(){
    console.log(this.state);
    this.setState({openForm: !this.state.openForm});
  }


  render () {
    return (
      <div className='page--review-section'>
        <button
          onClick={this.handleOpenForm.bind(this)}
          className="button button--action">
          {this.state.openForm ? "Close" : "Leave a Review"}
        </button>

        {this.renderReviewForm()}

        {this.renderReviews()}
      </div>
    );
  }
}

ReviewList.propTypes = {
  product: React.PropTypes.object,
  user: React.PropTypes.object,
  reviews: React.PropTypes.array
};
