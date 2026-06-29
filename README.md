# Rytass 提案簡報外掛

提供 `building-proposal-decks` skill：HTML 提案簡報版型 + 協作留言（一般留言、回覆、resolve、Figma 式元件圖釘）。

## 同事安裝方式（在 Claude Code 裡）

> 把下面的 `<GITHUB_USER>` 換成此 repo 的擁有者帳號（安裝說明發出前會填好）。

```
/plugin marketplace add <GITHUB_USER>/rytass-deck-marketplace
/plugin install building-proposal-decks@rytass-decks
```

裝好後，跟 Claude 說「用版型做一份提案簡報」「做網頁視覺提案」即可使用，且內建協作留言功能。

## 留言功能

- 共用留言後端（Google 試算表）已預先設定在版型中，團隊成員做的簡報留言互通。
- 審稿版上傳 Cloudflare Pages 給同事用網址檢視 + 留言；客戶版用 SKILL.md 內的指令移除留言區塊。
- 每份簡報需把 `template.html` 內 `EZC.deckId` 改成該份的唯一代號（如 `projectA-v1`）。
- 詳見 `plugins/building-proposal-decks/skills/building-proposal-decks/SKILL.md` 與 `comment-backend/SETUP.md`。

## 更新

skill 有更新時，repo 推上新版，同事在 Claude Code 重新整理外掛即可同步。
