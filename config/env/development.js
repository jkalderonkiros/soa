/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
   connection: 'devSoaMongolabDb'
  },

  session: {
   adapter: 'mongo',
   //url: "mongodb://127.0.0.1:27017"
   url: process.env.MONGODB_URI
   //url: "mongodb://heroku_h1wtj1w6:nio7sk6cd6il4gj4jfl0gdp2qg@ds149481.mlab.com:49481/heroku_h1wtj1w6"
  }

};
