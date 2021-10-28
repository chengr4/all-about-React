# Advanced Guides
# Notes

+ [JSX In Depth](#jsx-in-depth)
+ [Typechecking With PropTypes](#typechecking-with-proptypes)
+ [Code-Splitting](#code-splitting)

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
    ```javascript
    import PropTypes from 'prop-types';

    class MyComponent extends React.Component {
      render() {
        // This must be exactly one element or it will warn.
        const children = this.props.children;
        return (
          <div>
            {children}
          </div>
        );
      }
    }

    MyComponent.propTypes = {
      children: PropTypes.element.isRequired
    };
    ```
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

## Code-Splitting

### Dynamic import

```javascript
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

When Webpack comes across this syntax, it **automatically** starts code-splitting your app. If you’re using `Create React App`, this is already configured for you.

### React.lazy

> [I think this feature can only be used after React v16.6](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)

```javascript
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  // The lazy component should then be rendered inside a Suspense component
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}> 
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

> 1. The `fallback` prop accepts any React elements that you want to render while waiting for the component to load
> 2. Wraping multiple lazy components with a single Suspense component is possible

#### Error boundaries

### References

1. [Code Splitting](https://create-react-app.dev/docs/code-splitting/)
