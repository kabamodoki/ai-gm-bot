require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const OpenAI = require('openai'); // ← 新しい書き方！

// Discordクライアント設定
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// OpenAIクライアント設定（新構文）
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Bot起動時のログ
client.once('ready', () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
});

// AI応答関数（新構文）
async function getAIResponse(userMessage) {
  const systemPrompt = `
あなたはTRPGのゲームマスターです。舞台は霧に包まれた幻想都市「ヴェル・ノクス」。
プレイヤーの行動に対して、状況描写・NPCの反応・判定結果を返してください。
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
  });

  return response.choices[0].message.content;
}

// メッセージ受信時の処理
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  try {
    const aiReply = await getAIResponse(message.content);
    await message.reply(aiReply);
  } catch (error) {
    console.error('AI応答エラー:', error);
    await message.reply(`君は「${message.content}」と言ったね。冒険が始まる…🌌`);
  }
});

// Discordログイン
client.login(process.env.DISCORD_TOKEN);
