class ProductList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch(e){
    const searchTerm = e.target.value;
    this.setState({searchTerm: searchTerm});
  }

  renderProduct() {
    return this.props.products
      .filter((product) => {
        return product.name.indexOf(this.state.searchTerm) !== -1 || product.description.indexOf(this.state.searchTerm) !== -1
      })
      .map((product) => {
        return (
          <Product key={product.id} product={product} />
        )
      })
  }

  render () {
    return (
      <div className='product--list'>
        <SearchBar
          handleSearch={() => this.handleSearch.bind(this)} searchTerm={this.state.searchTerm} />
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
