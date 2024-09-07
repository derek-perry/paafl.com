/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        "source": "/index",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/home",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/homepage",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/privacypolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacy-policy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacypolicywebsite",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacy-policy-website",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookies",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookiepolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie-policy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/drive",
        "destination": "https://drive.google.com/drive/folders/1nX9hNhkUO_EGE4j57A_wbqKk0yQhAuHk",
        "permanent": true
      }
    ]
  }
}

module.exports = nextConfig
