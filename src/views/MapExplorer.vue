<template>
  <div>
    <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 400px"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />

      <l-marker v-for="marker in markers" :key="marker.index" :lat-lng="marker">
        <l-popup>
          <router-link :to="{ name:'frienddetails', params:{id: marker.user_id}}">View</router-link>
          <img width="300" v-bind:src="marker.picture" />
        </l-popup>
      </l-marker>

    </l-map>
  </div>
</template>

<script>
import axios from 'axios';
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { latLng } from "leaflet";
export default {
  name: "MapExplorer",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 10,
      center: latLng(22.338901, 114.201994),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 10,
      currentCenter: latLng(22.338901, 114.201994),
      friends: [],
    };
  },
  computed: {
    markers() {
      const markers = [];
      for (let i = 0; i < this.friends.length; i++) {
        var user = this.friends[i];
        markers.push({
          lat: user.location.latitude,
          lng: user.location.longitude,
          picture: user.picture,
          name: user.name.first + user.name.last,
          user_id: user._id,
          index: i
        });
      }
      return markers;
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  },
  created(){
    console.log("Updating user list...");
    axios.get('https://next.json-generator.com/api/json/get/41P1_UhSI')
    .then(res => this.friends = res.data)
    .catch(err => console.log(err));
  }
};
</script>