// cookieConsentConfig.js

// No type import needed
// import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const config = {
  root: '#app',

  cookie: {
    name: 'vtp_cookie',
    domain: location.hostname,
    path: '/',
    secure: true,
    sameSite: "Lax",
    expiresAfterDays: 365,
  },

  guiOptions: {
    consentModal: {
        layout: 'cloud wide',
        position: 'bottom center',
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: 'box',
        equalWeightButtons: true,
        flipButtons: false,
      },
  },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        enabled: true,
        readOnly: false,
        autoClear: {
          cookies: [
            {
              name: /^_ga/,
            },
            {
              name: '_gid',
            },
          ],
        },
      },
      functionality: {
        enabled: true,
        readOnly: false,
      },
      ads: {
        enabled: true,
        readOnly: false,
      },
      location: {
        enabled: true,
        readOnly: false,
      },
      security: {
        enabled: true,
        readOnly: false,
      },
    },

    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            // title: 'We use cookies',
            description:
              `<button type="button" id="cc-footer-close" class="cc-footer-close pm__close-btn">
              <span><svg viewBox="0 0 24 24" stroke-width="1.5"><path d="M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5"></path></svg></span>
              </button>
              <p>This section details how VTP Realty uses cookies and similar tracking technologies on its website and landing pages. These technologies are essential for website functionality, analytics, and delivering personalized advertising experiences.</p>
                <br />
                <p style="margin-top: 8px;">
                  <a href="https://www.vtprealty.in/privacy-policy" target="_blank">Privacy Policy For All Landing Pages</a>
                </p>
              `,
            acceptAllBtn: 'Accept',
            acceptNecessaryBtn: 'Essentials',
            showPreferencesBtn: 'Preferences',
          },
          preferencesModal: {
            title: 'Manage Cookie Preferences',
            acceptAllBtn: 'Accept',
            acceptNecessaryBtn: 'Essentials',
            savePreferencesBtn: 'Accept Current Selection',
            closeIconLabel: 'Close modal',
            serviceCounterLabel: 'Service|Services',
            sections: [
              {
                title: 'Your Privacy Choices',
                description: `This section details how VTP Realty uses cookies and similar tracking technologies on its website and landing pages. These technologies are essential for website functionality, analytics, and delivering personalized advertising experiences.`,
              },
              {
                title: 'What Are Cookies?',
                description: `Cookies are small text files stored on your device (computer, tablet, mobile phone) by websites you visit. They record your local settings and browsing history. While some cookies are essential for a website to function, others collect data for various purposes, including advertising.`,
              },
              {
                title: 'Types Of Cookies We Use And Data Collected',
                description: `We categorize cookies based on their purpose to provide you with granular control over your privacy preferences.`,
              },
              {
                title: 'Privacy Policy and Data Protection',
                description:
                  `<a href="https://www.vtprealty.in/privacy-policy" target="_blank">Privacy Policy For All Landing Pages</a>`
              },
              {
                title: 'Essential / Strictly Necessary',
                description:
                  'Our website uses cookies and similar technologies to improve your browsing experience, provide personalized property recommendations, analyze site traffic, and display relevant ads based on your preferences and location.',
                linkedCategory: 'necessary',
              },
              {
                title: 'Performance Analytics And Measurements',
                description:
                  `<p>Collect anonymized data on user interaction to optimize website performance and understand user behavior.</p>
                  <ul>
                    <li><strong>Google Inc.</strong>:
                      <ul>
                        <li>
                          <strong>COMPANY DESCRIPTION</strong>: Google Inc. is an American multinational technology company that specializes in Internet-related services and products, which includes a search engine, cloud computing, software, and hardware.
                          <br /><a href="https://www.google.com/analytics/terms/tag-manager/" target="_blank">Terms and Conditions</a>
                          <br /><a href="https://policies.google.com/privacy?hl=en-US" target="_blank">Privacy Policy</a>
                        </li>
                        <li><strong>DOMAIN(S)</strong>:
                          <ul>
                            <li>ajax.googleapis.com</li>
                            <li>maps.googleapis.com</li>
                            <li>maps.gstatic.com</li>
                            <li>region1.analytics.google.com</li>
                            <li>region1.google-analytics.com</li>
                            <li>www.google-analytics.com</li>
                            <li>www.google.com</li>
                            <li>www.google.ie</li>
                            <li>www.googletagmanager.com</li>
                            <li>www.gstatic.com</li>
                          </ul>
                        </li>
                        <li><strong>TERMS & CONDITIONS</strong>: <a href="https://www.google.com/analytics/terms/tag-manager/" target="_blank">https://www.google.com/analytics/terms/tag-manager/</a></li>
                        <li><strong>Privacy Policy</strong>: <a href="https://policies.google.com/privacy?hl=en-US" target="_blank">https://policies.google.com/privacy?hl=en-US</a></li>
                      </ul>
                    </li>

                    <li><strong>Microsoft Clarity Policy</strong>:
                      <ul>
                        <li>
                          <strong>COMPANY DESCRIPTION</strong>: Microsoft is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.
                          <br /><a href="https://clarity.microsoft.com/terms" target="_blank">Terms and Conditions</a>
                        </li>
                        <li><strong>DOMAIN(S)</strong>:
                          <ul>
                            <li>c.clarity.ms</li>
                            <li>clarity.ms</li>
                            <li>www.clarity.ms</li>
                          </ul>
                        </li>
                        <li><strong>TERMS & CONDITIONS</strong>: <a href="https://clarity.microsoft.com/terms" target="_blank">https://clarity.microsoft.com/terms</a></li>
                      </ul>
                    </li>

                  </ul>`,
                linkedCategory: 'analytics',
                // cookieTable: {
                //   caption: 'Cookie table',
                //   headers: {
                //     name: 'Cookie',
                //     domain: 'Domain',
                //     desc: 'Description',
                //   },
                //   body: [
                //     {
                //       name: '_ga',
                //       domain: location.hostname,
                //       desc: 'Description 1',
                //     },
                //     {
                //       name: '_gid',
                //       domain: location.hostname,
                //       desc: 'Description 2',
                //     },
                //   ],
                // },
              },
              {
                title: 'Functionality',
                description:
                  'Remember your preferences and settings to enhance your user experience (e.g., language, region, display preferences).',
                linkedCategory: 'functionality',
              },
              {
                title: 'Targeting Social Media And Targeting Advertising',
                description:
                  `<p>Deployed by social platforms to enable sharing features and track user activity for social media advertising.</p>
                  <ul>
                    <li><strong>Google Advertising Products</strong>:
                      <ul>
                        <li>
                          <strong>COMPANY DESCRIPTION</strong>: Google Ads is an online advertising platform developed by Google, where advertisers pay to display brief advertisements, service offerings, product listings, video content and generate mobile application installs within the Google ad network to web users.
                          <br /><a href="https://policies.google.com/terms" target="_blank">Terms and Conditions</a>
                          <br /><a href="https://business.safety.google/privacy/" target="_blank">Business Data Responsibility</a>
                        </li>
                        <li><strong>DOMAIN(S)</strong>:
                          <ul>
                            <li>doubleclick.net</li>
                            <li>googleads.g.doubleclick.net</li>
                            <li>static.doubleclick.net</li>
                            <li>stats.g.doubleclick.net</li>
                            <li>www.youtube.com</li>
                            <li>youtube.com</li>
                          </ul>
                        </li>
                        <li><strong>TERMS & CONDITIONS</strong>: <a href="https://policies.google.com/terms" target="_blank">https://policies.google.com/terms</a></li>
                        <li><strong>Privacy Policy</strong>: <a href="https://business.safety.google/privacy/" target="_blank">https://business.safety.google/privacy/</a></li>
                      </ul>
                    </li>

                    <li><strong>Meta</strong>:
                      <ul>
                        <li>
                          <strong>COMPANY DESCRIPTION</strong>: Meta is a social technology company that enables people to connect, find communities, and grow businesses.
                          <br /><a href="https://www.facebook.com/legal/terms" target="_blank">Terms and Conditions</a>
                          <br /><a href="https://www.facebook.com/about/privacy/update" target="_blank">Data Subject Rights</a>
                        </li>
                        <li><strong>DOMAIN(S)</strong>:
                          <ul>
                            <li>connect.facebook.net</li>
                            <li>www.facebook.com</li>
                          </ul>
                        </li>
                        <li><strong>TERMS & CONDITIONS</strong>: <a href="https://www.facebook.com/legal/terms" target="_blank">https://www.facebook.com/legal/terms</a></li>
                        <li><strong>Privacy Policy</strong>: <a href="https://www.facebook.com/about/privacy/update" target="_blank">https://www.facebook.com/about/privacy/update</a></li>
                      </ul>
                    </li>
                  </ul>`,
                linkedCategory: 'ads',
              },
              {
                title: 'Location Intelligence',
                description:
                  `<p>We use location-based analytics (Location Intelligence) to understand how users interact with our site across different geographic regions. This helps us optimize services, content delivery, and user experiences based on location trends.</p>`,
                linkedCategory: 'location',
              },
              {
                title: 'Security',
                description:
                  `<p>Designed to maintain website security and protect user data from unauthorized access or fraudulent activities.</p>
                  <ul>
                    <li><strong>Cloudflare</strong>:
                      <ul>
                        <li>
                          <strong>COMPANY DESCRIPTION</strong>: Cloudflare is a web performance and security company that provides online services to protect and accelerate websites online.
                          <br /><a href="https://www.cloudflare.com/en-gb/website-terms/" target="_blank">Terms and Conditions</a>
                          <br /><a href="https://www.cloudflare.com/en-gb/privacypolicy/" target="_blank">Data Subject Rights</a>
                        </li>
                        <li><strong>DOMAIN(S)</strong>:
                          <ul>
                            <li>cdnjs.cloudflare.com</li>
                          </ul>
                        </li>
                        <li><strong>TERMS & CONDITIONS</strong>: <a href="https://www.cloudflare.com/en-gb/website-terms/" target="_blank">https://www.cloudflare.com/en-gb/website-terms/</a></li>
                        <li><strong>Privacy Policy</strong>: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank">https://www.cloudflare.com/privacypolicy/</a></li>
                      </ul>
                    </li>
                    <li><strong>Google Inc.</strong>:
                      <ul>
                        <li>
                          <strong>COMPANY DESCRIPTION</strong>: Google Inc. is an American multinational technology company that specializes in Internet-related services and products, which includes a search engine, cloud computing, software, and hardware.
                          <br /><a href="https://policies.google.com/terms" target="_blank">Terms and Conditions</a>
                          <br /><a href="https://business.safety.google/privacy/" target="_blank">Business Data Responsibility</a>
                        </li>
                        <li><strong>DOMAIN(S)</strong>:
                          <ul>
                            <li>ajax.googleapis.com</li>
                            <li>maps.googleapis.com</li>
                            <li>maps.gstatic.com</li>
                            <li>region1.analytics.google.com</li>
                            <li>region1.google-analytics.com</li>
                            <li>www.google-analytics.com</li>
                            <li>www.google.com</li>
                            <li>www.google.ie</li>
                            <li>www.googletagmanager.com</li>
                            <li>www.gstatic.com</li>
                          </ul>
                        </li>
                        <li><strong>TERMS & CONDITIONS</strong>: <a href="https://policies.google.com/terms" target="_blank">https://policies.google.com/terms</a></li>
                        <li><strong>Privacy Policy</strong>: <a href="https://business.safety.google/privacy/" target="_blank">https://business.safety.google/privacy/</a></li>
                      </ul>
                    </li>
                    <li><strong>Retargeting (Remarketing)</strong>: If you have previously visited our website or interacted with our brand (e.g., viewed a property, added an item to a cart but did not complete a purchase), we may display targeted advertisements to you on other websites or social media platforms to remind you of your interest and encourage re-engagement. This is often done using a "pixel" that places a cookie on your browser.</li>
                    <li><strong>Lookalike Audiences</strong>: We may use data from our existing customer base (e.g., email lists, website activity, YouTube engagement) to identify new potential customers who share similar characteristics. This allows us to expand our reach to individuals who are more likely to be interested in VTP Realty's offerings.</li>
                    <li><strong>Geolocation-Based Advertising</strong>: With your explicit consent, we may use your approximate or precise location data to deliver highly relevant, location-specific content and advertisements, such as promoting properties near your current location.</li>
                  </ul>`,
                linkedCategory: 'security',
              },
              {
                title: 'How We Use Advertising Data (User Use Cases)',
                description:
                  `<p>The data collected through cookies and other tracking technologies fuels various advertising strategies designed to increase relevance and engagement.</p>
                  <ul>
                    <li><strong>Behavioral Targeting</strong>: We analyze your browsing history, search terms, and interactions across our website and, where permissible, other online platforms to deliver personalized content and advertisements that are more relevant to your interests.</li>
                    <li><strong>Retargeting (Remarketing)</strong>: If you have previously visited our website or interacted with our brand (e.g., viewed a property, added an item to a cart but did not complete a purchase), we may display targeted advertisements to you on other websites or social media platforms to remind you of your interest and encourage re-engagement. This is often done using a "pixel" that places a cookie on your browser.</li>
                    <li><strong>Lookalike Audiences</strong>: We may use data from our existing customer base (e.g., email lists, website activity, YouTube engagement) to identify new potential customers who share similar characteristics. This allows us to expand our reach to individuals who are more likely to be interested in VTP Realty's offerings.</li>
                    <li><strong>Geolocation-Based Advertising</strong>: With your explicit consent, we may use your approximate or precise location data to deliver highly relevant, location-specific content and advertisements, such as promoting properties near your current location.</li>
                  </ul>`
              },
              {
                title: 'Third-Party Cookies and Data Sharing',
                description:
                  `Some cookies on our website are placed by third-party service providers (e.g., advertising networks, analytics providers, social media platforms) to help us deliver and measure our advertising campaigns. These third parties may collect data about your browsing activity across different websites to provide personalized ads. We ensure that any third parties with whom we share data are committed to data protection standards.`
              },
              {
                title: 'Managing Your Cookie Preferences',
                description:
                  `<p>You have the right to control your cookie preferences. Our cookie consent banner, which appears when you first visit our website, provides options to:<p/>
                  <ul>
                    <li><strong>Accept All</strong>: Consent to the use of all cookies as described in this policy.</li>
                    <li><strong>Reject Non-Essential</strong>: Opt-out of cookies that are not strictly necessary for the website's operation (e.g., analytics, advertising, social media cookies).</li>
                    <li><strong>Customize Settings</strong>: Select which specific categories of cookies you consent to.</li>
                  </ul>
                  <p>You can change or withdraw your cookie consent at any time by clicking the "Cookie Settings" link typically found in our website's footer or privacy center. Upon withdrawal, we will cease the collection and processing of data through the affected cookies.</p>
                  `
              },
              {
                title: '<a href="https://www.vtprealty.in/privacy-policy" target="_blank">VTP Direct Program Consent</a>',
              },
            ],
          },
        },
      },
    },
};

export default config;