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

## Forms

Basic Usage:

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
Three common tags: `<input>`, `<textarea>`, `<select>`

### Handling Multiple Inputs

```javascript
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

### Alternatives to Controlled Components

When

1. not wanting to write an event handeler
2. convering a pre-existing codebase to React
3. integrating a React application woth a non-React library

check out `uncontrolled components` [2]

### Related Topics

1. [ES6 computed property name syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)
2. [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
3. [Formik](https://formik.org/)

## Lifting State Up

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor
