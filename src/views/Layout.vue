<template>
    <div>
        <Cus-nav />
        <!-- <Carousel /> -->
        <router-view />
        <router-view name="custom"/>
        <Sticky-footer />                   
    </div>
</template>

<script>
import CusNav from '@/components/Cus-nav'
import Carousel from '@/components/Carousel'
import StickyFooter from '@/components/Sticky-footer'
export default {
    name: 'Layout',    
    components: { StickyFooter, CusNav, Carousel }
}
</script>

<style scoped>

</style>


