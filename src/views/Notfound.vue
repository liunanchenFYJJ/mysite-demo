<template>
    <div class="notfound row">
        <div class="col-md-8 col-md-offset-2">
            <h1 class="text-danger">&nbsp;<span class="glyphicon glyphicon-remove-circle"></span>&nbsp;404&nbsp;<span class="text-info h3">Page lost~</span></h1>
            <img src="../assets/notfound.gif" alt="notfound-page">
            <h3>Or you can <span class="h2"><a href="/layout/home">back to home<span class="glyphicon glyphicon-plane"></span></a></span></h3>
        </div>
    </div>
</template>
<script>
import anime from 'animejs'
export default {
    mounted: function () {
        anime({
            targets: 'div.row',
            translateX: [
                { value: 100, duration: 1200 },
                { value: 0, duration: 800 }
            ],
            rotate: '1turn',
            backgroundColor: '#FFF',
            duration: 2000,
            loop: false
        });
    }
}
</script>

<style scoped>
.notfound {
    height: 100%;
    width: 100%;
    margin: 0 0 0 0;
    font-family: fantasy;    
}
a:hover {
    text-decoration-line: none;
    cursor: pointer;
}
</style>

