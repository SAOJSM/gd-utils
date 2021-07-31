// 單次請求多少毫秒未響應以後超時（基準值，若連續超時則下次調整為上次的2倍）
const TIMEOUT_BASE = 7000
// 最大超時設置，比如某次請求，第一次7s超時，第二次14s，第三次28s，第四次56s，第五次不是112s而是60s，後續同理
const TIMEOUT_MAX = 60000

const LOG_DELAY = 5000 // 日誌輸出時間間隔，單位毫秒
const PAGE_SIZE = 1000 // 每次網路請求讀取目錄下的文件數，數值越大，越有可能超時，不得超過1000

const RETRY_LIMIT = 7 // 如果某次請求失敗，允許其重試的最大次數
const PARALLEL_LIMIT = 20 // 網路請求的並行數量，可根據網路環境調整

const DEFAULT_TARGET = '' // 必填，複製默認目的地ID，如果不指定target，則會複製到此處，建議填寫團隊盤ID

const AUTH = { // 如果您擁有service account的json授權文件，可將其複製至 sa 目錄中以代替 client_id/secret/refrest_token
  client_id: 'your_client_id',
  client_secret: 'your_client_secret',
  refresh_token: 'your_refrest_token',
  expires: 0, // 可以留空
  access_token: '', // 可以留空
  tg_token: 'bot_token', // 你的 telegram robot 的 token，獲取方法參見 https://core.telegram.org/bots#6-botfather
  tg_whitelist: ['your_tg_username'] // 你的tg username(t.me/username)，bot只會執行這個列表里的用戶所发送的指令
}

module.exports = { AUTH, PARALLEL_LIMIT, RETRY_LIMIT, TIMEOUT_BASE, TIMEOUT_MAX, LOG_DELAY, PAGE_SIZE, DEFAULT_TARGET }
