/** @type {import('nextra').NextraConfig} */
import nextra from 'nextra';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkFrontmatter from 'remark-frontmatter';
import { readFileSync } from 'fs';
import remarkUnwrapImages from 'remark-unwrap-images';

const withNextra = nextra({
  theme: './web/layout/theme.tsx',
  staticImage: false,
  mdxOptions: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkUnwrapImages,
    ],
    rehypePrettyCodeOptions: {
      theme: JSON.parse(readFileSync('./public/code-theme.json', 'utf8')),
    },
  },
});

export default withNextra({
  output: 'export',
  env: {
    APP_ENV: process.env.APP_ENV,
    AUTH_URL: process.env.AUTH_URL,
    CONSOLE_URL: process.env.CONSOLE_URL,
    CONTACT_URL: process.env.CONTACT_URL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
    FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
  },
  images: {
    unoptimized: true,
  },

  optimizeFonts: false,
});
