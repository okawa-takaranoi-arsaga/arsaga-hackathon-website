import type { GatsbyConfig } from "gatsby";

const appUrl = process.env.APP_URL ?? "http://localhost:8000"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `arsaga-hackathon-website`,
    siteUrl: appUrl
  },
  plugins: ["gatsby-plugin-sass"]
};

if (appUrl === 'https://arsaga-hackathon-website.netlify.app') {
  config.plugins?.push({
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
      pluginConfig: {
        head: true,
      },
    },
  })
}

export default config;
