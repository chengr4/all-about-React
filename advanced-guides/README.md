# Advanced Guides
# Notes

+ [JSX In Depth](#jsx-in-depth)
+ [Typechecking With PropTypes](#typechecking-with-proptypes)
+ [Code-Splitting](#code-splitting)
+ [Context](#context)
+ [Uncontrolled Component](#uncontrolled-component)
+ [Higher-Order Components](#higher-order-components)
+ [Refs and the DOM](#refs-and-the-dom)
+ [Forwarding Refs](#forwarding-refs)

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

> Principle of `Suspense`:  
> Use `Promise`  
> Promise 是狀態機 Pending -> Fulfill or Reject  

```javascript
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  // The lazy component should then be rendered inside a Suspense component
  return (
    <div>
      <ErrorBoundary> // <- Rejected
      <Suspense fallback={<div>Loading...</div>}> // <- Pending
        <OtherComponent /> // <- Resolved
      </Suspense>
      </ErrorBoundary>
    </div>
  );
}
```

> 1. The `fallback` prop accepts any React elements that you want to render while waiting for the component to load
> 2. Wraping multiple lazy components with a single Suspense component is possible

> From React 18 Suspense 可以在 SSR (Server-Side Rendering) 使用

#### Error boundaries

### References

1. [Code Splitting](https://create-react-app.dev/docs/code-splitting/)
2. [The Future of React: 18 and Beyond](https://hackmd.io/@JSDC-tw/2021conference/%2FbJrOFuCZQQioW7k6LarlOw#Session-1-The-Future-of-React-18-and-Beyond)

## Context

+ Clean and easy way to share `state` between components

### When to Use Context?

1. Your data can be considered "global" for a tree of React components, 
2. E.g. Current authenticated user, Theme, Preferred language etc

### Basic Usage

```javascript
import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }
  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;
```

### References

1. [The Net Ninja; React Context & Hooks Tutorial (2019.6)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)

## Uncontrolled Component

> In a controlled component, form data is handled by a React component, while in a uncontrolled components, form data is handled by the DOM itself.

E.g.

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Higher-Order Components

## Refs and the DOM

E.g.

```jsx
// in Class Component
class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }
  
  
  
  render() {
    return (
      <div>
        {/* ref points to the input DOM node */}
        <input type="text" ref={this.inputRef}>
      </div>
    )
  }
}
```

在某些情況下，想使用 props 以外的方式更改 child component (The child to be modified could be 1. an instance of a React component or 2. it could be a DOM element)

> Version > 16.3: Use `React.createRef()`   
> Version < 16.3: Use `callback ref`    

### When to Use Refs?

There are a few good use cases for refs:

- Managing focus, text selection (選擇文字), or media playback (播放影音)
- Triggering imperative animations (觸發即時動畫)
- Integrating with third-party DOM libraries (E.g. ????)

> Avoid using refs for anything that can be done declaratively.
> For example, instead of exposing `open()` and `close()` methods on a `Dialog` component, pass an `isOpen` prop to it.

### Accessing Refs

Ref 的值會根據節點的類型而有所不同:

- When the `ref` attribute is used on an **HTML element**, the ref created in the constructor with `React.createRef()` receives the underlying DOM element as its `current` property. (`ref.current` = 此 HTML element)

> React 會在 component mount 的時候將 DOM element 賦值到 `current` 屬性，並在 unmount 時將它清空回 `null`。`ref` 的更新發生在生命週期 `componentDidMount` 或 `componentDidUpdate` 之前

- When the `ref` attribute is used on a custom class component, the `ref` object receives the mounted instance of the component as its `current`. ()

> You may not use the ref attribute on **function components** because they don’t have instances.

### References

1. [Codevolution; ReactJS Tutorial - 28 - Refs (2019.01)](https://youtu.be/FXa9mMTKOu8)

## Forwarding Refs

Forwarding Refs 是一種自動把 `ref` 從一個 component 傳遞到它底下的其中一個 child 的技巧。

```javascript
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
