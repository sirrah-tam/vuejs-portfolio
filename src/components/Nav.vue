<template lang="html">
    <div class="main-nav">
        <ul class="navbar-nav flex-row ml-auto">
            <li v-for="link in links" class="nav-item">
                <router-link :to="link.link" class="nav-link px-3">{{link.name}}</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'main-nav',

    props: {
        links: Array
    }
}
</script>

<style lang="css">
</style>
