import React from 'react'
import Router from 'react-router'
const Link = Router.Link;

export const Div1 = React.createClass({
  render() {
    return (
        <div>div1</div>
    )
  }
});

export const Div2 = React.createClass({
  render() {
    return (
        <div>div2</div>
    )
  }
});

export const Div3 = React.createClass({
  render() {
    return (
        <div>
          <div>div3</div>
          <Link to="div1">Link-Div2(div3 component)</Link><br />
        </div>
    )
  }
});