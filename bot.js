const Discord = require('discord.js');
const client = new Discord.Client();







       client.on('message', message => {
          var prefix = '!';
          if (message.content.startsWith(prefix + 'help')) {
      let embed = new Discord.RichEmbed()
      .addField('!-1help' ,'     :earth_americas:  للحصول على قائمة  العامة :earth_americas: ')
      .addField('!-2help' ,'     :crown:   للحصول على قائمة  الاداره :crown:  ')
      .addField('قريبن' ,'     :musical_note:   للحصول على قائمة  الموسيقى :musical_note:  ')
      .addField('قريبن' ,'     :video_game: للحصول على قائمة الالعاب :video_game: ')
      .addField('!inv' ,'     :pencil: :clock: لي اضافت البوت الا سيرفرك:pencil: :clock:  ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });









  client.on('message', async message => {
        var prefix = "!";
  if(message.content.startsWith(prefix + "sn")) {
    let i = client.users.size;
    if(message.author.id !== '496597218195800084') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});




 client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
 
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);
});







  
  client.login('توكن'); 

