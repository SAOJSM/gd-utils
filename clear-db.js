const { db } = require('./db')

const record = db.prepare('select count(*) as c from gd').get()
db.prepare('delete from gd').run()
console.log('已刪除', record.c, '條數據')

db.exec('vacuum')
db.close()
