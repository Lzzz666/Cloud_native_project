# Backend 

## package.json 中的 dependencies 與 devDependencies 分別是什麼
官方說法:
> "dependencies": Packages required by your application in production. (這個產品要用甚麼套件)  
> "devDependencies": Packages that are only needed for local development and testing. (開發或測試的過程要用到甚麼套件)

就像是說有些套件你只有開發的時候要使用就可以只放在 devDependencies，可以把測試跟開發的套件與要上線使用的套件分開!  
怎麼用? 
透過 
```
$ npm i --save express // 可以觀察到 express 放在 dependencies
```
```
$ npm i --save-dev express  //可以觀察到 express 放在 devDependencies  
```

## package.json 中的 scripts 這個區塊怎麼用？
- 透過 package.json 的 scripts 可以設定自己的快捷指令
- 例如:
```
"scripts":{
  "start": "node index.js" 
}
```
```
npm start //之後要啟動專案就可以直接使用
```


## Port number 要怎麼以環境變數來設定？

## 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

## 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

進階題:
- [localhost](http://localhost) 是什麼？
- `curl` 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？
