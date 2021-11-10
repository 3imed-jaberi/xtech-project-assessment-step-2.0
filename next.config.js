// @emotion/react, @emotion/styled are peerDeps sor it's required to install even we wrok with styled-component
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/icons-material',
  '@mui/system'
]); // pass the modules you would like to see transpiled

const loadContentfulEnvVars = () => ({
  CONTENTFUL_SPACE_ID: 'nsjldhbai3it',
  CONTENTFUL_ACCESS_TOKEN: '4aNjnA8npa1WcayvoC6xPtxgX529EOnKAjteiu_zc38',
})

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
})
