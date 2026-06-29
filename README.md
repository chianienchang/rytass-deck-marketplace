# Rytass 提案簡報外掛

提供 `building-proposal-decks` skill：HTML 提案簡報版型 + 協作留言（一般留言、回覆、resolve、Figma 式元件圖釘）。

## 同事安裝方式（在 Claude Code 裡）

```
/plugin marketplace add chianienchang/rytass-deck-marketplace
/plugin install building-proposal-decks@rytass-decks
```

裝好後，跟 Claude 說「用版型做一份提案簡報」「做網頁視覺提案」即可使用，且內建協作留言功能。

## 留言功能

- 共用留言後端（Google 試算表）已預先設定在版型中，團隊成員做的簡報留言互通。
- 審稿版上傳 Cloudflare Pages 給同事用網址檢視 + 留言；客戶版用 SKILL.md 內的指令移除留言區塊。
- 每份簡報需把 `template.html` 內 `EZC.deckId` 改成該份的唯一代號（如 `projectA-v1`）。
- 詳見 `plugins/building-proposal-decks/skills/building-proposal-decks/SKILL.md` 與 `comment-backend/SETUP.md`。

## 同事更新外掛（拿到新版）

維護者把新版推到此 repo 後，請各位同事在自己的 Claude Code 這樣更新：

1. 輸入 `/plugin` 開啟外掛管理。
2. 找到 `rytass-decks` 這個 marketplace，先**重新整理 / 更新**它（讓它抓到 repo 最新內容）。
3. 再對 `building-proposal-decks` 選 **更新（update）**。
4. 完成後，新版的版型與留言功能就生效了。

> 若選單按法因 Claude Code 版本略有不同，原則一樣：先更新 marketplace（`rytass-decks`）來源，再更新 `building-proposal-decks` 外掛。

## 維護者更新流程（重點）

- 改動的正本在維護者電腦的 `~/.claude/skills/building-proposal-decks/`。
- 更新時須把改動**同步到本 repo 的 `plugins/building-proposal-decks/skills/building-proposal-decks/`**，並**確認 `template.html` 內 `EZC.endpoint` 仍是團隊共用留言網址**（不要被洗回 `PASTE_ENDPOINT_HERE`），再 `git push`。
- 推上後通知同事依上方步驟更新。
