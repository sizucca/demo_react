import React from 'react'
import Router from 'react-router'
import {Div1, Div2, Div3} from './components'

const Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation;


export const App = React.createClass({
  render() {
    return (
        <div>
          <MyButton /><br />
          <Link to="div2">Link-Div2</Link><br />
          <Link to="div3">Link-Div3</Link><br />
          <hr />
          <RouteHandler />
        </div>
    )
  }
});

const MyButton = React.createClass({
  mixins: [Navigation],
  render() {
    return (
        <button onClick={() => this.transitionTo("div1") }>
          Jump To Div1!!!
        </button>
    )
  }
});


const routes = (
    <Route>
      <Route handler={App}>
        <Route name="div1" path="/div1" handler={Div1}/>
        <Route name="div2" path="/div2" handler={Div2}/>
        <Route name="div3" path="/div3" handler={Div3}/>
      </Route>
    </Route>
);


Router.run(routes, (Root) => {
  React.render(<Root />, document.body);
});
