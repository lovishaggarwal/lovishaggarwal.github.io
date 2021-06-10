'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
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
"main.dart.js": "77c16a58c225eb07b483a87ccb33bbb4",
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
