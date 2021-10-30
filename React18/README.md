# React 18 先行

## Selective Hydration

Hydration: 前端內容送達後，讓 React 重新掌控的過程

React 17: 必須一步完成，無法對某部分做 hydrate (Waterfall) 無法處理 Interaction
React 18 (Selective Hydration): 

1. 結合 Suspense
2. 透過 chunk 把 inline script 送至前端，讓 inline script 把 spinner 換成內容再把內容 hydrate

## Concurrent ~~Mode~~ → Features <!-- Optional -->

## Transition

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

## `<SuspenseList>`

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
