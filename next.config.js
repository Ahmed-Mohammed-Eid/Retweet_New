const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'api.retweet.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'cdn.builder.io',
            },
            {
                protocol: 'https',
                hostname: 'twemoji.maxcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
            },
            {
                protocol: 'https',
                hostname: 'abs.twimg.com',
            },
            {
                protocol: 'https',
                hostname: 'video.twimg.com',
            },
            {
                protocol: 'https',
                hostname: 'ton.twimg.com',
            }
        ],
    },
    env: {
        BASE_URL: 'https://api.retweet.com/api/v1'
    }
}

module.exports = withNextIntl(nextConfig);