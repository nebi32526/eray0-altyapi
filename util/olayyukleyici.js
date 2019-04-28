const reqEvent = (event) => require(`../util/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('hazır')(client));
  client.on('message', reqEvent('mesaj'));
};