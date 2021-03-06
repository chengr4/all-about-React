# All about React

https://reactjs.org/

- [MAIN CONCEPTS](./main-concepts)
- [ADVANCED GUIDES](./advanced-guides)
- [hooks](./hooks)
- [API REFERENCE](./api-reference)
- [React Testing](./react-testing)
- [TypeScript with React](https://github.com/chengr4/all-about-TS/tree/main/react)

## Core Ideas

1. We typically want to perform our effects after React has updated the DOM => put side effects into `componentDidMount` and `componentDidUpdate` or `useEffect`.

> In stateless component, `return()` runs before `useEffect()`

2. Props are Read-Only

## Finished Topics

### Main Concepts

> GO TO [MAIN CONCEPTS](./main-concepts)

- [x] [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [x] [Handling Events](https://reactjs.org/docs/handling-events.html)
- [x] [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [x] [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [x] [Forms](https://reactjs.org/docs/forms.html)
- [ ] [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [x] [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [ ] [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Advanced Guides

> GO TO [ADVANCED GUIDES](./advanced-guides)

- [x] [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [ ] [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [x] [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [ ] [Context](https://reactjs.org/docs/context.html)
- [ ] [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [ ] [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)
- [x] [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)
- [x] [Refs and the DOM (before Callback Refs)](https://reactjs.org/docs/refs-and-the-dom.html)
- [ ] [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)

### API Reference

> GO TO [API REFERENCE](./api-reference)

- [ ] [React Top-Level API](https://reactjs.org/docs/react-api.html)
- [ ] [React.Component](https://reactjs.org/docs/react-component.html)

### Hooks

> GO TO [hooks](./hooks)

- [x] [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [ ] [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## Q and A

### Q: What causes the component re-render?

A:

1. The `state` changes
2. There comes new `props` [4]

## Unknown Prop Warning

> https://reactjs.org/warnings/unknown-prop.html

1. ??????????????? parent component ??????(interpret) ??? `props`???forward ??? child component

## ????????? or ?????????

### Topic to Read

- [?????? useEvent ????????????????????????](https://medium.com/@anokyy/%E7%82%BA%E4%BD%95useevent%E6%98%AF%E5%80%8B%E7%B3%9F%E7%B3%95%E7%9A%84%E6%96%B9%E6%A1%88-%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%9C%A8%E9%80%99-de7fc2e509e8)

## References

1. https://reactjs.org/
2. https://chengr4.medium.com/react-%E7%AD%86%E8%A8%98-8b8a39e86655
3. [Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
4. https://github.com/uberVU/react-guide/issues/17#issuecomment-305106051
5. https://hackmd.io/@JSDC-tw/2021conference/%2FbJrOFuCZQQioW7k6LarlOw
