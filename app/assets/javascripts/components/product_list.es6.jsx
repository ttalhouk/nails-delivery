class ProductList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      statusMessage: '',
      errorMessage: ''
    }
  }

  handleSearch(e){
    const searchTerm = e.target.value;
    this.setState({searchTerm: searchTerm});
  }

  renderProduct() {
    return this.props.products
      .filter((product) => {
        return product.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1 || product.description.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
      })
      .map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            updateMessage={(message) => { this.updateStatusMessage(message)}}/>
        )
      })
  }

  updateStatusMessage(message){
    if (message.error) {
      this.setState({errorMessage: message.error})
    }
    this.setState({statusMessage: message.success});

    setTimeout(()=>{
      this.setState({errorMessage: '', statusMessage: ''})
    }, 10000)

  }
  renderMessages(){
    if (this.state.statusMessage){
      return (
        <div className="status-message--success">
          {this.state.statusMessage}
        </div>
      )
    } else if (this.state.errorMessage){
      return (
        <div className="status-message--error">
          {this.state.errorMessage}
        </div>
      )
    }
    return
  }


  render () {
    return (
      <div className='product--list'>
        <SearchBar
          handleSearch={() => this.handleSearch.bind(this)} searchTerm={this.state.searchTerm} />
        { this.renderMessages() }
        <FlipMove
          duration={500}
          easing="ease-out">
          {this.renderProduct()}
        </FlipMove>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: React.PropTypes.array
};
