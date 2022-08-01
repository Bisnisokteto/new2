let handler = async m => m.reply(`
            .✵.Grup Salsa Kawaii.✵.

            https://chat.whatsapp.com/JKIEzTcUBTmAhLvLQUe977
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
