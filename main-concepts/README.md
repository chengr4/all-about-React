# Note

## State and Lifecycle

`lifecycle methods`:

+ `componentDidMount()`: runs after the component output has been rendered to the DOM.

### Notice

1. The only place where you can assign `this.state` is the constructor.
2. `setState` is better to put a function as an argument:
  
  ```javascript

  // Not good
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
  
  // better
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
  ```
