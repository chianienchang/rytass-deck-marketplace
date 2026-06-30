---
name: building-proposal-decks
description: Use when the user wants to build an HTML presentation/slide deck — especially web design proposals (multiple style options with device-frame mockups), consulting decks, or any "做提案簡報 / HTML 簡報 / 網頁視覺提案 / 套版型出簡報 / 顧問簡報". Covers a fixed 1280×720 deck shell with scroll + presentation modes, PDF export, and a library of reusable slide types.
---

# 製作提案簡報（HTML Deck）

## 這是什麼

一套固定的 HTML 簡報系統，用來精準、可重複地產出專業提案簡報。外觀、互動（翻頁／裝置框內嵌真實網頁並自動縮放／捲動高亮／PDF 列印）已固定在 `template.html`，每次只變「內容」與「色票」。核心精神：**版面結構與程式碼鎖死，內容照頁型零件庫填入。**

主要用途：網頁視覺提案（多款風格並陳，展示頁**嵌入真實會動的網頁** live iframe）、顧問級提案／策略簡報。**只有最後的 SUMMARIZE 總覽比較頁用靜態截圖**，其餘展示一律嵌真實網頁。

## 製作流程（每次都照這個順序）

1. **先規劃，不要急著套版。** 讀 `consulting-structure.md`，依「結論先行 / 單一維度決策」幫使用者把整份簡報的**頁序與邏輯**規劃出來，並先問清楚：給誰看、希望對方做什麼決定、幾個方案、有無截圖、約幾頁。把頁序清單列給使用者確認。
   - **若無法與使用者互動**（例如被當成子代理委派、或使用者要求一次做完）：就依手上資訊自行假設合理頁序，**直接做**，並在交付時把「我做了哪些假設」列出來讓使用者覆核。不要因為問不到人就卡住。
2. **複製起始檔。** 以 `template.html` 為起點，複製一份到工作目錄（不要直接改 skill 內的原檔）。
3. **套頁型。** 依確認的頁序，從 `page-types.md` 複製對應頁型的 HTML，貼進 `slides-wrapper`，填入內容。
4. **換色票。** 主題色改 `template.html` 最上面 `:root` 的色票變數；三款風格各自的強調色改 `.s-a,.s-b,.s-c{--scheme:#...}`；個別頁要客製才用 `style="..."` 局部覆蓋。
5. **放內容。** 展示頁的 `iframe src` 指向**實際存在的網頁 HTML 檔**（相對路徑，空白寫成 `%20`）。封面照片放成 `material/cover-bg.jpg`、logo 放 `material/`。只有 SUMMARIZE 頁用靜態截圖（`<img src>` 相對路徑）。
6. **自我檢查後再交付**（見下方檢查清單）。

## 產製規範（每次做簡報時遵守）

- **素材自行處理**：使用者提供圖片時，無論是**圖檔（任意路徑）或網址連結**，一律由 Claude 自行處理——複製或下載到該簡報的 `material/`、依用途命名、並填入對應的 `src` / `background-image`。**不要求使用者自己放資料夾或命名**；只需請使用者說明「每張圖對應哪一頁／哪個位置」。
- **範本文案標示**：所有自動生成的占位文案，一律加註 `<!-- TODO: 替換為實際內容 -->`，方便辨識與替換。
- **文案置換用對照表**：需置換文案時，先整理一張對照表（欄位：位置 / 現有文案 / 建議文案 / 字數上限 / 備註），**請使用者確認後才套入**。使用者未提供內容時，依展示頁畫面推導，備註欄標「依展示頁推導」。
- **Logo 與客戶名重複**：放入 logo 後，詢問「logo 圖是否已含文字？若是，可隱藏封面下方客戶名避免重複」。
- **多風格強調色**：有多款風格時，詢問各款是否需要獨立強調色（用 `.s-a/.s-b/.s-c` 的 `--scheme` 設定）。
- **改動後驗證**：每次修改後主動「切簡報模式 → 跳到該頁 → 截圖確認」，不要求使用者下指令。

## 不可更動的部分（套版型的鐵則）

- **不要改** 投影片尺寸（1280×720）、CSS class 名稱、`<style>` 與 `<script>` 的內容。**唯一允許動的 CSS**：`.slide.s-cover` 那一行的封面照片 `url('material/cover-bg.jpg')`（或直接換同名照片檔）。
- 內容頁頁首用 `.page-header`（或 `.page-header compact`）內含 `.ph-top`（`.page-tag` + `.ph-zh` + `.page-num`）；展示頁另有 `.slide-footer`。封面 / 目錄 / 章節 / 設計方向 / 風格章節頁有各自的頁碼元素，不用 page-header。
- **頁碼**（`.page-num`、`.toc-num`、`.chap-num`、`.dirs-num`、`.sec-num`、頁尾右側）一律 `NN / 總頁數`，依實際順序更新，全份一致。
- 多款並陳時，**每款風格的展示頁順序必須一致**（首頁→總覽→詳情→文章…），且 `slide` 上掛對應的 `s-a/s-b/s-c`（單一維度決策）。
- 展示頁一律嵌真實網頁 live iframe；**只有 SUMMARIZE 用靜態截圖**。
- 顏色優先走 `:root` 與 `--scheme` 變數，不要在各頁硬寫一堆數值。

## 九種頁型（詳細 HTML 見 page-types.md）

| 頁型 | 用途 |
|------|------|
| 封面 COVER（s-cover） | 滿版照片 + 色帶 + logo（照片可抽換） |
| 目錄 TOC（s-toc） | 章節目錄 |
| 章節分隔 CHAPTER（chap） | 大英文標 + 中文章節名 |
| 產業洞察 CONTEXT（ctx2） | 一句導言 + 雙欄底色區 |
| 改版目標 OBJECTIVES（goals） | 四格目標卡 + 承上啟下列 |
| 設計方向 DIRECTIONS（s-dirs） | 三張大圖卡並陳 |
| 風格章節 SECTION（sec s-a/b/c） | 每款風格扉頁（名稱/標籤/三要點） |
| 展示頁 SHOWCASE（show-row）⭐ | 左說明 + 右裝置框嵌真實網頁 live iframe |
| 總覽比較 SUMMARIZE（compare） | 三欄靜態截圖 + 逐列比較 + 如何選 |

> 不是每份都要用滿九種；依 `consulting-structure.md` 規劃出的頁序挑用。典型頁序見 page-types.md 結尾。

## 交付前自我檢查清單

- [ ] 頁序符合「結論先行」，結尾有明確「下一步／要對方做的決定」
- [ ] 每張頁碼正確且連續，全份總頁數一致
  - 正確數投影片數量（避免被 `slides-wrapper`/`slide-footer` 等字串誤導）：
    `grep -cE '<div class="slide( |")' 你的檔.html` ←只會數到投影片（含 `s-cover`），不會把 `slides-wrapper` 算進去；數出的值就是總頁數，拿來核對所有 `NN / 總頁數`。
- [ ] 多案的頁型順序一致，只在約定維度上有差異
- [ ] 沒有更動尺寸、class 名稱、`<style>`/`<script>`（封面照片那一行除外）
- [ ] 展示頁的 `iframe src` 指向實際存在的網頁檔、路徑正確（空白用 `%20`）；SUMMARIZE 的 `<img src>` 與封面照片／logo 路徑正確
- [ ] 用瀏覽器打開過：一覽模式正常、切簡報模式可翻頁、裝置框內真實網頁有載入並縮放正確
- [ ] 色票一致（同一款風格的 `slide` 都掛對 `s-a/s-b/s-c`）

## 常見錯誤

- **急著套版、沒先規劃頁序** → 先讀 `consulting-structure.md` 規劃並與使用者確認。
- **改了 class 名稱或 CSS** → 互動與排版會壞；只改內容與 `:root` 色票。
- **頁碼沒更新或對不上** → 增刪頁後務必重編 `NN / 總頁數`。
- **方案間頁型不一致** → 破壞單一維度決策，客戶難比較。
- **展示頁的 iframe 指到不存在的網頁，或路徑空白沒寫 `%20`** → 框內空白；確認網頁檔真的存在且路徑正確。
- **想在 SUMMARIZE 以外的頁用截圖** → 預設一律嵌真實網頁，截圖只用在 SUMMARIZE。
- **直接改 skill 內的 template.html** → 永遠複製一份出去再做。

## 協作留言（審稿用，選用）

`template.html` 內含一段 `<!-- COMMENTS:START/END -->` 註解層，可讓同事在審稿版上即時留言、回覆、resolve（打勾消失）。留言只存在線上 Google 試算表，不寫進 HTML。

> **重要：後端已由團隊維護者建好，共用後端網址已預填在 `template.html` 的 `EZC.endpoint`。一般使用者／同事「不需要、也不應該」自行建立 Google 後端或做任何後端設定——直接用即可。** 若被引導去「建 Google 試算表 / Apps Script」，那是誤解；請略過。

- **每份簡報唯一要做的**：把 `EZC.deckId` 改成這份的唯一代號（如 `clientA-v1`），讓不同簡報的留言分開。**`EZC.endpoint` 維持預填值，不要動、不用問使用者。** 建議為每張 `.slide` 加穩定 `data-sid`。
- **要讓同事留言**：把整包上傳 Cloudflare Pages（或任何能用網址開的靜態空間），網址給同事，他們開「💬 註解模式」即可留言。本機開檔也能對「簡報自身元件」留言；只有「嵌入網頁元件」的圖釘需要同源網址（Cloudflare）。
- **審稿分享**：**審稿網址勿給客戶**；客戶版用上方指令移除 COMMENTS 區塊。
- **元件圖釘留言（像 Figma）**：開「💬 註解模式」→「📌 釘選元件」→ 點元件留言；點圖釘看討論、resolve 後消失。嵌入網頁元件的圖釘僅同源網址可用，本機自動降級。

> **僅限維護者**：建立／更新共用 Google 後端的步驟在 `comment-backend/SETUP.md`（含後端為舊版時需重新部署以支援 `anchor` 欄）。**一般同事完全不需要看這份、不需要做這些。**
- **產出客戶版（移除留言功能）**：
  ```bash
  awk '/<!-- COMMENTS:START/{s=1} !s; /<!-- COMMENTS:END/{s=0}' 審稿版.html > 客戶版.html
  ```
  驗證乾淨：`grep -cE 'COMMENTS|EZC|ez-toggle' 客戶版.html` 應為 `0`。

### 交付前自我檢查（留言相關）

- [ ] 審稿版 `EZC.endpoint` / `EZC.deckId` 已填正確值（非 `PASTE_...`）
- [ ] 客戶版已用上面指令產生，且 `grep` 驗證搜不到 `COMMENTS`/`EZC`/endpoint
- [ ] 兩人實測：留言、回覆、resolve（打勾後雙方畫面消失）皆正常

## 設計規範（Design Guide）

提案選定風格後，可用同一套外殼產出**獨立的設計規範文件**（給開發/設計團隊照著做）。頁型與用法見 `design-guide-page-types.md`，六種頁型：封面、色彩、字級階層、間距/圓角、元件規格（按鈕/輸入框/標籤/卡片/表格）、Do/Don't。

- 做法同提案：複製 `template.html`，貼入設計規範頁型。
- **換主色只改 `:root` 的 `--color-primary`（預設公司藍 `#5D74E9`）**；淺主色、淡底自動由 `color-mix` 推導；文字、背景、邊框、深色底固定不動。
- Do/Don't 的綠/紅為固定語意色，與品牌主色無關。

## 參考資料

- `template.html` — 固定外殼起始檔（新版 CSS + JS + 空 body，含 COMMENTS 註解層；主色 `#5D74E9` 一處可換）
- `page-types.md` — 九種頁型的可複製 HTML 區塊
- `consulting-structure.md` — 顧問級頁序與敘事邏輯
- `design-guide-page-types.md` — 設計規範六種頁型的可複製 HTML 區塊
- `comment-backend/` — 協作留言後端：`Code.gs`（Apps Script）、`SETUP.md`（一次性設定指引）
- `docs/2026-06-29-comment-collaboration-*.md` — 協作留言設計文件與實作計畫
