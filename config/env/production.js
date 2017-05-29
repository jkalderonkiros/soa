/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'prodSoaMongolabDb'
  },

  session: {
    adapter: 'mongo',
    url: process.env.MONGODB_URI,
    port: 49481,
    host: 'heroku_h1wtj1w6:nio7sk6cd6il4gj4jfl0gdp2qg@ds149481.mlab.com',
    database: 'heroku_h1wtj1w6',
    user: 'heroku_h1wtj1w6',
    password: 'nio7sk6cd6il4gj4jfl0gdp2qg'
    //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    //   user: 'YOUR_POSTGRES_USER', // optional
    //   password: 'YOUR_POSTGRES_PASSWORD', // optional
    //   database: 'YOUR_POSTGRES_DB' //optional
    //url: "mongodb://heroku_h1wtj1w6:nio7sk6cd6il4gj4jfl0gdp2qg@ds149481.mlab.com:49481/heroku_h1wtj1w6"
  }

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  // port: 80,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

};
