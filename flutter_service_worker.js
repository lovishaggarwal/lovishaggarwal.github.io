'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "377ad60d660aa7d316534a8bd57399ee",
".git/config": "fe489040306ff5f24c06fe569d867f2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "8a9f91222e6f98131310d238d2ed175e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "725722b60713e79c35028cb7adc03ce7",
".git/logs/refs/heads/master": "725722b60713e79c35028cb7adc03ce7",
".git/objects/07/273cdc0fc7a00394eb56a2407f4d9624175229": "7c14bf25d6d47ba240e7c895eacc0773",
".git/objects/0b/dcb41d8cf9e95c3dfd9cc7e98bd28a39283bf4": "7ac8aa36b0c2ac64fef07d55b2128079",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/17/ee46ed9146664e85338270c4c2fe17143eaeb9": "f2232586aaa1feddd503e4437c8db4fe",
".git/objects/1c/5373ef6d0382942050949b8d997d71769311ac": "b401e58f4b03fca5f147141cd5a01afa",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1c/c7c5c40921a0a67880871b8274e19c1ff6d49c": "c6463ddd213c0f15300fb188ccc55e0a",
".git/objects/25/e95c131f8539bba0c0a255d14b66078996b46e": "e1b9d3ef58071b6963e51022500bf4da",
".git/objects/26/2acb8069ae679b4d1fa9a86451407fe151d3a6": "353462a888ffdd56743d58db0395aee2",
".git/objects/29/111dc2260bee9aa5b34cb02a720c622a3c55c7": "574ab7a818dfaede0afadcdc53b21a18",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/73934f2062954f9b98d462fa6cbd4efcd6a6ba": "b4682c1cc1c9a084ad48b7167ac9c7ca",
".git/objects/2d/de1db597680a20db7c3030afd3d5ac23790cd4": "3430a56b27e3172a747e7a416c6abf80",
".git/objects/2e/072a48de4ca4fee37944f42ebd4e3f040211b4": "d4deaa9611cd28e5a82b8124a20c0b55",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3b/346a7f4b10773de8ea76e60cc288ff2e8d1b60": "742d77435cbdebf0074fc73a7899c26d",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/7dff4a4650881f2b131efb54770d5749705a74": "045f332c8158fef1cfa248d95811744f",
".git/objects/3d/dcb2eafcf4cd4b50e4bbcc2334a46c3ec44fe2": "0a6d52b745bdfb0ee086bbf9c5b7f2b2",
".git/objects/43/4fadc2b9267fe349cd7de7a97fc2c3e698b4f0": "0807fa83417ee542e09a0b46147b3726",
".git/objects/44/3b8fa5c307d9e1d0abfa8d519bc5b60f7fdcf4": "a2cf642cb1b46dc0a5acbd0bae7e57c0",
".git/objects/49/4f7345e346b8cf90b8684bb5b2e68c6c2e32d2": "b6b4226141bbcdb1337ee0d5c017467d",
".git/objects/49/50ba748814fa0a37d732abdc62978f4004e225": "ce09f9db81bc94ed715b2e1cd28bf797",
".git/objects/4c/0c1c9adf3254a1ab5415c13710aa3455c48279": "ed1938e8aab89bc25e8433beb1b08b9e",
".git/objects/4f/fb86d3eb880cc5e962d76096845209fa2bf013": "9f83e0f6d2bae48144e8c2a6d257b60b",
".git/objects/52/2dc3105c81c753c96ba7b0b0024c42301dee6f": "a9fa8f430f523f3f98fd2f2aced148cb",
".git/objects/59/7ea69dbc85b5366d8681cfe3a9845f77c1cc48": "9fc5c96908f3a4eca5720f0d8e4eec5f",
".git/objects/5b/979039ab28aaae305074541fe39258753ba624": "d8d203e90bc2970b708c118fe10ca044",
".git/objects/62/7172f54dc25038afb2f22bc37628dcb0669160": "43567f755dc4a56b4994fbd3adb28278",
".git/objects/65/425d92fb357a036d2cda4dc683cdb4eb1f628f": "f2fb439c1924322c11c31d1f2ba3f6b2",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/43ce73b440bc7a612d7ce522d24feff295b583": "d22aa39f1875551499e101ee106b12fd",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/ec7f8fe0a3269bdb5f5ee81705e9ece380ab8f": "1ff99d869a130c61b6953ac3649a4fce",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/71/82f679228079bce4366946c671e6a0ff5bf3f9": "8f568f587e96fd6840c392024dd34722",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/77/7d63dbe9492c7c18562ad3acf59bed43c54370": "f7c8b42fc447907a8f08c40afa400f25",
".git/objects/78/05b218192b6137282cd1ea0cced59766301796": "bc7aa11275659a4957dfd66511968fe7",
".git/objects/78/da337c0e77aaa6eb0f68f390493d694d3edc66": "fd7c6dfa7c69bf5362426a1d26b0fbc1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/f0922441a2876896386a1e87f5070ddd9ccfbf": "f7202243a33cf8ef6433e1ec7275f966",
".git/objects/81/feb164386e63a023778a8e042d68c7a8920fc0": "6e9e6d9288440d318bc1737e4119ea1e",
".git/objects/8b/4bf4e6d31acaaa53a7a662164656755118e432": "f727cb54b3565ac02344e79ef3224e59",
".git/objects/8f/56034405482c073f5d47135dadbe618b43e305": "2fd8a8150ac2a00e0ee037c1894921a3",
".git/objects/94/8a2a6cc76a4d7cb692d0d08e352f126ec48a9d": "cbf73b51fb0502e860178e210c363ca7",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/9d/2f0eda38674d9d9ec0f1d11898e8d8ce27adde": "6445758ad7800ad8df3a417ed57c2615",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c58c506000026537160a0076e7d09cdce043ec": "b0555bd09897b23b75323df8828b58ce",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/e99e20c38a23e95295917d6a5cdb49a8489eb8": "daa46bdb83328438b3e1f0bb1b074657",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/419b57aefcc08e7a17c5d076fce90ac860c7a1": "dbec42ccd2b78fe9cb3cf9d12b29907a",
".git/objects/ba/bfb86f079780f9777809773396fb60d9d6d8c6": "2a7a0aa0e5b6d70265a5b041f064053d",
".git/objects/c4/874baf0de6cabf7944b7fdff3292bca77e69c9": "2f62ab83cfd617d3e39f5bcb4371a2b8",
".git/objects/c6/90503d5db10e48306a8426e246b93fc3e0cda0": "3ca0aa592055d08b85774059f222eb17",
".git/objects/c8/d2df2ee6a5fbf44bbf845cd2c478c5b0d86535": "788b205ce8653f2d174ec1275888346a",
".git/objects/cb/e7cf1ee725efac592e2e9bc6775175bff4b706": "73c02cf4fedd35c7f41a09153e4d5237",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/cd6b4c36bf41f2ac1deb396345c75fd5beaa0b": "67feff52fcf7a6a76f831c52483aecd6",
".git/objects/ce/ac75d75e6bcaf56823bacd051bd9f135af6f4a": "339275ef60385a218d05801d845443c2",
".git/objects/d0/157316f9dcc6be172cfefe794bb005bfc0038e": "87d3d294d8549d97f9c370e279040ccf",
".git/objects/d3/1c474959ca886e566920ffa4bfccf67b70600f": "62663b74d243786b5241df1b1a362d33",
".git/objects/e1/8f526f615209a3a59dec20313ef01783ea43c7": "45c16fdd5bc820f0f4f6257389d7ddb6",
".git/objects/e2/4df634f77c90812a878a60a8e5d73dba7bd7ef": "b89847b35d050ae15b58d3b5038e056b",
".git/objects/e2/6eeb528454f7a82ec29108aac728f8f723bc80": "9eaea6de9ed985fd4da7df354e9a6424",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/141edb250a97d405d98e9c5791a3840460034c": "be51b660e0b1e05eacc2535a0e7f0bfd",
".git/objects/f0/db4f89c1b87642ddccbd502015acebc87ba756": "b2eb79682121a24c3d3086fe7de1cd2d",
".git/objects/f5/afcaf0798a4301cec1c05e60b1a46a38a81aa3": "e8c00976b73dd4c66a64ce752e7a0c92",
".git/objects/f9/3a94bc9f18e4b3ffcd7866b8a21596c57a2fb6": "4ab18dc71741a1faa94e68bd16cfa4e8",
".git/objects/f9/c139bcf2b228353827fa544e60bb20413b7b78": "fc9b74c87e343c21661e7076435e774a",
".git/refs/heads/master": "b7646faa47d6161b2b13a6e49f07007f",
"assets/AssetManifest.json": "837f603d37d1210fc9c487a6b4407d46",
"assets/assets/app_logo.png": "ebe09bb8c8dcabf56ad86bad17d8a19c",
"assets/assets/config_breaking_marquee.jpg": "8146bebbc065591087790d111cea6b09",
"assets/assets/config_breaking_news.jpg": "bc671cf618a27c0225ef192ca897d4e2",
"assets/assets/config_quick_read.jpg": "a36fa6c645c20b7c72bac6a9a80d8fe0",
"assets/assets/config_recent_news.jpg": "5e89de8becdc7910b6da7a69a4f61f6c",
"assets/assets/config_story_view.jpg": "fc3e7e007553e329e130706203bc9e5b",
"assets/assets/dashboard.json": "eb8568d8104667dc9d7ef30c7ea09ba6",
"assets/assets/flags/ic_ar.png": "ead63c82d77a99b1c50230f75153b47f",
"assets/assets/flags/ic_bangladesh.png": "8aa34f2604b56fc791870c122670f41e",
"assets/assets/flags/ic_french.png": "535d6d3399aec7572fddc9cbd7e9af7a",
"assets/assets/flags/ic_germany.png": "181cf572b93fb29625357e04061631d9",
"assets/assets/flags/ic_india.png": "a5f4b487e6b01ff36c6ab3b0017ad34d",
"assets/assets/flags/ic_netherlands.png": "26345c43ad618fa2dae511c8e02bb2f1",
"assets/assets/flags/ic_pakistan.png": "b29462759dbd0e99ec9a2a3fba41923b",
"assets/assets/flags/ic_russia.png": "968105d200173c9aea562195b6811f47",
"assets/assets/flags/ic_turkey.png": "f8255db14d2856d02e78a54f676734c8",
"assets/assets/flags/ic_us.png": "da547d78f0813ecfca786901eca9e9a5",
"assets/assets/ic_category.png": "815132d222aef0dc7ed0e0ad1a25b6d9",
"assets/assets/no_data.png": "6ed6e394862741eb96ac75b5bdab89cb",
"assets/assets/placeholder.jpg": "0d76c36102ab7301fb582fe101acb506",
"assets/assets/purchase.png": "a919e76d60dd9b084a82b068181bc32a",
"assets/assets/shimmer_horizontal.png": "aaccddd31924bb72adaf5878136413b6",
"assets/assets/shimmer_list.png": "49819fd5c62734e56f3ed4d46d8602ab",
"assets/assets/walk_1.png": "220a3f59247c2eac6a5486749dbeb7d7",
"assets/assets/walk_2.png": "28a798bba11bc5aa16c63c39cfe1ebef",
"assets/assets/walk_3.png": "8b64dbb87fe2e384fa745fbfad6182a2",
"assets/FontManifest.json": "5504c4e38aba3935ae8c644d8dd735ab",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lang/ar.json": "5dd7c5bfbf27a9766fa34b41568e3149",
"assets/lang/en.json": "905f4cc9ca79fb51641b3168523ddc2a",
"assets/lang/fr.json": "bd356dae8bbe3862015548f16053ff5a",
"assets/lang/hi.json": "3b12dbb72d096c2f62c8d0792481491d",
"assets/NOTICES": "db228afb1c5a7c43550106e8eb878224",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "b5bc416fe60c70271e3e2f88f93d9ae9",
"icons/Icon-192.png": "7ad0040a6a0e5d7e404f98b8d226fdc1",
"icons/Icon-512.png": "6f9a4543d315c4cc452563a61aeada15",
"index.html": "2494b882e759f30e395ca2739d4e5f35",
"/": "2494b882e759f30e395ca2739d4e5f35",
"main.dart.js": "852671c41183996db830a71d2074b1cb",
"manifest.json": "c5fb669b48eccaf8db1429f047d17894",
"version.json": "cdac0aaa86546c17c8cb9c17fa6ea980"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
