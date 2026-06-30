# 協作留言 — 一次性設定指引

整套只需設定一次，之後所有提案簡報共用。分兩部分：**A. Google 留言後端**、**B. Cloudflare Pages 審稿託管**。

---

## A. Google 留言後端（試算表 + Apps Script）

1. 開瀏覽器到 **sheets.new** 建一張新試算表，命名「**提案簡報留言**」。
2. 上方選單 **擴充功能 → Apps Script**，會開啟程式編輯器。
3. 把本資料夾的 **`Code.gs`** 內容**全部貼上**（取代原本的空白內容），按 **儲存**（💾）。
4. 右上 **部署 → 新增部署作業**：
   - 齒輪「選取類型」→ **網頁應用程式**
   - 說明：`留言後端`
   - **執行身分：我（你的帳號）**
   - **誰可以存取：知道連結的任何人**
   - 按 **部署**，第一次會要你 **授權**（選你的 Google 帳號 → 進階 → 前往…（不安全）→ 允許）。
5. 複製畫面上的 **「網頁應用程式」網址**（長得像 `https://script.google.com/macros/s/XXXX/exec`）。
   - 這就是 **endpoint**。把它交給 Claude，會填進簡報設定 `EZC.endpoint`。
6. 之後若修改 `Code.gs`，要重新「部署 → 管理部署作業 → 編輯 → 版本：新版本 → 部署」才會生效。

> 之後每份新簡報都用**同一個 endpoint**，不必重做這段；不同簡報靠 `EZC.deckId`（各自取一個唯一代號，如 `projectA-v1`）區分。

---

## B. Cloudflare Pages 審稿託管（讓同事用網址看 + 留言）

1. 到 **dash.cloudflare.com** 註冊／登入（免費）。
2. 左側 **Workers & Pages → Create → Pages → Upload assets**。
3. 取一個專案名稱（如 `projectA-review`）。
4. 把**整包簡報資料夾**（務必含 `material/`、`design directions/` 與審稿版 HTML）**拖進上傳區**上傳。
5. 部署完成後會給一個 **`https://xxxx.pages.dev`** 網址。把這個網址分享給同事，他們**點開就能在瀏覽器看簡報、開啟「💬 註解模式」留言**，不用下載。
6. 簡報內容有更新時，回到該專案 → **Create new deployment** 重新拖拉上傳即可。

> ⚠️ **審稿網址不要給客戶。** 客戶版請用乾淨檔另外交付（見 SKILL.md「產出客戶版」）。

---

## 驗證後端是否正常（拿到 endpoint 後）

在終端機執行（把 `<endpoint>` 換成你的網址）：

```bash
# 1) 空查詢應回傳 []
curl -s "<endpoint>?deckId=test"

# 2) 新增一則，再查詢應看到「第一則」
curl -s -L -X POST "<endpoint>" -H "Content-Type: text/plain" \
  --data '{"action":"add","deckId":"test","slideId":"s1","author":"測試","text":"第一則"}'
curl -s "<endpoint>?deckId=test"
```
