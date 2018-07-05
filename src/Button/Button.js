import React, { Component } from 'react'
import classes from "./Button.css"

class Button extends Component {

  render() {
    console.log('classes', classes)
    console.log('props', this.props)
    let btnClass = `${classes.btn}`
    if (this.props.mode === 'warning') btnClass += ` ${classes.warning}`
    if (this.props.mode) btnClass += ` ${classes[`${this.props.mode}`]}`
    return (
        <button className={btnClass}>{this.props.text}</button>
    )
  }
}

export default Button