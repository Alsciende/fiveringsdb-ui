module.exports = {
  NODE_ENV: '"production"',
  API_URL: JSON.stringify(process.env.FIVERINGSDB_API_URL),
  GA_TRACKING_ID: JSON.stringify(process.env.FIVERINGSDB_GA_TRACKING_ID),
}