# Notes

## State and Lifecycle

`lifecycle methods`:

+ `componentDidMount()`: Run after the component output has been rendered to the DOM.

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

## Lists and Keys

Usually, we need a "key" when creating lists of elements.

### Keys

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

**Attibutes**

1. string
2. unique
3. Use item index, only if items have no stable IDs
  ```javascript
  const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index}>
      {todo.text}
    </li>
  );
  ```
4. Keys serve as a hint to React but they **don’t** get passed to your components.  
 
### Wrong and correct way to extract Components with Keys

Wrong:

```javascript
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
 
Correct:

```javascript
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
 
### Related Topics

1. [in-depth explanation about why keys are necessary](https://reactjs.org/docs/reconciliation.html#recursing-on-children)
