# 頁型零件庫（新版 · 以 ezMoney deck 為準）

每一種頁型都是一個 `<div class="slide ...">`。從這裡複製對應區塊貼進 `template.html` 的 `slides-wrapper` 內。

## 共同規則（每張都要遵守）

- 投影片尺寸固定 1280×720，**不要改 CSS class 名稱、不要改尺寸、不要動 `<style>`/`<script>`**。
- 內容頁的頁首用 `.page-header`（或 `.page-header compact`），裡面是 `.ph-top`（含 `.page-tag` 英文小標、`.ph-zh` 中文小標、`.page-num` 頁碼）；需要大標時，在 `.ph-top` 下方加一個 `.page-title`。封面 / 目錄 / 章節 / 設計方向 / 章節分隔頁有自己的頁碼元素（`toc-num` / `chap-num` / `dirs-num` / `sec-num`），不用 page-header。
- ⚠️ **下方範例的頁碼（如 `09 / 24`）只是示意**，務必全份改成你的實際 `NN / 總頁數`。
- 換主題色改 `template.html` 最上面 `:root` 的色票（`--color-primary` 等）。三款風格各自的強調色用 `s-a` / `s-b` / `s-c` 的 `--scheme`（在 `:root` 後的 `.s-a,.s-b,.s-c{--scheme:#...}` 調整）。
- **展示頁預設嵌入「真實網頁」**（live iframe）；**只有最後 SUMMARIZE 頁用靜態截圖**。

## 嵌入真實網頁 live iframe 的規則（重要）

- 結構固定：`<div class="device"><div class="live-vp"><iframe data-w="1440" loading="lazy" src="網頁路徑.html" title="說明"></iframe></div></div>`
- `data-w` 是該網頁的「桌機設計寬度」（通常 1440），JavaScript 會自動縮放塞進外框，不要自己加 width/height。
- `src` 指向**實際存在的 HTML 網頁檔**（相對於 deck 的路徑；路徑有空白要寫成 `%20`，例如 `design%20directions/a-home.html`）。
- 捲動高亮（左側說明跟著網頁捲動變亮）是進階功能，**只在首頁（檔名含 `-home.html`）生效**，且需要被嵌入的網頁主動發 `postMessage`。一般情況不需要特別設定，沒有也不影響。

---

## 1. 封面 COVER（滿版照片 + 色帶 + logo）

封面照片：把照片命名為 `material/cover-bg.jpg` 放進 material 資料夾即可抽換；或到 `<style>` 裡 `.slide.s-cover{...url('material/cover-bg.jpg')...}` 改那一個路徑（這是唯一允許動的 CSS）。

```html
<div class="slide s-cover">
  <div class="cover-band">
    <div class="cover-band-main">
      <div class="ct">主標題（中文）</div>
      <div class="ce">English Subtitle</div>
      <div class="cmeta">2026.06　｜　客戶名 · 製作單位</div>
      <div class="cfine">著作權聲明文字。</div>
    </div>
    <div class="cover-band-logo">
      <img class="logo-img" src="material/logo-客戶.png" alt="客戶">
      <div class="lk">品牌／產品標語</div>
    </div>
  </div>
</div>
```

---

## 2. 目錄 TABLE OF CONTENTS（s-toc）

```html
<div class="slide s-toc">
  <span class="toc-num">02 / 24</span>
  <div class="toc-top">
    <div class="toc-left">
      <div class="toc-list">
        <div class="toc-row"><span class="tn">01</span><span class="te">English Section</span><span class="tc">中文章節名</span></div>
        <!-- 再複製幾個 toc-row -->
      </div>
    </div>
    <div class="toc-right"></div>
  </div>
  <div class="toc-band"><span class="tt">Table of Contents</span><span class="ttc">目錄</span></div>
</div>
```

---

## 3. 章節分隔頁 CHAPTER（slide chap）

```html
<div class="slide chap">
  <span class="chap-num">03 / 24</span>
  <div class="chap-title">English<br>Title</div>
  <div class="chap-zh">中文章節名</div>
</div>
```

---

## 4. 產業／現況洞察頁 CONTEXT（ctx2）

一句導言 + 滿版底色雙欄。

```html
<div class="slide">
  <div class="page-header compact">
    <div class="ph-top">
      <span class="page-tag">INDUSTRY INSIGHT</span>
      <span class="ph-zh">產業洞察</span>
      <span class="page-num">04 / 24</span>
    </div>
  </div>
  <div class="ctx2">
    <div class="ctx2-head">
      <h2 class="ctx2-title">一句主標</h2>
      <p class="ctx2-lead">導言，重點用 <b>粗體</b>。</p>
    </div>
    <div class="ctx2-band">
      <div class="ctx2-col">
        <div class="bar"></div>
        <h3>欄目一標題</h3>
        <ul>
          <li><b>重點標題</b><span>說明文字。</span></li>
          <!-- 再加幾個 li -->
        </ul>
      </div>
      <div class="ctx2-col"><!-- 第二欄，同結構 --></div>
    </div>
  </div>
</div>
```

---

## 5. 改版目標頁 OBJECTIVES（goals · 四格）

```html
<div class="slide">
  <div class="page-header">
    <div class="ph-top">
      <span class="page-tag">OBJECTIVES</span>
      <span class="ph-zh">改版目標</span>
      <span class="page-num">05 / 24</span>
    </div>
    <div class="page-title">這次改版要達成什麼</div>
  </div>
  <div class="goals">
    <div class="goal"><div class="gn">01</div><div class="gt">目標標題</div><div class="gd">說明文字。</div></div>
    <!-- 共 4 個 goal -->
  </div>
  <div class="goals-foot"><span>承上啟下的一句話，帶到 <b>下一段</b></span><span class="arr">→</span></div>
</div>
```

---

## 6. 設計方向總覽 DIRECTIONS（s-dirs · 三張大圖卡）

每張卡的背景圖用 inline `style="background-image:url('material/x-dir.jpg')"`。

```html
<div class="slide s-dirs">
  <span class="dirs-num">07 / 24</span>
  <div class="dir-card" style="background-image:url('material/a-dir.jpg')">
    <div class="dir-top"><div class="dl">A</div><div class="dt">方向名稱</div></div>
    <div class="dir-bot">
      <div class="dd">一句定位描述。</div>
      <div class="dtags"><span>標籤一</span><span>標籤二</span><span>標籤三</span></div>
    </div>
  </div>
  <!-- 再複製 B、C 兩張 dir-card -->
</div>
```

---

## 7. 風格章節頁 SECTION INTRO（sec s-a / s-b / s-c）

每款風格進入時的扉頁。`s-a`/`s-b`/`s-c` 決定該款的強調色。

```html
<div class="slide sec s-a">
  <span class="sec-num">08 / 24</span>
  <div class="sec-head">
    <div class="sec-title">Style A</div>
    <div class="sec-name">風格名稱</div>
    <div class="sec-tags"><span>標籤一</span><span>標籤二</span><span>標籤三</span></div>
  </div>
  <div class="sec-foot">
    <div class="sec-desc">一句風格定位。</div>
    <div class="sec-rows">
      <div class="sec-row"><span class="k">體驗主軸</span><span class="v">說明</span></div>
      <div class="sec-row"><span class="k">視覺基調</span><span class="v">說明</span></div>
      <div class="sec-row"><span class="k">操作感</span><span class="v">說明</span></div>
    </div>
  </div>
</div>
```

---

## 8. 展示頁 SHOWCASE（show-row · 左說明 + 右真實網頁）⭐ 最常用

左邊重點說明、右邊裝置框嵌入真實網頁。每個風格的每個頁面各一張。`slide` 上的 `s-a/s-b/s-c` 要對應該款風格。

```html
<div class="slide s-a">
  <div class="page-header compact">
    <div class="ph-top">
      <span class="page-tag">STYLE A</span>
      <span class="ph-zh">風格名 · 頁面名（如 首頁）</span>
      <span class="page-num">09 / 24</span>
    </div>
  </div>
  <div class="show-row">
    <div class="show-notes">
      <h2 class="sn-title">這頁的重點標題</h2>
      <ul class="sn-list">
        <li><b>賣點標題</b>說明這個設計為使用者／客戶帶來什麼。</li>
        <!-- 再加幾個 li -->
      </ul>
    </div>
    <div class="device"><div class="live-vp"><iframe data-w="1440" loading="lazy" src="design%20directions/a-home.html" title="風格名 頁面名"></iframe></div></div>
  </div>
  <div class="slide-footer"><span>A 風格名 · 頁面名</span><span>09</span></div>
</div>
```

---

## 9. 總覽比較頁 SUMMARIZE（compare-table · 用靜態截圖）

整份唯一用靜態截圖的頁：三欄各放一張**整頁首頁長截圖**（`material/recap-x.png`，整頁從上到下），下面逐列比較，最後一條「如何選」。

- 三個截圖框固定**橫式 1440:900**、尺寸一致；框內為整頁長截圖，**可捲動**。
- 三框會**比例同步捲動**：捲任一個，三個一起動、且不同長度也**同時到底**（自動套用，不需加 HTML 屬性）。
- 不要把長截圖裁成橫式縮圖——直接放整頁，靠框內捲動呈現。

```html
<div class="slide">
  <div class="page-header">
    <div class="ph-top">
      <span class="page-tag">SUMMARIZE</span>
      <span class="ph-zh">總覽比較</span>
      <span class="page-num">24 / 24</span>
    </div>
    <div class="page-title">三款並排，一次看懂</div>
  </div>
  <div class="compare-body">
    <div class="compare-table">
      <div class="ch"></div>
      <div class="cmp-shot"><div class="device"><img src="material/recap-a.png" alt="A 截圖"></div><span class="cmp-name">A 風格名</span></div>
      <div class="cmp-shot"><div class="device"><img src="material/recap-b.png" alt="B 截圖"></div><span class="cmp-name">B 風格名</span></div>
      <div class="cmp-shot"><div class="device"><img src="material/recap-c.png" alt="C 截圖"></div><span class="cmp-name">C 風格名</span></div>

      <div class="ch">體驗主軸</div><div>A 說明</div><div>B 說明</div><div>C 說明</div>
      <!-- 每多一列比較項目，就再加 1 個 .ch + 3 個內容 div -->
    </div>
    <div class="compare-guide">
      <span class="cg-label">如何選</span>
      <span class="cg-item"><b>A 風格名</b>適合情境</span>
      <span class="cg-item"><b>B 風格名</b>適合情境</span>
      <span class="cg-item"><b>C 風格名</b>適合情境</span>
    </div>
  </div>
</div>
```

---

## 典型整份頁序（ezMoney 範式）

封面 → 目錄 → 章節分隔(Insight & Goals) → 產業洞察 → 改版目標 → 章節分隔(Design Directions) → 設計方向總覽 → 〔每款：風格章節頁 + 4 張展示頁〕×3 → 章節分隔(Summarize) → 總覽比較。
