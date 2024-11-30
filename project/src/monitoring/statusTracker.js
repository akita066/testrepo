const { getFormattedTimestamp } = require('../utils/timeUtils');

class StatusTracker {
  constructor() {
    this.lastStatus = null;
  }

  updateStatus(isUp) {
    const timestamp = getFormattedTimestamp();
    
    if (this.lastStatus === null || this.lastStatus !== isUp) {
      this.lastStatus = isUp;
      return {
        changed: true,
        timestamp,
        status: isUp
      };
    }

    return {
      changed: false,
      timestamp,
      status: isUp
    };
  }
}

module.exports = { StatusTracker };