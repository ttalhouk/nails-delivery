class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false){
      return null
    }
    let modalComponent = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998'

    }

    return (
      <div
        style={modalComponent} className="product-modal">
        <div
          style={modalStyle}
          className="modal--content" >
          {this.props.children}
        </div>
        <div
          className="modal--backdrop"
          style={backdropStyle} onClick={this.props.onClose()}>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool,
  onClose: React.PropTypes.func
};
