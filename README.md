# All about React

## Finished Topics

### Main Concepts

- [x] [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [x] [Handling Events](https://reactjs.org/docs/handling-events.html)
- [x] [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [x] [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [x] [Forms](https://reactjs.org/docs/forms.html)
- [ ] [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [x] [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [ ] [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Advanced Guides

- [x] [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [ ] [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [x] [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [ ] [Context](https://reactjs.org/docs/context.html)

### API Reference

- [ ] [React Top-Level API](https://reactjs.org/docs/react-api.html)
- [ ] [React.Component](https://reactjs.org/docs/react-component.html)

### Hooks

- [ ] [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## Q and A

### Q: What causes the component re-render?

A:

1. The `state` changes
2. There comes new `props` [4]

## 未整理 or 未理解

### Selective Hydration

Hydration: 前端內容送達後，讓 React 重新掌控的過程

React 17: 必須一步完成，無法對某部分做 hydrate (Waterfall) 無法處理 Interaction
React 18 (Selective Hydration): 

1. 結合 Suspense
2. 透過 chunk 把 inline script 送至前端，讓 inline script 把 spinner 換成內容再把內容 hydrate

## Concurrent ~~Mode~~ → Features <!-- Optional -->

### Transition

> React 18? (not sure)

讓急迫的先做

```javascript
import { startTransition } from 'react';

// high priority
// Show What was typed
setInputValue(input);

startTransition(() => {
    // low priority
    // Show the results
    setSearchQuery(input);
})
```

### `<SuspenseList>`

- Before 圖片載入慢，且不同步
- After: `revealOrder` 可以控制顯示順序
    

```jsx=
<SuspenseList revealOrder="forward" />
```

### Data fetching

- Lifecycle 一致
- 推出不容易
    - 還需要一段時間
- 會在之後的 React 18.x 推出

    
## Server Components
    
- Next.js 12 有提供相關的實作
- 實驗中
    
![](https://i.imgur.com/qcDIkZl.png)

Co-locate - 讓測試與 Style 緊貼 Component
    

在 Server 一次處理完！

- 以前：Server (Data) -> Client (React -> Render)
- 現在：Server (Data -> React) -> Client (Render)
- Component 在 Server 上，把查詢做完

### Advantage

- 可以減少 bundle size
    - 明顯減少 30% bundle size
        ![](https://i.imgur.com/fGzuEOR.png)
- 可以接觸 File system
    - 防止越權存取
- 更早載入的自動 Code Splitting
    ![](https://i.imgur.com/vJ7vwcm.png)

### Disadvantage

- 非同步得依循 React 的做法

## References

1. https://reactjs.org/
2. https://chengr4.medium.com/react-%E7%AD%86%E8%A8%98-8b8a39e86655
3. [Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
4. https://github.com/uberVU/react-guide/issues/17#issuecomment-305106051
5. https://hackmd.io/@JSDC-tw/2021conference/%2FbJrOFuCZQQioW7k6LarlOw
