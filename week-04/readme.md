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
> reverse proxy（反向代理）: 代理 client 端，server 端不知道真實的 client 是誰。 A 想傳訊息給 C 不想讓 C 知道 A 自己是誰，透過 Forward proxy B 代傳， (A) -> B -> C。
> forward proxy（正向代理）: 代理 server 端，client 端不知道真實的 server 是誰。 A 想向 B 要資料（作業），但 B 丟委託給 C 做，然後 B 再丟給 A， A <- B <- (C)。
6. 在 readme 中提供步驟 9 的 Nginx 設定檔  
> 
7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
> 
8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
> sudo(Super User Do)，主要是需要使用到根目錄使用者權限的，Super User 在這裡就是指電腦管理員的意思，也就是擁有這台電腦的最高權限。有些操作會對系統資源或配置文件有影響時就需要使用 sudo，一些操作只涉及使用者自己的檔案或目錄，或者不涉及系統層級的改動，就不需要使用 sudo。
9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
>
10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
> 在設定 AWS 的時候不太清楚所謂的 key pair 等等是在幹嘛
> 使用 nginx 時，少了設定 location 的步驟導致連線失敗
> 之前已經安裝好的 node 突然呼叫不到，也確定環境變數已經新增還是沒有辦法使用，後來發現是因為我是使用 fnm 安裝，因為沒有將fnm 的環境變數設置好，所以導致 node 無法使用。
> 
11. 列出完成本作業時參考的資料
> https://yhtechnote.com/linux-sudo/
> https://medium.com/tsungs-blog/day21-%E4%BB%80%E9%BA%BC%E6%98%AFproxy-c0f2892297d0
> https://medium.com/learn-or-die/%E5%A5%BD-pm2-%E4%B8%8D%E7%94%A8%E5%97%8E-fc7434cc8821
> https://www.explainthis.io/zh-hant/swe/why-nginx
> https://docs.aws.amazon.com/zh_tw/ec2/?icmpid=docs_homepage_featuredsvcs
12. (optional) 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看
>

- Linux 檔案目錄結構，觀看影片 [Linux Directories Explained in 100 Seconds](https://www.youtube.com/watch?v=42iQKuQodW4)  或其他資料，試著回答:
    - /etc 是什麼的縮寫？這裡通常都放哪些檔案？
    - /var 這裡通常都放哪些檔案？
    - /boot 這裡通常都放哪些檔案？
    - $PATH 環境變數的作用是什麼？
    - `which` 指令的作用？
