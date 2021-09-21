# Notes

## useRef

1. `useRef` is like a “box” that can hold a mutable value in its `.current` property.
2. `useRef` does not cause the component to re-render when it gets changed (vs. `useState`)

### A Common use case: Click the button to focus <input>

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

## References

1. [Web Dev Simplified; 5 Custom React Hooks You Need In Every Project (2021.9)](https://youtu.be/0c6znExIqRw)
2. https://github.com/WebDevSimplified/useful-custom-react-hooks
3. [Web Dev Simplified; Save Hours Of Work With These 5 Custom React Hooks (2021.9)](https://youtu.be/vrIxu-kfAUo)
4. [Web Dev Simplified; Learn useRef in 11 Minutes (2020.6)](https://youtu.be/t2ypzz6gJm0)
