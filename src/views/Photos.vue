<template>
    <div id="photos" @wheel="picScroll">
        <!-- <div v-for="(i, index) in 5" :key="index" class="flow"></div> -->
        <div class="flow"></div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            flowlist: null
        }
    },
    mounted: function () {
        this.flowlist = document.getElementsByClassName('flow');
        this.addItems(this.flowlist, 1);    // 插入照片
    },
    methods: {
		addItems: function (elements, times) {
			for (var j = 0; j < times; j++) {
				for (var i = 0; i < elements.length; i++) {
					var newnode = document.createElement("div");
					newnode.style.background = "#159";  
	           		newnode.style.width = "90%";
	           		newnode.style.height = this.getRandom(100, 200) + "px";
	          		newnode.style.margin = "10px";  
					elements[i].appendChild(newnode);
				};
			};
        },
        getRandom: function (min, max) { //模拟随机高度[100, 201]
        	var x = max;  
        	var y = min;  
        	if (x < y) { 
            	x = min; 
            	y = max; 
        	} 
        	var rand = parseInt(Math.random() * (x - y + 1) + y); 
        	return rand; 
        },
        picScroll: function (e) {    // 监听滚轮滚动事件，区别onscroll
            console.log(e);
            // 被卷去的高度	
            // var scrollTop = document.getElementById('photos').scrollTop;
            // console.log(scrollTop);
            // // 页面高度
            // var pageHeight = document.documentElement.scrollHeight;
            // // 可视区域高度 
            // var viewHeight = screen.availHeight;
            // console.log("被卷去的高度:" + scrollTop + " " + "页面高度:"+pageHeight + " "+"可视区域高度:" + viewHeight);
            //当滚动到底部时 
            // if ((scrollTop + viewHeight) > (pageHeight - 20)) { 
            //     if(scrollTop < 4000) {//防止无限制的增长 
            //         this.addItems(this.flowlist, 2);
            //     } 
            // } 
            // this.addItems(this.flowlist, 1);            
            // if (pageHeight > 2000) {
            //     return;
            // }
        }
    }
}
</script>

<style scoped>
#photos {
    width: 840px;
    height: inherit;
    padding: 60px 0 60px 0;
    margin: 0 auto;
    /* overflow: scroll; */
}
.flow{
    float: left;
    width: 200px;
    margin: 5px;
    background: #ABC;
}
</style>