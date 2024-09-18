# Git 指令介紹

### blob
記錄檔案的內容。 當 git add 檔案時，就會產生一個 blob 物件。這個物件會紀錄檔案的內容(透過 SHA-1)，但不會紀錄檔名。
### tree
git commit 时，Git 會根據當前工作目錄的狀態創建一棵樹，儲存特定目錄下的所有資訊，包含該目錄下的檔名、對應的 blob 物件名稱、檔案連結、或其他 tree 物件等等。
```
git cat-file -p <tree_hash>
```
##### 舉例:
```
project/
│
├── file1.txt
└── dir/
    └── file2.txt
```
project 目錄會有一個 tree object，它包含兩個項目：一个指向 file1.txt 的 blob object，另一个指向 dir 目录的 tree object。
dir 目錄也会有一个 tree object，它指向 file2.txt 的 blob object。

    
### commit
用來記錄有哪些 tree 物件包含在版本中，一個 commit 物件代表著 Git 的一次提交，記錄著特定提交版本有哪些 tree 物件、以及版本提交的時間、紀錄訊息等等，通常還會記錄上一層的 commit 物件名稱 (只有第一次 commit 的版本沒有上層 commit 物件名稱。

```
git commit -m "Added new feature"
```
創建一個新的 commit object，它保存了以下信息：
- 指向當前文件結構的 tree object。
- 引用上一個提交的 commit object（如果有）。
- 提交信息 "Added new feature"。
- 作者和提交者的名字、油箱、時間。


```
git cat-file -p <commit_hash>  #查看 commit object 內容
```

```
tree d8329fc1cc938780ffdd9f94e0d364e0ea74f579 #這次提交的目錄結構
parent e1c12220d2342d71a3a46b0543791ef75b862142 #上一次提交的 hash 值(如果有)
author John Doe <john@example.com> 1625580626 -0500  #提交者的訊息
committer John Doe <john@example.com> 1625580626 -0500 #提交者的訊息

Added new feature #提交訊息
```



### branch
用來管理不同的版本線的工具。
```
git branch <branch_name>  #創建 branch 但並未切換過去
```

```
git checkout <branch_name> #切換過去該 branch
```

```
git branch #查看 branch 資料
```

```
git branch -d <branch_name> #刪除 branch
```

```
git checkout main  # 切換到主分支
git merge <branch_name>  # 合併其他分支
```

Git 保存的不是變更集或者差異內容，而是一系列快照。
Git 分支其實只是一個指向某提交的可移動輕量級指標， Git 預設分支名稱是 main (之前是 master)， 隨著不斷地製作提交，main 分支會為你一直指向最後一個提交， 它在每次提交的時候都會自動向前移動。



### head
指向當前所在的分支，Git 透過 Head 知道你目前在哪個分支上工作。

執行
```
git branch test  #創建 branch，Head 依然指向 main，仍然在 main 分支上工作。
```

```
git checkout test #切換過去該 branch，Head 指向 test，開始在 test 上工作。
```

### git repo 的過程中 .git 檔案裡的變化

一開始：
```
git init
```
之後檔案夾裡的結構為:
```
Kevin-git-practice/
│
├── .
├── ..
└── ./git
        ├── HEAD
        ├── config
        ├── description
        ├── hooks
        ├── info
        ├── refs
        └── objects
```
當新增一個 hello.py，並且：
```
git add .
```
Git 是將變更的檔案添加到 .git/index（也稱為 stage 或暫存區）中。這個 index 檔案會記錄檔案的檔案路徑、檔案內容的 hash（稱為 blob），以及這些檔案在下一次提交時應包含的狀態。

之後提交：
```
git commit -m "feat: Added new feature" 
```
在 .git/objects/ 中創建新的 Blob、Tree、Commit 物件。
最後會發現， .git 裡多了 COMMIT_EDITMSG 跟 logs，並且 index 和 objects 檔案有被更新過。  

假設我們要建立一個分支：
```
git branch test-branch 
```
這時 .git 檔案裡的資訊尚未被更新。  
當我們切換過去後：
```
git checkout test-branch 
```
可以發現檔案夾裡面 index 與 HEAD 被更新過了，此時 HEAD 會指向當前分之。


### commit message 怎麼寫比較好? 有什麼 style 嗎?
> 目的是要講清楚，說明白你在幹嘛!!!

以下參考: https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html
參照國外 AngularJS 團隊的規範，Commit Message 規範組成：
##### Header: <type>(<scope>): <subject>
- type: 代表 commit 的類別：feat, fix, docs, style, refactor, test, chore，必要欄位。
- scope 代表 commit 影響的範圍，例如資料庫、控制層、模板層等等，視專案不同而不同，為可選欄位。
- subject 代表此 commit 的簡短描述，不要超過 50 個字元，結尾不要加句號，為必要欄位。

##### Body: 
- Body 部份是對本次 Commit 的詳細描述，可以分成多行，每一行不要超過 72 個字元。
- 說明程式碼變動的項目與原因，還有與先前行為的對比。

##### Footer: 
- 填寫任務編號（如果有的話）
- BREAKING CHANGE（可忽略），記錄不兼容的變動，
   以 BREAKING CHANGE: 開頭，後面是對變動的描述、以及變動原因和遷移方法。


##### (補充) type 只允許使用以下類別：
feat: 新增/修改功能 (feature)。  
fix: 修補 bug (bug fix)。  
docs: 文件 (documentation)。  
style: 格式 (不影響程式碼運行的變動 white-space, formatting, missing semi colons, etc)。 
refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。  
perf: 改善效能 (A code change that improves performance)。  
test: 增加測試 (when adding missing tests)。  
chore: 建構程序或輔助工具的變動 (maintain)。  
revert: 撤銷回覆先前的 commit 例如：revert: type(scope): subject (回覆版本：xxxx)。  

