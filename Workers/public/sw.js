importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.1/workbox-sw.js');

if(workbox) {
    workbox.precaching.precacheAndRoute([
        { url: 'js/juego.js', revision: null },
        { url: '/offline.html', revision: null }, // para cuando estemos offline
    ]);
    console.log('Workbox cargado correctamente');

    workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());

    workbox.recipes.offlineFallback({pageFallback: '/offline.html'});

    // workbox.routing.registerRoute(
    //     /\.(?:css|js)$/,
    //     new workbox.strategies.StaleWhileRevalidate({
    //         cacheName: 'mi-aplicacion'
    //     })
    // );
    

}else{
    console.log('Workbox no se ha cargado');
}
