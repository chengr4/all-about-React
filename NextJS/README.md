# All About Next.js 

## Considerations for using Next.js

1. 有 SEO 需求
2. 舊有的 SEO 遇到瓶頸
3. 團隊有足夠的能量 refactor
4. 團隊有足夠的能量維護新的 server
5. 想要有更好的 Developer Experience

## Some Issues before Next.js

### React 沒有解決的問題

前提緊要：
![](https://i.imgur.com/rA5BYdj.png)

但有些網站內容變化很快，仍需要用 SSR!

實作 SSR 會需要注意的問題：

- React Hydrate / Dehydrate
- renderToString
- Page Routing
- 整合 redux: 必須讓 server-side 知道 redux 的 state 狀態
- 以及 styled-components 的載入時機

![](https://i.imgur.com/Sz6HnMW.png)

### 圖片優化問題

1. 不可能在手機上載入 2000x2000 的圖片
2. 新格式 WebP (30% smaller than JPEG) + AVIF，支援性問題
3. 圖片是否能預先載入
4. 是否能延遲載入圖片

### Code Splitting 

![](https://i.imgur.com/BhsDE3X.png)

- 只載入每個頁面需要的資源
- 實作
    - Webpack SplitChunkPlugin
    - Dynamic import

## How Next.js Resolve Issues?

### Next.js 可以在不同的頁面混用不同的設計

![](https://i.imgur.com/HkG8y17.png)

### Incremental Static Regeneration

![](https://i.imgur.com/rVyaQvX.png)

## Some Features

### File-Based Routing

> vs. Code-based routing (react-router)

![](https://i.imgur.com/onE7KY7.png)

Advantage: 不會把 code 跟 routing 的邏輯混在一起

## References

1. [為什麼許多公司都願意導入 Next.js (2021.11)](https://hackmd.io/@JSDC-tw/2021conference/%2FOMXdYdetSa6p275qTiUlNQ)
