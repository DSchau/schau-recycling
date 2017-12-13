require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Schau Recycling',
    subtitle: 'The online home of the recycling & towing company Schau Recycling LLC'
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typography',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'schaurecycling.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WP_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WP_CLIENT_ID,
          wpcom_user: process.env.WP_USER,
          wpcom_pass: process.env.WP_PASSWORD
        }
      }
    }
  ]
}
