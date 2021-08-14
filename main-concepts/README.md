# Notes

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
  
## Handling Events

**Syntax differences between DOM and React:**

1. React events are named using **camelCase**, rather than lowercase.
2. With JSX you pass a function as the event handler, rather than a string.
3. 3. In React, you must use `e.preventDefault();` to prevent default behavior

```html
// html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

```jsx
// in React
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

If you refer to a method without `()` after it, such as:

```javascript
handleClick() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

render() {
  return (
    <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}
```

you should bind that method:

```javascript
constructor(props) {
  super(props);
  this.state = {isToggleOn: true};

  // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handleClick.bind(this);
}
```

### Related Topics

1. [SyntheticEvent](https://reactjs.org/docs/events.html)
2. [Ben Howdle; Understanding JavaScript bind() (2014.1)](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

