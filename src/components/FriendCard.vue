<template>
    <div>
        <router-link :to="{ name:'frienddetails', params:{id: friend._id}}">
        <div class="card" style="margin: 0.5em;">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img :src="friend.picture" :alt="friend.name.first">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{friend.name.first}} {{friend.name.last}}</p>
                    <p class="subtitle is-6">{{friend.email}}</p>
                </div>
                </div>
            </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "FriendCard",
    props: ["friend"],
}
</script>

<style>

</style>
