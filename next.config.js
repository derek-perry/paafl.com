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
        "source": "/history",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/professionalexperience",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/professional-experience",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/professional%20experience",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/aboutus",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/about-us",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/about%20us",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/question",
        "destination": "/faq",
        "permanent": true
      },
      {
        "source": "/questions",
        "destination": "/faq",
        "permanent": true
      },
      {
        "source": "/frequentlyaskedquestions",
        "destination": "/faq",
        "permanent": true
      },
      {
        "source": "/frequently-asked-questions",
        "destination": "/faq",
        "permanent": true
      },
      {
        "source": "/frequently%20asked%20questions",
        "destination": "/faq",
        "permanent": true
      },
      {
        "source": "/contactus",
        "destination": "/contact",
        "permanent": true
      },
      {
        "source": "/contact-us",
        "destination": "/contact",
        "permanent": true
      },
      {
        "source": "/contact%20us",
        "destination": "/contact",
        "permanent": true
      },
      {
        "source": "/contacts",
        "destination": "/contact",
        "permanent": true
      },
      {
        "source": "/policy",
        "destination": "/privacy",
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
        "source": "/privacy%20policy",
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
        "source": "/cookie%20policy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/drive",
        "destination": "https://drive.google.com/drive/folders/1nX9hNhkUO_EGE4j57A_wbqKk0yQhAuHk",
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
