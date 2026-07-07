/* ============================================================
   Immo24 — Helpers Mapbox partagés
   Chargé après mapbox-gl.js, avant les scripts de carte des pages.
   Expose : window.cartoStyle(), window.htmlMarker(html, anchor)
   ============================================================ */
(function () {
  if (typeof mapboxgl !== 'undefined') {
    mapboxgl.accessToken = window.MAPBOX_TOKEN || 'MAPBOX_TOKEN_PLACEHOLDER';
  }

  /* Style raster CARTO "light" (tuiles sans clé). */
  window.cartoStyle = function cartoStyle() {
    return {
      version: 8,
      sources: {
        carto: {
          type: 'raster', tileSize: 256,
          tiles: [
            'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
          ],
          attribution: '© OpenStreetMap © CARTO'
        }
      },
      layers: [{ id: 'carto', type: 'raster', source: 'carto' }]
    };
  };

  /* Marqueur HTML : enveloppe le markup dans un mapboxgl.Marker.
     On passe firstElementChild pour que Mapbox pilote le transform du wrapper. */
  window.htmlMarker = function htmlMarker(html, anchor) {
    var el = document.createElement('div');
    el.innerHTML = html;
    return new mapboxgl.Marker({ element: el.firstElementChild, anchor: anchor || 'center' });
  };
})();
