# Week-04

1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中  
> 18.183.189.149  
2. 什麼是 instance type?  
> 虛擬器的硬體配置，包括 cpu、memory、網路等等  
3. 什麼是 Nginx？有哪些用途與特性？  
> 是一個網頁伺服器，能做到 反向代理、負載均衡、http 快取。因為增加了 proxy 的概念，所以可以增加網站負載和網站速度。
4. pm2 套件是什麼？有什麼用處？
> node 的程序管理器，提供監控、自動重新啟動、負載均衡等功能。
5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
> proxy 中文翻成代理，有點像是 server 跟 client 之間的中間人，他可以幫助我們站存一些資料，當 client 要向 server 要資料的時候，就會先問 proxy 有沒有，另外也可以幫忙分配流量，達到加速、負載等等的功能。
> 
6. 在 readme 中提供步驟 9 的 Nginx 設定檔  
> 
7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
> 
8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
> 
9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
>
10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
>
11. 列出完成本作業時參考的資料
>
12. (optional) 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看
>

- Linux 檔案目錄結構，觀看影片 [Linux Directories Explained in 100 Seconds](https://www.youtube.com/watch?v=42iQKuQodW4)  或其他資料，試著回答:
    - /etc 是什麼的縮寫？這裡通常都放哪些檔案？
    - /var 這裡通常都放哪些檔案？
    - /boot 這裡通常都放哪些檔案？
    - $PATH 環境變數的作用是什麼？
    - `which` 指令的作用？
