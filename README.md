# AI GM Bot

AIを使ってTRPGのゲームマスターを自動化するDiscord Botです。  
神話風の世界観や魂システムなど、独自の演出にも対応できるよう設計しています。

## 主な機能

- プレイヤーの入力に応じた物語生成
- ダイスロールや判定処理
- シーン描写の自動化
- Discordとの連携

## 使用技術

- Node.js
- Discord.js
- OpenAI API（または他のLLM）
- Docker（開発・運用用）

## デプロイ先

このBotは [Render](https://render.com) にてホスティングしています。  
GitHubと連携して、Push時に自動デプロイされる構成です。

### Render設定メモ

- サービスタイプ：Web Service
- スタートコマンド：`node index.js`
- 環境変数：
  - `DISCORD_TOKEN`
  - `OPENAI_API_KEY`
  - `PORT`（Renderが自動で割り当て）

---

## 今後の展望

- 魂システムの実装
- シナリオテンプレートの追加
- プレイヤー管理機能
- セッション履歴の保存

---

## ライセンス

MIT
