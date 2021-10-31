# All About Next.js 

## React 沒有解決的問題

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
- 過大，浪費流量
- 新格式 WebP + AVIF，支援性問題
- 圖片預先載入
- 延遲載入
    - 不載入不在 viewport 的圖片
    - 設定圖片的 width 與 height

## References

1. [為什麼許多公司都願意導入 Next.js (2021.11)](https://hackmd.io/@JSDC-tw/2021conference/%2FOMXdYdetSa6p275qTiUlNQ)
