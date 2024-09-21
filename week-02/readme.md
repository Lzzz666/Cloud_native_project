# Week-02  
## A. 環境準備

### 1. 安裝 node.js v20.17.0 
已安裝 node.js v20.17.0 版本，以下為選擇此版本之原因:
- 我為初期剛開發，不確定自己有什麼需求所以選擇 LTS 版本，較為穩定而以長期支持。
- 尚未找到組員，我預設大家會選擇比較新的 LTS 版本，所以與大家一樣比較不會出錯。   

安裝遇到的問題:
1. 在安裝時根據官網的 Package manager 指令安裝 如下
```
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```
遇到的問題是 在執行 `fnm env --use-on-cd | Out-String | Invoke-Expression` 時出現以下錯誤 `'Out-String' 不是內部或外部命令、可執行的程式或批次檔。`  後面發現因為我是使用 cmd 而不是使用 Windows 的 powershell，看來也要找時間去比摸熟一下這兩個的差別。

### 2. nvm vs npm

- nvm: Node Version Manager，主要作為版本管理工具，主要的功能有:
  - 版本管理: `nvm ls`, `nvm install`,`nvm version`
  - 更換版本: `nvm use`
  - 設定預設版本 `nvm alias default 20` (預設開啟為20版)
  - 允許在每個專案中使用不同的 Node.js 版本，提高專案之間的兼容性。

- npm: Node Package Manager，為套件管理系統，以下為官方文件給的使用情境...
  - Adapt packages of code for your apps, or incorporate packages as they are.
  - Download standalone tools you can use right away.
  - Run packages without downloading using npx.
  - Share code with any npm user, anywhere.
  - Restrict code to specific developers.
  - Create organizations to coordinate package maintenance, coding, and developers.
  - Form virtual teams by using organizations.
  - Manage multiple versions of code and code dependencies.
  - Update applications easily when underlying code is updated.
  - Discover multiple ways to solve the same puzzle.
  - Find other developers who are working on similar problems and projects.

在網路上很多人會開發套件分享給大家使用，npm 就是把工具套件都整理到同個地方供大家使用!   
但我認為最主要的功能還是 `npm install`

1. 在專案資料夾中 `npm install xxx`，npm 便會自動從 Registry 中尋找 xxx，取得最新版本，下載到專案中的 node_modules 資料夾。
2. 在專案中，也可以透過 package.json 列出需要的套件，安裝時只要透過 `npm install`，npm 就會根據 package.json 的內容下載套件。  
補充:
- npx:
   - npm 會永久存在本機的 node_modules，npx 臨時安裝，執行完後刪除
   - npx 可以直接執行 github 上的 repo


### B. Fibonacci

```
function fib(n){
  if(n < 0){
    return false;
  }
  if(n == 0){
    return 0;
  }
  if(n == 1){
    return 1;
  }
  return fib(n-1) + fib(n-2)
}
fib(0);
fib(1);
fib(5);
fib(10);
```

## C. Sum
```
// ary: number array
function sum(ary) {
  return ary.reduce((a,b)=>a+b)
}

console.log(sum([1, 5, 3, 2]));
```
挑戰題 1  
不考慮 foreach，我只想到其他 1 種寫法:
recursion
```
function sum(ary) {
  if(ary.length == 0){
    return 0;
  }
  return ary[0] + sum(ary.slice(1));
}

console.log(sum([1, 5, 3, 2])); 
```
挑戰題 2
```
// input n return 1+2+3+...+n 
function sum(n) {
  return ary.reduce((a,b)=>a+b)
}

console.log(sum(n)); 
```

## D. Stack
```
// stack.js
export default class Stack {
	// TODO: # 為 class 內的私有屬性。無法被外部存取
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
		this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
		return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    return this.#items[this.#items.length-1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return (this.#items.length) == 0 ? True : False;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    while(this.#items.length != 0){
        this.#items.pop();
    }
  }

  // 印出 stack 內容
  print() {
    for(let i = this.#items.length-1;i >= 0;i--){
        console.log(this.#items[i]);
    }
  }
}

```

```
// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 每個有實做到的函數都做測試，另外也要多假設幾種情況，例如：空陣列又被pop 等等，觀察是否溢位。
stack.push(5);
stack.push(8);
stack.push(89);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("stack isEmpty? " + stack.isEmpty());
console.log("peek:"+stack.peek());
stack.print();
stack.clear();
console.log("stack isEmpty" + stack.isEmpty());
```

