<template>
    <div class="calendar">
        <div class="month">      
            <ul>
                <li class="prev" @click="changeMonth">❮</li>
                <li class="next" @click="changeMonth">❯</li>
                <li style="text-align:center">{{month}}<br>
                    <span style="font-size:18px">{{year}}</span>
                    <span v-if="leapYear">闰年</span>
                    <span v-else>平年</span>
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
            <li v-for="i in this.firstday" :key="i + 1000"></li>
            <li @click="selectDate" v-for="i in this.monthDays" :key="i">
                <span class="active" v-if="i == date">{{i}}</span>
                <span v-else>{{i}}</span>
            </li>
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
            monthDays: '',  //当月的天数
            date: '',
            firstday: ''
        }
    },
    created: function () {
        this.getYear();     //获取年份，判断奇偶年
        this.getMonth();    //获取月份，判断每月天数
        this.getDay();      //获取今天日期
        this.getWeek(this.year, this.month, 1);     //判断每月1号星期几
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
        getMonth: function (month) {
            var date = new Date();
            this.month = (date.getMonth() + 1) || month;
            console.log(month);
            switch (this.month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 9:
                case 11:
                    return this.monthDays = 31;
                    break;
                case 4:
                case 6:
                case 8:
                case 10:
                case 12:
                    return this.monthDays = 30;
                    break;
                default:
                    if (this.leapYear == true) {
                        return this.monthDays = 29;                    
                    } else {
                        return this.monthDays = 28;                    
                    }
                    break;
            }
        },
        getDay: function () {
            var date = new Date();
            this.date = date.getDate();  
        },
        getWeek: function (year, month, date) {
            var firstday = new Date(year, month - 1, date);
            this.firstday = firstday.getDay();
        },
        selectDate: function (e) {
            if (!e.target.className) {
                e.target.className = 'active1';
            }
        },
        changeMonth: function (e) {
            if (e.target.className == 'prev') {
                this.month--;
                if (this.month < 1) {
                    this.year -= 1;
                    this.month = 12;
                }
            } else {
                this.month++;
                if (this.month > 12) {
                    this.year += 1;
                    this.month = 1;
                }
            }
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

.month .prev:hover, .month .next:hover {
    cursor: pointer;
    color: rebeccapurple;
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
    width: 13.2%;
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
.active1 {
    padding: 5px;
    background:red;
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

