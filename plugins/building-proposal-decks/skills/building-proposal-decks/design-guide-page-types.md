# 設計規範（Design Guide）頁型零件庫

這份是**給全體同事製作簡報時對齊用的規範**（色彩、字級、間距、元件、Do/Don't）。獨立文件，沿用 `template.html` 同一套外殼。做法：複製 `template.html`，把下列頁型貼進 `slides-wrapper`、填內容。

## 通用規則

- **改標題**：把 `<head>` 的 `<title>` 改成「簡報製作規範」（或部門/專案規範名），否則頁籤會沿用「提案簡報」。
- **文案面向同事**：這份給全體員工看，用語要清楚、口語，**不要出現色碼、變數名、開發術語當內文**（色碼只放在色票的技術欄位，不要塞進標題或導言）。
- **換主色**：只改 `template.html` 的 `--color-primary`（預設公司藍 `#5D74E9`）；淺主色/淡底自動推導；文字、背景、邊框、深色底固定不動。
- 頁碼一律 `NN / 總頁數`，依序更新。

---

## 1. 封面

用提案頁型的封面（見 `page-types.md` 第 1 項），填法：

- `ct`（主標）：**簡報製作規範**
- `ce`（副標）：Presentation Guidelines
- `cmeta`：全體適用 · 製作簡報前請先對齊本規範
- `cfine`：可放公司/單位名或版本；**不要把色碼放在封面**

---

## 2. 色彩 Color

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">COLOR</span><span class="ph-zh">色彩</span><span class="page-num">02 / 06</span>
  </div><div class="page-title">色彩規範</div></div>
  <div class="dg-body">
    <p class="dg-lead">製作簡報時一律使用下列色彩。主色為品牌色，用於重點與強調；其餘為固定中性色，請勿自行更換。</p>
    <div class="dg-swatches">
      <div class="dg-sw"><div class="chip" style="background:var(--color-primary)"></div>
        <div class="meta"><div class="nm">主色 Primary</div><div class="tk">--color-primary</div><div class="hx">#5D74E9</div><div class="use">重點、標題色塊、強調</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-primary-light)"></div>
        <div class="meta"><div class="nm">淺主色</div><div class="tk">--color-primary-light</div><div class="hx">品牌色衍生</div><div class="use">次要強調、小標</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-primary-bg)"></div>
        <div class="meta"><div class="nm">主色淡底</div><div class="tk">--color-primary-bg</div><div class="hx">品牌色衍生</div><div class="use">標籤底、淺色區塊</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-text)"></div>
        <div class="meta"><div class="nm">文字主色</div><div class="tk">--color-text</div><div class="hx">#1A1D24</div><div class="use">標題與內文</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-text-muted)"></div>
        <div class="meta"><div class="nm">次要文字</div><div class="tk">--color-text-muted</div><div class="hx">#7A7A8C</div><div class="use">輔助說明、註解</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-bg)"></div>
        <div class="meta"><div class="nm">頁面背景</div><div class="tk">--color-bg</div><div class="hx">#FFFFFF</div><div class="use">主要底色</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-border)"></div>
        <div class="meta"><div class="nm">邊框</div><div class="tk">--color-border</div><div class="hx">#E3E5EA</div><div class="use">分隔線、外框</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-dark-bg)"></div>
        <div class="meta"><div class="nm">深色底</div><div class="tk">--color-dark-bg</div><div class="hx">#15171D</div><div class="use">深色頁、封面</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-bg-alt)"></div>
        <div class="meta"><div class="nm">區塊底灰</div><div class="tk">--color-bg-alt</div><div class="hx">#F3F4F6</div><div class="use">內容區塊底、灰帶</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-bg-alt-2)"></div>
        <div class="meta"><div class="nm">章節頁底</div><div class="tk">--color-bg-alt-2</div><div class="hx">#E8EAEE</div><div class="use">章節、風格分頁背景</div></div></div>
    </div>
  </div>
</div>
```

---

## 3. 字級階層 Typography

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">TYPOGRAPHY</span><span class="ph-zh">字級</span><span class="page-num">03 / 06</span>
  </div><div class="page-title">字級階層</div></div>
  <div class="dg-body">
    <p class="dg-lead">依用途選用對應字級，維持一致的層次；同一種用途請用同一級。</p>
    <div class="dg-type">
      <div class="dg-type-row"><span class="sample" style="font-size:88px;font-weight:400;letter-spacing:1px">Aa 特大展示</span><span class="spec">88–92px · 章節、風格分頁</span></div>
      <div class="dg-type-row"><span class="sample" style="font-size:34px;font-weight:400">封面主標</span><span class="spec">34px · 封面</span></div>
      <div class="dg-type-row"><span class="sample" style="font-size:25px;font-weight:400">頁標題</span><span class="spec">25px · 各內容頁標題</span></div>
      <div class="dg-type-row"><span class="sample" style="font-size:15px">內文：一般段落文字使用此級。</span><span class="spec">15px · 內文 / 行高 1.7</span></div>
      <div class="dg-type-row"><span class="sample" style="font-size:12px;color:var(--color-text-muted)">輔助文字：註解、小標、標籤</span><span class="spec">12px · 輔助</span></div>
    </div>
  </div>
</div>
```

---

## 4. 間距與圓角 Spacing / Radius

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">SPACING</span><span class="ph-zh">間距 / 圓角</span><span class="page-num">04 / 06</span>
  </div><div class="page-title">間距與圓角</div></div>
  <div class="dg-body">
    <p class="dg-lead">使用固定的間距與圓角級距，讓版面整齊、元素對齊一致。</p>
    <div class="dg-tokens">
      <div class="dg-token"><span class="tk">最小間距</span><span class="val">4px</span><div class="bar" style="width:4px"></div></div>
      <div class="dg-token"><span class="tk">小間距</span><span class="val">8px</span><div class="bar" style="width:8px"></div></div>
      <div class="dg-token"><span class="tk">標準間距</span><span class="val">16px</span><div class="bar" style="width:16px"></div></div>
      <div class="dg-token"><span class="tk">大間距</span><span class="val">24px</span><div class="bar" style="width:24px"></div></div>
      <div class="dg-token"><span class="tk">區塊間距</span><span class="val">40px</span><div class="bar" style="width:40px"></div></div>
      <div class="dg-token" style="margin-top:10px"><span class="tk">小圓角</span><span class="val">6px</span><div class="rad" style="border-radius:6px"></div></div>
      <div class="dg-token"><span class="tk">標準圓角</span><span class="val">12px</span><div class="rad" style="border-radius:12px"></div></div>
      <div class="dg-token"><span class="tk">大圓角</span><span class="val">18px</span><div class="rad" style="border-radius:18px"></div></div>
    </div>
  </div>
</div>
```

---

## 5. 常用元件 Components

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">COMPONENTS</span><span class="ph-zh">元件</span><span class="page-num">05 / 06</span>
  </div><div class="page-title">常用元件</div></div>
  <div class="dg-body">
    <p class="dg-lead">簡報中常用的元件樣式，請沿用以下規格，維持一致。</p>
    <div class="dg-comp">
      <div class="grp"><span class="lbl">按鈕</span><div class="row">
        <button class="dg-btn">主要</button><button class="dg-btn ghost">次要</button><button class="dg-btn dis">停用</button>
      </div></div>
      <div class="grp"><span class="lbl">輸入框</span><div class="row">
        <input class="dg-field" placeholder="一般狀態"><input class="dg-field focus" placeholder="聚焦狀態">
      </div></div>
      <div class="grp"><span class="lbl">標籤</span><div class="row">
        <span class="dg-chip">標籤一</span><span class="dg-chip">標籤二</span>
      </div></div>
      <div class="grp"><span class="lbl">卡片</span><div class="row">
        <div class="dg-democard"><div class="t">卡片標題</div><div class="d">卡片內容說明文字。</div></div>
      </div></div>
      <div class="grp" style="grid-column:1 / -1"><span class="lbl">表格</span>
        <table class="dg-demotable"><thead><tr><th>欄位</th><th>說明</th><th>狀態</th></tr></thead>
        <tbody><tr><td>項目 A</td><td>說明文字</td><td>啟用</td></tr><tr><td>項目 B</td><td>說明文字</td><td>停用</td></tr></tbody></table>
      </div>
    </div>
  </div>
</div>
```

---

## 6. Do / Don't

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">GUIDELINES</span><span class="ph-zh">使用原則</span><span class="page-num">06 / 06</span>
  </div><div class="page-title">Do / Don't</div></div>
  <div class="dg-body">
    <p class="dg-lead">製作簡報時的基本原則，維持全公司簡報的一致與專業。</p>
    <div class="dg-dodont">
      <div class="dg-dd do"><div class="hd">✓ 建議這樣做</div><div class="bd"><ul>
        <li>主色只用在重點與標題色塊</li>
        <li>同一種用途用同一個字級</li>
        <li>維持一致的間距與對齊</li>
        <li>一頁專注一個重點</li>
      </ul></div></div>
      <div class="dg-dd dont"><div class="hd">✕ 請避免</div><div class="bd"><ul>
        <li>大面積填滿主色</li>
        <li>自行加入規範外的顏色</li>
        <li>字級大小混亂、間距忽大忽小</li>
        <li>一頁塞太多資訊</li>
      </ul></div></div>
    </div>
  </div>
</div>
```

---

## 典型頁序

封面 → 色彩 → 字級 → 間距/圓角 → 常用元件 → Do/Don't（六頁；後續可再增頁型）。
