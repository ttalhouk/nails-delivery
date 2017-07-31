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
    return (
      <ReviewForm
        handleSubmit={this.handleFormSubmit.bind(this)}
        openForm={this.state.openForm}
        />
      )
    //
    // if (this.state.openForm) {
    //   return (
    //     <ReviewForm
    //       handleSubmit={this.handleFormSubmit.bind(this)}
    //       openForm={this.state.openForm}
    //       />
    //     )
    // } else {
    //   return (<div className="review--form closed"></div>);
    // }
  }

  handleOpenForm(){
    this.setState({openForm: !this.state.openForm});
  }


  render () {
    return (
      <div className='page--review-section'>
        <div className='review'>
          <button
            onClick={this.handleOpenForm.bind(this)}
            className="button button--action">
            {this.state.openForm ? "Close" : "Leave a Review"}
          </button>
          <div className={`review--form__transition ${this.state.openForm ? "open": "closed"}`} >            
            {this.renderReviewForm()}
          </div>

          {this.renderReviews()}
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  product: React.PropTypes.object,
  user: React.PropTypes.object,
  reviews: React.PropTypes.array
};
