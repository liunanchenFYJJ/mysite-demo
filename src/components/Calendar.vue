<template>
    <div class="calendar">
        <div class="month">      
            <ul>
                <li class="prev">❮</li>
                <li class="next">❯</li>
                <li style="text-align:center">{{month}}<br>
                    <span style="font-size:18px">{{year}}</span>
                    <span v-if="leapYear">闰年</span>
                    <span v-else-if="!leapYear">平年</span>
                </li>
            </ul>
        </div>

        <ul class="weekdays">
            <li>Su</li>
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
        </ul>

        <ul class="days">  
            <li v-for="i in (this.date)" v-bind:key="i">{{i}}</li>
            <li><span class="active">{{date}}</span></li>
            <li v-for="i in (30-this.date)" v-bind:key="i + 100">{{date + i}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            year: '',
            leapYear: '',   //判断闰年
            month: '',
            date: '',
            day: ''
        }
    },
    created: function () {
        this.getYear();
        this.getMonth();
        this.getDay();
    },
    methods: {
        getYear: function () {
            var date = new Date();
            this.year = date.getFullYear();
            if (this.year % 400 == 0 || (this.year % 4 == 0 && this.year % 100 != 0)) {
                this.leapYear = true
            } else {
                this.leapYear = false
            }
        },
        getMonth: function () {
            var date = new Date();
            this.month = date.getMonth() + 1;
        },
        getDay: function () {
            var date = new Date();
            this.date = date.getDate();  
            this.day = date.getDay();
            console.log(this.day);
        }
    }
}
</script>

<style scoped>
* {box-sizing:border-box;}
ul {list-style-type: none;}
.calendar {font-family: Verdana,sans-serif;}

.month {
    padding: 10px 15px;
    width: 100%;
    background: #1abc9c;
}

.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.month .prev {
    float: left;
    padding-top: 10px;
}

.month .next {
    float: right;
    padding-top: 10px;
}

.weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
}

.weekdays li {
    display: inline-block;
    width: 12%;
    color: #666;
    text-align: center;
}

.days {
    padding: 10px 0;
    background: #eee;
    margin: 0;
}

.days li {
    list-style-type: none;
    display: inline-block;
    width: 12%;
    text-align: center;
    margin-bottom: 5px;
    font-size:12px;
    color: #777;
}

.days li .active {
    padding: 5px;
    background: #1abc9c;
    color: white !important
}

/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
    .weekdays li, .days li {width: 13.1%;}
}

@media screen and (max-width: 420px) {
    .weekdays li, .days li {width: 12.5%;}
    .days li .active {padding: 2px;}
}

@media screen and (max-width: 290px) {
    .weekdays li, .days li {width: 12.2%;}
}
</style>

