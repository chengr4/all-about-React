# Notes

## Useful hooks



## Using the Effect Hook

> - Similar to `componentDidMount` and `componentDidUpdate`, but effects scheduled with `useEffect` don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects **don’t need to happen synchronously**.
> - The effect cleanup phase happens after every re-render, and not just once during unmounting. This design helps us create components with fewer bugs.

E.g.

```javascript
// effects require cleanup
useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
});
```

**What does useEffect do? **

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

## Hooks API Reference

- [x] [useState](#usestate)
- [x] [useRef](#useref)
- [x] [useMemo](#usememo)
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

> `useRef()` 和自建一個 `{current: ...}` object 的唯一不同是，useRef 在每次 render 時都會**給你同一個的 ref object。**

#### When to Use

1. When wanting to save previous value

### useMemo

1. useMemo 只會在 dependancy 改變時才重新計算 memoized 的值
2. 傳到 useMemo 的 function 會在 render 期間執行，所以不要做一些通常不會在 render 期間做的事情。例如，處理 side effect （屬於 useEffect，而不是 useMemo）。

### useCallback

## References

1. [Web Dev Simplified; 5 Custom React Hooks You Need In Every Project (2021.9)](https://youtu.be/0c6znExIqRw)
2. https://github.com/WebDevSimplified/useful-custom-react-hooks
3. [Web Dev Simplified; Save Hours Of Work With These 5 Custom React Hooks (2021.9)](https://youtu.be/vrIxu-kfAUo)
4. [Web Dev Simplified; Learn useRef in 11 Minutes (2020.6)](https://youtu.be/t2ypzz6gJm0)
5. [黃玄; React without memo (2021.12)](https://youtu.be/lGEMwh32soc)
6. [Web Dev Simplified; Learn useMemo In 10 Minutes (2020.6)](https://youtu.be/THL1OPn72vo)
