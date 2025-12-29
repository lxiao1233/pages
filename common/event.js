window._megoaa = window._megoaa || [];
function initMediagoPixel(acid, scriptId) {
    var url = '//cdn.mediago.io/js/pixel.js?acid=' + acid;
    if (!document.getElementById(scriptId)) {
        var t = document.createElement('script');
        t.async = 1;
        t.src = url;
        t.id = scriptId;
        var f = document.getElementsByTagName('script')[0];
        f.parentNode.insertBefore(t, f);
    }
}

window._megoaa.push({ type: 'nextjump', link: ['de.coeurva.co'] });
initMediagoPixel('33834', 'pixel_megoaa_script_33834');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '33829' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co'] });
initMediagoPixel('33829', 'pixel_megoaa_script_33829');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '33856' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('33856', 'pixel_megoaa_script_33856');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '34172' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('34172', 'pixel_megoaa_script_34172');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '30421' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('30421', 'pixel_megoaa_script_30421');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '32979' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('32979', 'pixel_megoaa_script_32979');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '33955' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('33955', 'pixel_megoaa_script_33955');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '33832' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('33832', 'pixel_megoaa_script_33832');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '34230' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('34230', 'pixel_megoaa_script_34230');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '33835' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('33835', 'pixel_megoaa_script_33835');

window._megoaa.push({ type: 'event', name: 'pageview', acid: '30680' });
window._megoaa.push({ type: 'nextjump', link: ['cz.coeurva.co', 'pl.comvella.com'] });
initMediagoPixel('30680', 'pixel_megoaa_script_30680');
