# 設計規範（Design Guide）頁型零件庫

設計規範是**獨立文件**，沿用 `template.html` 同一套外殼（1280×720、雙模式、側邊導覽、SVG icon）。做法跟提案簡報相同：複製 `template.html`，把下列頁型貼進 `slides-wrapper`、填內容。

## 通用規則

- **改標題**：把 `<head>` 裡的 `<title>` 改成「簡報設計規範」（或專案規範名），否則瀏覽器頁籤會沿用版型預設的「提案簡報」。
- **換主色**：只改 `template.html` 最上面的 `--color-primary`（預設公司藍 `#5D74E9`）；淺主色、淡底會自動推導。**文字、背景、邊框、深色底固定不動。**
- 頁碼一律 `NN / 總頁數`，依序更新。
- 色彩頁中性色的 hex 直接照 `:root` 的固定值填寫（不要改那些值，只是展示）。

---

## 1. 封面（沿用 s-cover）

用提案頁型的封面即可（見 `page-types.md` 第 1 項），標題改成「設計規範 / Design Guide」。

---

## 2. 色彩 Color

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">COLOR</span><span class="ph-zh">色彩</span><span class="page-num">02 / 06</span>
  </div><div class="page-title">色彩系統</div></div>
  <div class="dg-body">
    <p class="dg-lead">主色可依專案調整（改 <code>--color-primary</code> 一處）；中性色固定不動。</p>
    <div class="dg-swatches">
      <div class="dg-sw"><div class="chip" style="background:var(--color-primary)"></div>
        <div class="meta"><div class="nm">主色 Primary</div><div class="tk">--color-primary</div><div class="hx">#5D74E9</div><div class="use">品牌主色、CTA、重點</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-primary-light)"></div>
        <div class="meta"><div class="nm">淺主色</div><div class="tk">--color-primary-light</div><div class="hx">自動推導</div><div class="use">次要強調、小標</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-primary-bg)"></div>
        <div class="meta"><div class="nm">主色淡底</div><div class="tk">--color-primary-bg</div><div class="hx">自動推導</div><div class="use">標籤底、淺色區塊</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-text)"></div>
        <div class="meta"><div class="nm">文字主色</div><div class="tk">--color-text</div><div class="hx">#1A1D24</div><div class="use">內文、標題（固定）</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-text-muted)"></div>
        <div class="meta"><div class="nm">次要文字</div><div class="tk">--color-text-muted</div><div class="hx">#7A7A8C</div><div class="use">輔助、註解（固定）</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-bg)"></div>
        <div class="meta"><div class="nm">頁面背景</div><div class="tk">--color-bg</div><div class="hx">#FFFFFF</div><div class="use">底色（固定）</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-border)"></div>
        <div class="meta"><div class="nm">邊框</div><div class="tk">--color-border</div><div class="hx">#E3E5EA</div><div class="use">分隔線、外框（固定）</div></div></div>
      <div class="dg-sw"><div class="chip" style="background:var(--color-dark-bg)"></div>
        <div class="meta"><div class="nm">深色底</div><div class="tk">--color-dark-bg</div><div class="hx">#15171D</div><div class="use">深色區塊（固定）</div></div></div>
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
  <div class="dg-body"><div class="dg-type">
    <div class="dg-type-row"><span class="sample" style="font-size:40px;font-weight:700">大標題 Display</span><span class="spec">40px / 700 / 1.2</span></div>
    <div class="dg-type-row"><span class="sample" style="font-size:28px;font-weight:700">頁標題 Title</span><span class="spec">28px / 700 / 1.3</span></div>
    <div class="dg-type-row"><span class="sample" style="font-size:20px;font-weight:600">小標 Subtitle</span><span class="spec">20px / 600 / 1.4</span></div>
    <div class="dg-type-row"><span class="sample" style="font-size:15px">內文 Body：一般段落文字使用此級。</span><span class="spec">15px / 400 / 1.7</span></div>
    <div class="dg-type-row"><span class="sample" style="font-size:12px;color:var(--color-text-muted)">輔助 Caption：註解、標籤</span><span class="spec">12px / 400 / 1.5</span></div>
  </div></div>
</div>
```

---

## 4. 間距與圓角 Spacing / Radius

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">SPACING</span><span class="ph-zh">間距 / 圓角</span><span class="page-num">04 / 06</span>
  </div><div class="page-title">間距與圓角</div></div>
  <div class="dg-body"><div class="dg-tokens">
    <div class="dg-token"><span class="tk">space-xs</span><span class="val">4px</span><div class="bar" style="width:4px"></div></div>
    <div class="dg-token"><span class="tk">space-sm</span><span class="val">8px</span><div class="bar" style="width:8px"></div></div>
    <div class="dg-token"><span class="tk">space-md</span><span class="val">16px</span><div class="bar" style="width:16px"></div></div>
    <div class="dg-token"><span class="tk">space-lg</span><span class="val">24px</span><div class="bar" style="width:24px"></div></div>
    <div class="dg-token"><span class="tk">space-xl</span><span class="val">40px</span><div class="bar" style="width:40px"></div></div>
    <div class="dg-token" style="margin-top:10px"><span class="tk">radius-sm</span><span class="val">6px</span><div class="rad" style="border-radius:6px"></div></div>
    <div class="dg-token"><span class="tk">radius-md</span><span class="val">12px</span><div class="rad" style="border-radius:12px"></div></div>
    <div class="dg-token"><span class="tk">radius-lg</span><span class="val">18px</span><div class="rad" style="border-radius:18px"></div></div>
  </div></div>
</div>
```

---

## 5. 元件規格 Components（按鈕／輸入框／標籤／卡片／表格）

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">COMPONENTS</span><span class="ph-zh">元件</span><span class="page-num">05 / 06</span>
  </div><div class="page-title">元件規格</div></div>
  <div class="dg-body"><div class="dg-comp">
    <div class="grp"><span class="lbl">Button 按鈕</span><div class="row">
      <button class="dg-btn">主要</button><button class="dg-btn ghost">次要</button><button class="dg-btn dis">停用</button>
    </div></div>
    <div class="grp"><span class="lbl">Input 輸入框</span><div class="row">
      <input class="dg-field" placeholder="一般狀態"><input class="dg-field focus" placeholder="聚焦狀態">
    </div></div>
    <div class="grp"><span class="lbl">Tag 標籤</span><div class="row">
      <span class="dg-chip">標籤一</span><span class="dg-chip">標籤二</span>
    </div></div>
    <div class="grp"><span class="lbl">Card 卡片</span><div class="row">
      <div class="dg-democard"><div class="t">卡片標題</div><div class="d">卡片內容說明文字。</div></div>
    </div></div>
    <div class="grp" style="grid-column:1 / -1"><span class="lbl">Table 表格</span>
      <table class="dg-demotable"><thead><tr><th>欄位</th><th>說明</th><th>狀態</th></tr></thead>
      <tbody><tr><td>項目 A</td><td>說明文字</td><td>啟用</td></tr><tr><td>項目 B</td><td>說明文字</td><td>停用</td></tr></tbody></table>
    </div>
  </div></div>
</div>
```

---

## 6. Do / Don't

綠（Do）/ 紅（Don't）為**固定語意色**，與品牌主色無關。

```html
<div class="slide">
  <div class="page-header"><div class="ph-top">
    <span class="page-tag">GUIDELINES</span><span class="ph-zh">使用原則</span><span class="page-num">06 / 06</span>
  </div><div class="page-title">Do / Don't</div></div>
  <div class="dg-body"><div class="dg-dodont">
    <div class="dg-dd do"><div class="hd">✓ Do</div><div class="bd"><ul>
      <li>主色只用於重點與行動呼籲</li><li>維持一致的間距節奏</li><li>文字與背景對比充足</li>
    </ul></div></div>
    <div class="dg-dd dont"><div class="hd">✕ Don't</div><div class="bd"><ul>
      <li>大面積填滿主色</li><li>隨意混用未定義的色票</li><li>字級階層混亂、間距不一致</li>
    </ul></div></div>
  </div></div>
</div>
```

---

## 典型頁序

封面 → 色彩 → 字級 → 間距/圓角 → 元件規格 → Do/Don't（六頁；後續可再增頁型）。
