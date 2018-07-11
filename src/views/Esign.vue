<template>
    <div>
        <div class="canvasDiv">
			<div id="editing_area">
				<canvas id="canvasEdit"></canvas>
			</div>
		</div>
        
		<div class="imgDiv">
			<span id="sign_show"></span>
		</div>
		
		<div class="btnDiv">
			<a id="sign_clear" class="clearBtn">清除</a>
			<!-- <a id="sign_ok" class="okBtn">确认</a> -->
			<a id="sign_download" @click="download">下载</a>
		</div>
    </div>
</template>
<script>
export default {
    mounted: function() {
        this.initEsign();
    },
    methods: {
        initEsign: function () {
			$(document).esign("canvasEdit", "sign_show", "sign_clear", "sign_ok");            
        },
        download: function (e) {
            e.preventDefault();
            var canvasData = $('#editing_area').children('canvas'); //获取图片
            console.log(canvasData);
            var a = document.createElement("a");    //创建a标签并点击
            a.href = canvasData[0].toDataURL();;
            a.download = "signature";
            a.click();
        }
    }
}
</script>

<style scoped>
    .canvasDiv {
        width: 800px;
        height: 500px;
        border: 1px solid gray;
    }

    #editing_area {
        width: 800px;
        height: 500px;
        border: 1px solid darkred;
    }
    #canvasEdit {
        width: 800px;
        height: 500px;
        border: 1px solid gold;
    }
    a:hover {
        cursor: pointer;
    }
</style>
