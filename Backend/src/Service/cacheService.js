const NodeCache = require("node-cache");

// Create cache instance
const cache = new NodeCache();

/**
 * Save data to cache
 * @param {string} key
 * @param {*} value
 * @param {number} ttlSeconds
 */
function set(key, value, ttlSeconds) {
  cache.set(key, value, ttlSeconds);
}

/**
 * Get data from cache
 * @param {string} key
 */
function get(key) {
  return cache.get(key);
}

/**
 * Get cache statistics (HIT / MISS)
 */
function stats() {
  return cache.getStats();
}

module.exports = {
  set,
  get,
  stats
};
