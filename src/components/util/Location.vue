<template>
    <div
        id='map'
        class="w-100 h-100"
    />
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

let map = null;

export default {
    name: 'LocationCard',
    mounted: async function() {
        this.$nextTick(() => { this.mountMap(); });
    },
    methods: {
        mountMap: function() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiaW5nYWxscyIsImEiOiJjbGt3eWx3bDUxNWY3M2NwZnJ5d3hjdXljIn0.J6HGVg8chm6rMsBQLRRxGw';
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/satellite-streets-v11',
                center: [ -108.57253071830549, 39.06948251407954 ],
                zoom: 15,
                projection: 'globe'
            });

            map.scrollZoom.disable();
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');

            map.on('load', () => {
                map.addSource('point', {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [{
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'Point',
                                coordinates: [-108.57253071830549, 39.06948251407954]
                            }
                        }]
                    }
                });

                map.addLayer({
                    id: 'point',
                    type: 'circle',
                    source: 'point',
                    paint: {
                        'circle-radius': 8,
                        'circle-stroke-width': 2,
                        'circle-color': 'red',
                        'circle-stroke-color': 'white'
                    }
                });
            });
        }
    }
}
</script>
