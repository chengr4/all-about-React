# Notes

## Hooks API Reference

- [x] [useState](#usestate)
- [ ] [useRef](#useref)
- [ ] [useCallback](#usecallback)

### useState

```javascript
const [state, setState] = useState(initialState);

setState(newState); // 1. update the state 2. en-queue a re-render of the component
```

If the new `state` is computed using the previous `state`, you can pass a function to `setState` (fucntional updates) 

> If your update function returns the exact same value as the current state, the subsequent rerender **will be skipped** completely
> `initialState` can be provided a function instead
> 如果你使用與目前 state 相同值來更新 State Hook，React 將會跳過子 component 的 render 及 effect 的執行

### useRef

1. `useRef` is like a “box” that can hold a mutable value in its `.current` property.
2. `useRef` does not cause the component to re-render when it gets changed (vs. `useState`)

#### A Common use case: Click the button to focus `input` tag

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    // inputEl.current = <input value>
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### When to Use

### useCallback

## References

1. [Web Dev Simplified; 5 Custom React Hooks You Need In Every Project (2021.9)](https://youtu.be/0c6znExIqRw)
2. https://github.com/WebDevSimplified/useful-custom-react-hooks
3. [Web Dev Simplified; Save Hours Of Work With These 5 Custom React Hooks (2021.9)](https://youtu.be/vrIxu-kfAUo)
4. [Web Dev Simplified; Learn useRef in 11 Minutes (2020.6)](https://youtu.be/t2ypzz6gJm0)
5. [黃玄; React without memo (2021.12)](https://youtu.be/lGEMwh32soc)
