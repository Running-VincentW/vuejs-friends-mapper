<template>
  <div class="level">
      <!--<p>Marker is placed at {{ userLocation.lat }}, {{ userLocation.lng }}</p>-->
    <l-map
      :zoom="zoom"
      :center="userLocation"
      :options="mapOptions"
      style="height: 200px"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="userLocation">
        <l-popup>
          <div @click="innerClick">
            {{userLocation}}
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";


export default {
    name: 'SinglePinMap',
    props: ["location"],
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        LTooltip
    },
    data() {
        return {
            zoom: 13,
            url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            userLocation: latLng(this.location.latitude, this.location.longitude),
            mapOptions: {
                zoomSnap: 0.5
            }
        };
    },
    methods: {
        innerClick() {
            // alert("Click!");
        }
    },

}
</script>

<style scoped>
</style>
