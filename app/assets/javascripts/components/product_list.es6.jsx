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
        <p>
          {this.state.statusMessage}
        </p>
      )
    } else if (this.state.errorMessage){
      return (
        <p>
          {this.state.errorMessage}
        </p>
      )
    }
    return
  }
  statusClass() {
    if (this.state.statusMessage){
      return 'status-message--success';
    } else if (this.state.errorMessage){
      return 'status-message--error';
    }
    return 'status-message--close';
  }


  render () {
    return (
      <div className='product--list'>
        <div className='product-list--header'>
          <h2 className='product-list--title'>Available Products</h2>
          <SearchBar
          handleSearch={() => this.handleSearch.bind(this)} searchTerm={this.state.searchTerm} />
        </div>
        <div className={`status-message ${this.statusClass()}`}>
          { this.renderMessages() }
        </div>
        <FlipMove
          className='product-list--showcase'
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
