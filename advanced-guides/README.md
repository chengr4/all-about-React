# Advanced Guides
# Notes

## JSX In Depth

### Spread Attributes

If `props` is an object, use “spread” operator (`...`) to pass the whole `props` object.

```javascript
// Component App1 == Component App2
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

## Typechecking With PropTypes

> Note:  
> `React.PropTypes` has moved into a different package since `React v15.5`. Please use the [prop-types library instead.](https://www.npmjs.com/package/prop-types)  
> React core team provides also [a codemod script](https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactproptypes) to automate the conversion.

E.g.

```javascript
// Class Components
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

// Function Components
import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
}

export default HelloWorldComponent
```

> For performance reasons, propTypes is only checked in development mode.

### More than just Typechecking

1. Requiring Single Child (不太確定)
2. Default Prop Values
    ```javascript
    class Greeting extends React.Component {
      render() {
        return (
          <h1>Hello, {this.props.name}</h1>
        );
      }
    }

    // Specifies the default values for props:
    Greeting.defaultProps = {
      name: 'Stranger'
    };

    // Renders "Hello, Stranger":
    ReactDOM.render(
      <Greeting />,
      document.getElementById('example')
    );
    ```
