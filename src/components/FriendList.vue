<template>
    <div>
        <div v-bind:key="friend.id" v-for="friend in friends">
            <FriendCard v-bind:friend="friend" />
        </div>
    </div>
</template>

<script>
import FriendCard from './FriendCard';
export default {
    name: "FriendList",
    components:{
        FriendCard
    },
    props: ["friends"]
}
</script>

<style>

</style>
