const arrayToRedirect = [
  'https://www.retweet.com/en/widget/button/small/netjoven/http:/www.netjoven.pe/noticias/26670/Manana-se-estrenara-el-nuevo-video-de-Paulina-Rubio.html',
  'https://retweet.com/en/ad/%D9%85%D8%AE%D9%8A%D9%85-%D9%88%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D8%B6%D8%A7%D8%AD%D9%8A%D9%87',
  'https://retweet.com/en/comments/feed',
  'https://retweet.com/en/author/info?type=ads',
  'https://www.retweet.com/en/twitter-tips/how-to-spot-a-twitter-spammer',
  'https://retweet.com/en/ad/%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%84-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A-%D9%88-%D9%82%D9%88%D8%A9-%D8%A7%D9%84%D8%A7%D8%B5%D8%A7%D8%A8%D8%B9',
  'https://retweet.com/en/author',
  'https://retweet.com/en/ad/%D8%AA%D9%88%D9%8A%D9%88%D8%AA%D8%A7-%D9%83%D8%A7%D9%85%D8%B1%D9%8A-2014-%D9%84%D9%84%D8%A8%D9%8A%D8%B9',
  'https://retweet.com/en/ad/%D8%BA%D8%B3%D9%8A%D9%84-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D9%85%D8%AA%D9%86%D9%82%D9%84-2',
  'https://retweet.com/en/ad/%D8%BA%D8%B3%D9%8A%D9%84',
  'https://retweet.com/en/author/bazar-alkuwait?type=ads',
  'https://retweet.com/en/store',
  'https://retweet.com/en/author/bazar-alkuwait',
  'https://retweet.com/en/author/maintenance-services-kw',
  'https://retweet.com/en/author/ganmalas4-19',
  'https://retweet.com/en/ad/%D8%BA%D8%B3%D9%8A%D9%84-%D9%88-%D8%AA%D9%84%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA',
  'https://retweet.com/en/ad/%D8%AC%D9%87%D8%A7%D8%B2-%D9%83%D8%A7%D8%B4%D9%81-%D9%84%D9%83%D8%A7%D9%85%D9%8A%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9',
  'https://retweet.com/en/ad/%D8%AA%D8%A7%D8%A8%D9%84%D8%AA-%D9%84%D9%83%D8%B3%D8%B1%D9%89-%D9%84%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84',
  'https://retweet.com/en/ad/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AA%D9%83%D9%8A%D9%8A%D9%81-%D9%88%D9%83%D8%A7%D9%85%D9%8A%D8%B1%D8%A7%D8%AA',
  'https://retweet.com/en/ad_country/kuwait',
  'https://retweet.com/en/$',
  'https://retweet.com/en/ad_category/electronics',
  'https://www.retweet.com/en/twitter-fun/the-conception-of-twitter',
  'https://retweet.com/en/ads/business-category/%D8%A3%D9%84%D8%B9%D8%A7%D8%A8-%D9%81%D9%8A%D8%AF%D9%8A%D9%88',
  'https://retweet.com/en/ad/%D8%A7%D9%84%D8%B1%D9%82%D8%B9%D9%89-%D9%822',
  'https://retweet.com/en/ads/pets',
  'https://www.retweet.com/en/funny-animal-videos/cat-gets-bag-stuck-on-head',
  'https://retweet.com/en/ads/real-estate,apartments',
  'https://retweet.com/en/ad/%D8%BA%D8%B3%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA',
  'https://retweet.com/en/ad/%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A7%D8%B1-%D8%B6-%D8%B1%D8%A3%D8%B3-%D8%A8%D9%84%D9%83-%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A-%D8%A8%D8%AD%D9%8A-%D8%A7%D9%84%D9%8A%D8%B1%D9%85%D9%88%D9%83-%D8%A7%D9%84%D8%B1',
  'https://retweet.com/en/ad/%D9%86%D8%A7%D8%A8%D9%88%D9%84%D9%8A-%D8%B3%D8%A7%D8%A6%D9%82-%D8%B9%D8%B1%D8%A8%D9%8A-%D9%81%D9%8A-%D9%86%D8%A7%D8%A8%D9%88%D9%84%D9%8A-00393475659412-%D8%A7%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7',
  'https://retweet.com/en/ad/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%AA%D8%B7%D9%8A%D8%A8%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%88%D8%A7%D9%84%D8%A7%D9%86%D8%AF%D8%B1%D9%88%D9%8A%D8%AF-%D9%88%D8%A7%D9%84',
  'https://retweet.com/en/ad/%D8%B9%D8%B1%D9%88%D8%B6-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A-%D8%A8%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D8%A7%D9%84',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/02/its-about-the-people-people-a-rant-on-relationships',
  'https://retweet.com/en/tag/classiadspro',
  'https://retweet.com/en/ads/services',
  'https://retweet.com/en/ad/%D8%AE%D8%AF%D9%85%D8%A9-%D8%BA%D8%B3%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9',
  'https://retweet.com/en/register',
  'https://retweet.com/en/ads/fashion,womens-clothing',
  'https://retweet.com/en/ad/%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%B9%D9%85%D8%A7%D8%B1%D8%A9-%D8%B4%D9%82%D9%82-%D9%85%D9%81%D8%B1%D9%88%D8%B4%D8%A9-%D8%A7%D9%84%D9%8A%D8%B1%D9%85%D9%88%D9%83-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6',
  'https://retweet.com/en/ad/%D8%B3%D8%A7%D8%A6%D9%82-%D8%B9%D8%B1%D8%A8%D9%8A-%D9%81%D9%8A-%D8%B1%D9%88%D9%85%D8%A7-%D8%A7%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7003-%D9%81%D9%84%D9%88%D8%B1%D9%86%D8%B3-%D9%86%D8%A7%D8%A8%D9%88',
  'https://retweet.com/en/product-tag/sale',
  'https://retweet.com/en/author/nohakamal713',
  'https://retweet.com/en/sample-page',
  'https://retweet.com/en/product/pet-for-sale',
  'https://retweet.com/en/ad/%D9%82%D9%81%D8%B5-%D8%B7%D9%8A%D9%88%D8%B1-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D9%A5%D8%AF%D9%86%D8%A7%D9%86%D9%8A%D8%B1',
  'https://retweet.com/en/ad/%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9',
  'https://retweet.com/en/feed',
  'https://retweet.com/en/listing/66289979f3bfa429c778da61',
  'https://retweet.com/en/ads/%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9',
  'https://retweet.com/en/listing/660b3e3b78976f2278cf7e55',
  'https://retweet.com/en/ad_category/real-estate',
  'https://retweet.com/en/ad_category/mobile',
  'https://retweet.com/en/ad/%D8%B9%D8%B1%D9%88%D8%B6-%D8%A7%D9%84%D9%83%D8%A7%D8%B4-%D8%A8%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA-2',
  'https://retweet.com/en/ad_category/education-training',
  'https://retweet.com/en/listing/66035c1e448713eeda040250',
  'https://retweet.com/en/ad_category/autos',
  'https://retweet.com/en/wp-admin/admin-ajax.php',
  'https://retweet.com/en/listing/66704784c791605ba11aa9ca',
  'https://retweet.com/en/ad_category/services',
  'https://retweet.com/en/shop-2',
  'https://retweet.com/en/listing/662899d8f3bfa429c778dac2',
  'https://retweet.com/en/listing/660f0a1678976f2278cfbe5f',
  'https://retweet.com/en/listing/660b1b9378976f2278cf7539',
  'https://retweet.com/en/listing/667cd0c0e9fe354e1d430dff',
  'https://retweet.com/en/listing/667da2d9e9fe354e1d4333fa',
  'https://retweet.com/en/listing/66044d3e448713eeda0406d5',
  'https://retweet.com/en/listing/667caec1e9fe354e1d43086c',
  'https://retweet.com/en/listing/667da2d4e9fe354e1d4333f4',
  'https://retweet.com/en/listing/667acf75e9fe354e1d42dff2',
  'https://www.retweet.com/en/articles/6-jeffreese-jeffreese-network-security-design-and-installation-engineer-at-a-financial-services-firm-?tid=ss-copy-post',
  'https://retweet.com/en/listing/66035c31448713eeda04025c',
  'https://retweet.com/en/listing/668478730c232b30aeff4c10',
  'https://retweet.com/en/listing/6689b79737898c75c2824ebc',
  'https://retweet.com/en/listing/668793739b13e5cbda540f83',
  'https://retweet.com/en/listing/668478670c232b30aeff4c0b',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/04/human-resources-has-a-seat-at-the-table',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/kerst/feliz-navidad.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/kerst/last-christmas-by-kotaro-oshio.html',
  'https://retweet.com/en/listing/660a146978976f2278cf6a34',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/duurzaam/prins-albert-ii-of-monaco-foundation-cleanequity-monaco-2010.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/kerst/christmas.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/kerst/christmas.html',
  'https://retweet.com/en/listing/6689b74e37898c75c2824ea7',
  'https://www.retweet.com/en/widget/button/big/andersbekekenblog/milieu/eco-ideas-en-de-panasonic-eco-relay.html',
  'https://retweet.com/en/author/info',
  'https://retweet.com/en/product/car-for-sale',
  'https://retweet.com/en/how-it-works',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/energie/the-human-powered-fitness-snackbar-of-madame-cat-in-amsterdam.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/agenda/nog-365-nachtjes-slapen-het-wk-voetbal-2010-in-zuid-afrika.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/milieu/het-woord-van-het-jaar-2007-20082009.html',
  'https://www.retweet.com/en/widget/button/big/andersbekekenblog/klimaat/t-boone-pickens-has-a-plan.html',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2009/12/evolution-the-cell-phone-social-media-got-next',
  'https://www.retweet.com/en/widget/button/big/andersbekekenblog/energie/de-extreem-energiezuinige-en-waterbesparende-wasmachine.html',
  'https://retweet.com/en/author/ganmalas4-19?type=ads',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/07/there-is-no-i-in-team-but-there-is-a-me-talent-management-and-lebron-james',
  'https://retweet.com/en/ad_category/jobs',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/agenda/het-woord-van-het-jaar-2007-20082009.html',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2009/10/projected-launch-of-rethink-hr-org',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/05/friday-thought-never-give-up',
  'https://retweet.com/en/retweet-button',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/kerst/an-electrifying-christmas-tree-by-tesla-downunder.html',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/03/random-thought-brands-suck-humans-rule',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/03/friday-funny',
  'https://www.retweet.com/en/funny-pictures/darth-vader-cake-wreck',
  'https://www.retweet.com/en/user/tweets/mrtugboat',
  'https://retweet.com/en/listing/669e6622e28548b6a624d472',
  'https://retweet.com/en/listing/669dd3a5e28548b6a624baeb',
  'https://retweet.com/en/packages',
  'https://retweet.com/en/listing/6693ef5e7707fc8fe8094cb8',
  'https://retweet.com/en/painted-on-clothes-brazilian-tv-show',
  'https://retweet.com/en/listing/6689b75637898c75c2824eac',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/06/managing-up-the-myth',
  'https://retweet.com/en/refund-and-returns-policy',
  'https://retweet.com/en/listing/667caed7e9fe354e1d430871',
  'https://retweet.com/en/search?country_id=24',
  'https://retweet.com/en/ad/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%BA%D8%B3%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A3%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/agenda/de-sugar-award-2010-voor-duurzame-stadsdistributie.html',
  'https://retweet.com/en/listing/66035c1c448713eeda04024a',
  'https://www.retweet.com/en/user/tweets/Why%20Six%20Sigma%20is%20an%20All-Or-None%20Proposition?.html=',
  'https://retweet.com/en/listing/660222e0448713eeda03f5d6',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/04/forget-the-research-there-are-only-3-types-of-people',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/06/no-need-for-big-words-when-explaining-a-big-concept',
  'https://www.retweet.com/en/widget/button/small/none/http:/revistanuestramirada.org/galerias/eduardogil',
  'https://retweet.com/ar/listing/6689b79737898c75c2824ebc',
  'https://retweet.com/ar/listing/6604ab48448713eeda0418a0',
  'https://retweet.com/ar/listing/6693ef5e7707fc8fe8094cb8',
  'https://www.retweet.com/en/twitter-fun/twitter-in-1935',
  'https://retweet.com/ar/listing/66044d3e448713eeda0406d5',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/energie/de-solar-wash-voor-80-energiebesparing-per-wasbeurt.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/openbaar-vervoer/the-power-of-scale-what-fleet-efficiency-can-do-for-your-company-and-the-planet.html',
  'https://retweet.com/en/listing/66a2338ee28548b6a62539bb',
  'https://retweet.com/en/listing/66a23340e28548b6a62539b6',
  'https://retweet.com/ar/listing/66a2338ee28548b6a62539bb',
  'https://retweet.com/ar/listing/669dd3a5e28548b6a624baeb',
  'https://retweet.com/ar/listing/66a23340e28548b6a62539b6',
  'https://retweet.com/ar/listing/660a146978976f2278cf6a39',
  'https://retweet.com/ar/listing/66915c5f7707fc8fe809115f',
  'https://retweet.com/ar/listing/660dc49878976f2278cfa821',
  'https://retweet.com/ar/listing/668b1f7337898c75c2833a94',
  'https://retweet.com/ar/listing/66704784c791605ba11aa9ca',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/cradle-to-cradle/cradle-to-cradle-islands.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/agenda/de-regeling-groenprojecten-2010.html',
  'https://retweet.com/ar/listing/669e6622e28548b6a624d472',
  'https://retweet.com/ar/listing/667acf75e9fe354e1d42dff2',
  'https://www.retweet.com/en/widget/button/big/NovaUCD/SiteManager*ctfn=content&fnno=30&sid=7529&cid=40194',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/biologisch/de-bio-gids-nu-online-beschikbaar-voor-apple-iphone.html',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/07/hump-day-humor-hr-needs-some-old-spice',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/agenda/onderweg-naar-morgen-en-routes-vers-demain-heading-for-tomorrow.html',
  'https://retweet.com/ar/listing/660b1b9378976f2278cf7539',
  'https://www.retweet.com/en/widget/button/small/in25years/https:/www.in25years.com',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/04/hump-day-humor-2',
  'https://retweet.com/en/listing/667cd0bde9fe354e1d430dfa',
  'https://retweet.com/en/product-tag/classified-wordpress-theme',
  'https://retweet.com/en/ad/%D8%A3%D8%B1%D8%B6%D9%8A%D8%A7%D8%AA-%D8%A7%D9%8A%D8%A8%D9%88%D9%83%D8%B3%D9%8A-%D9%84%D9%84%D9%85%D8%B5%D9%86%D8%A7%D8%B9-%D9%88%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%87',
  'https://retweet.com/ar/listing/667caed7e9fe354e1d430871',
  'https://www.retweet.com/en/videos/new-footage-of-neil-armstrongs-first-step-on-the-moon',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/klimaat/de-zayed-future-energy-prize.html',
  'https://www.retweet.com/en/widget/button/big/Milieunet/http:/www.stichtingmilieunet.nl/andersbekekenblog/kerst/santa%E2%80%99s-high-tech-sleigh-of-the-future-by-ge-labs.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/white-house-president-44/video-barack-obamas-first-year-in-the-white-house.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/agenda/ecopop-2010-de-bio-lifestyle-fair.html',
  'https://retweet.com/en/win10k',
  'https://www.retweet.com/en/widget/button/big/andersbekekenblog/klussen-en-verbouwen/duurzaam-bouwen-dag-op-batibouw.html',
  'https://www.retweet.com/en/widget/button/big/andersbekekenblog/dieren/japanese-designer-chie-imai-komt-met-eco-bont.html',
  'https://retweet.com/en/ad/car-for-sale-2?cat_id=19',
  'https://retweet.com/en/listing/6604ab43448713eeda04189a',
  'https://retweet.com/ar/listing/667de944f292fe601d736398',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/01/re-thinking-hr-based-training-a-break-from-tradition',
  'https://retweet.com/en/ad/%D8%A7%D8%AE%D8%B5%D8%A7%D8%A6%D9%8A-%D8%A8%D8%B1%D9%8A%D9%83-%D8%AA%D8%B5%D9%84%D9%8A%D8%AD-%D8%B3%D9%8A%D8%B1%D9%81%D9%88-%D8%AA%D8%B5%D9%84%D9%8A%D8%AD-abs',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/08/hump-day-humor-make-people-happy',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/kerst/video-christmas-at-the-white-house-2009.html',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/energie/abu-dhabi-future-energy-week-2010-adfew-2010.html',
  'https://retweet.com/en/listing/6604c1d3cc97234c06458d91',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/energie/cop15-de-nieuwe-groene-wereldeconomie-by-nobuo-tanake-iea.html',
  'https://retweet.com/en/story/submit',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/klimaat/tcktcktck-climate-voices-sinking-sunderbans.html',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/04/human-resources-the-perception',
  'https://retweet.com/en/ad/%D8%BA%D8%B3%D9%8A%D9%84-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D9%85%D8%AA%D9%86%D9%82%D9%84',
  'https://retweet.com/en/ad_category/laptop-pc',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/06/you-work-hard-so-take-your-vacation',
  'https://www.retweet.com/en/widget/button/andersbekekenblog/agenda/autosalon-brussel-groene-tip-carpool-naar-het-salon.html',
  'https://retweet.com/en/my-account',
  'https://retweet.com/ar/listing/660f0a1678976f2278cfbe5f',
  'https://retweet.com/ar/listing/660f0a1678976f2278cfbe5f',
  'https://www.retweet.com/en/widget/button/big/none/http:/rethinkhr.org/2010/02/twitter-a-learning-tool-whatever',
  'https://retweet.com/en/ad/%D8%B4%D8%B1%D9%83%D8%A9-%D8%AA%D9%86%D8%B8%D9%8A%D9%81-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA',
  'https://www.retweet.com/en/widget/button/big/NovaUCD/http:/www.ucd.ie/nova/news/currentnews/novanewstitle,40194,en.html',
  'http://localhost:3000/en/widget/button/big/NovaUCD/http:/www.ucd.ie/nova/news/currentnews/novanewstitle,40194,en.html',
]

export default arrayToRedirect;