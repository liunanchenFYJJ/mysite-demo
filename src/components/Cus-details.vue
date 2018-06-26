<template>
    <div class="details">
        <blockquote><span>{{obj.name}}</span></blockquote>
        <p>{{obj.episode}}</p>
    </div>
</template>
<script>
export default {
    props: {
        obj: {
            type: Object
        }
    },
    data: function () {
        return {
            data: [
                // {time: new Date(1977, 4,25), episode: 4, name: 'A New Hope'},
                // {time: new Date(1980, 4,17), episode: 5, name: 'The Empire Strikes Back'},
                // {time: new Date(1984, 4,25), episode: 6, name: 'Return of the Jedi'},
                // {time: new Date(1999, 4,19), episode: 1, name: 'The Phantom Menace'},
                // {time: new Date(2002, 4,16), episode: 2, name: 'Attack of the Clones'},
                // {time: new Date(2005, 4,19), episode: 3, name: 'Revenge of the Sith'},
                {time: new Date(2018,6,11), episode: 1, name: 'The Force Awakens1'},
                {time: new Date(2018,6,20), episode: 2, name: 'The Force Awakens2'},
                {time: new Date(2018,6,16), episode: 3, name: 'The Force Awakens3'},
                {time: new Date(2018,6,19), episode: 4, name: 'The Force Awakens4'},
            ]
        }
    }
}
</script>

