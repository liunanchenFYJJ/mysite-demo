<template>
    <div id="photos" @wheel="picScroll">
        <div v-for="(i, index) in 4" :key="index" class="flow"></div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            flowlist: null,
            pageHeight: 0,      // 监听，根据pageHeight进行加载
            height: 0,          // 每列的高度
            heightAll: []       // 所有的高度
        }
    },
    mounted: function () {
        this.flowlist = document.getElementsByClassName('flow');
        this.addItems(this.flowlist, 4);    // 插入照片
        this.getHeight();
    },
    watch: {
        pageHeight: function (np, op) {
            if (np - op > 600) {
                this.addItems(this.flowlist, 1);            
            } else {
                this.addItems(this.flowlist, 1);                            
            }
        }
    },
    methods: {
		addItems: function (elements, times) {
			for (var j = 0; j < times; j++) {
				for (var i = 0; i < elements.length; i++) {
					var newnode = document.createElement("div");
                    newnode.style.background = "#159";  
                    // newnode.style.backgroundImage = 'url("@/assets/notfound.gif")';
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
            // 页面高度
            if (e.wheelDelta < 0) {     // 只有往下滑动，才会加载新图片
                this.pageHeight = document.documentElement.scrollHeight;
            }
            this.getHeight();       
        },
        getHeight: function () {
            this.heightAll = [];
            for (let i = 0; i < document.getElementsByClassName('flow').length; i++) {
                var a  = document.getElementsByClassName('flow')[i].children;
                this.heightAll.push(this.getSingleHeight(a));
            }
            console.log(this.heightAll);
        },
        getSingleHeight: function (element) {   //取得单一的高度
            var heightArr = [];
            var intheightArr = 0;         
            for (let i = 0; i < element.length; i++) {
                const singleElement = element[i];
                heightArr.push(singleElement.style.height.split('px').join(''));
            }
            for (let j = 0; j < heightArr.length; j++) {
                intheightArr += parseInt(heightArr[j]);
            }
            return intheightArr;
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