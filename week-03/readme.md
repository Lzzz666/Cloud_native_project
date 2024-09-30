# Week-03

## A. AWS
### 什麼是 AWS Region, AZ (availability zones)
AWS Region:  
每個 Region 皆設計為與其他 Region 隔離，不跨區複寫，可達到最高的容錯能力與穩定性。


AZ:  
每個 Region 擁有多個隔離位置，稱為可用區域(AZ)。可用區域(AZ)的代碼為其區域代碼，後續跟著一個字母識別符。例如：us-east-1a。  
此方法也提升了容錯的能力，確保在單一 AZ 出現狀況下，有其他的 AZ 能夠即時上線。

### 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？
我會選擇 ap-northeast-1 (東京)，原因:
1. 離我們比較近的 region 有 東京、新加坡、香港、中國 -> 地域性 (離較近延遲較低)
2. 中國因為有權限問題無法提供限制範圍外的區域存取，所以只剩 東京、新加坡、香港 -> 權限問題
3. chatGPT 說 香港的 EC2 等費用較高，雖然查不到資料，但暫且相信，所以選擇剩下 東京、新加坡
4. 最後，我喜歡日本，所以我選東京
## B. Callback 練習


## C. 建立 Express 專案
1. 觀察 package.json 的變化:
   - 當安裝 express 時，npm 會自動將 express 添加到你的 package.json 檔案的 dependencies 中並且標示版本，代表現在專案依賴於 express。
2. 觀察 node_modules 裡面有什麼:
   - npm 會在專案中創建或更新 node_modules 資料夾，並在其中放入 express 及依賴的所有模組。node_modules 裡的內容：express/ 資料夾：這是你剛剛安裝的 express 庫。依賴項：express 依賴於其他模組，比如 body-parser, cookie-parser, debug, http-errors, 等。這些依賴會自動安裝並存放在 node_modules 中。

## D. 分組

|系級|姓名|備註|
|------|------|------|
|資工碩二|管漢程|組長|
|資工碩一|陳昶安|
|資工碩一|劉鎮宇|
|資管碩一|楊凱旭|
