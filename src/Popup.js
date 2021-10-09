import React, { Component } from 'react';
import './Popup.css'

class Modal extends Component {

    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.onHide();
        }
    }

    render() {
        return (
            <div className={this.props.show ? "blurbox display" : "blurbox no-display"}>
                <div className="box" ref={this.wrapperRef}>
                    {this.props.components}
                </div>
            </div>
        );    
    }
}

export default Modal;