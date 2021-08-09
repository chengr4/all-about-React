# Note

[The Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Lifecycle Methods

### `constructor`

Typically, in React constructors are only used for two purposes:

+ Initializing local state by assigning an object to `this.state`.
+ Binding event handler methods to an instance.

> Avoid introducing any **side-effects** or **subscriptions** in the constructor. For those use cases, use `componentDidMount()` instead.

### `componentDidMount()`

+ Initialization that requires DOM nodes should go here

> If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

+ This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in `componentWillUnmount()`.
