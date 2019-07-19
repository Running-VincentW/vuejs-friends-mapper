<template>
    <div>
        <SinglePinMap v-if="loaded" v-bind:location="user.location"/>
        <div class="card" v-if="user !== null">
            <div class="card-content">
                <h2><b-icon icon="address-card"></b-icon>{{user.name.first}} {{user.name.last}}</h2>
                <ul>
                    <li><b-icon icon="at"></b-icon>{{user.email}}</li>
                    <li v-if="readablelocation !== null">
                        <b-icon icon="map-marker" type="is-success"></b-icon>
                        {{readablelocation.annotations.flag}} {{readablelocation.formatted}}</li>
                    <li v-if="readablelocation === null">
                        <b-icon icon="spinner" custom-class="fa-spin"></b-icon>
                        Estimating location.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import * as opencage from 'opencage-api-client';
import SinglePinMap from '@/components/SinglePinMap.vue';
import axios from 'axios';
// import { longStackSupport } from 'q';

export default {
    name: "FriendDetail",
    props: ["id"],
    data(){
        return {
            user: null,
            readablelocation: null,
            loaded: false,
        }
    },
    components:{
        SinglePinMap
    },
    mounted(){
        this.getUser();
    },
    methods:{
        getUser() {
            // i cannot find the documentation to get the user based on id,
            // so do a get all then filter
            console.log("Getting user info for id " + this.id);
            axios.get('https://next.json-generator.com/api/json/get/41P1_UhSI')
                .then(
                    res => {
                        this.user = res.data.filter(user => user._id == this.id)[0];
                        this.getReadableLocation();
                        this.loaded = true;
                    }
                )
                .catch(err => console.log(err));
        },
        getReadableLocation() {
                opencage
                    .geocode({
                        key: '134a224a5d7b448b840d11ea55be6f62',
                        q: (this.user.location.latitude + ", " + this.user.location.longitude),
                        language: 'native',
                        limit: 1
                    })
                    .then(response => {
                        this.readablelocation = response.results[0];
                    })
                    .catch(err => {
                        console.error(err);
                    });
                    
        }
    },
}
</script>

<style>

</style>
