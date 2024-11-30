const dns = require('dns');
const { promisify } = require('util');

const dnsLookup = promisify(dns.lookup);

async function checkServerStatus(host) {
  try {
    await dnsLookup(host);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = { checkServerStatus };