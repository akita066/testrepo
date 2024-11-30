function getFormattedTimestamp() {
  const now = new Date();
  return now.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

module.exports = { getFormattedTimestamp };