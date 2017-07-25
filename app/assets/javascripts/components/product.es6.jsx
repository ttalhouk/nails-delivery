class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    console.log('in closeModal');
    this.setState({isModalOpen: false});
  }


  render () {
    const {id, name, description, stock, url} = this.props.product
    const price = numeral(this.props.product.price).format('$0,0.00')
    // add modal
    return (
      <div className= "product--list-item">
          <div onClick={this.openModal.bind(this)} className="product--list-item-link">
            <h2>{name}</h2>
            <img src={url} alt={`${name} image`}/>
          </div>

        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal.bind(this)}>
          <div onClick={this.closeModal.bind(this)}>[X]</div>
          <h2>{name}</h2>
          <img src={url} alt={`${name} image`}/>
          <p>{description}</p>
          <p>Qty in Stock: {stock}</p>
          <p>{price}</p>
          <button onClick={this.handleAddToCart}>Add to Cart</button>
        </Modal>
      </div>
    );
  }
}

Product.propTypes = {
  product: React.PropTypes.object
};
