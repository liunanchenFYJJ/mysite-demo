<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><cus-header /></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav" @click="changeStyle" id="nav">
                    <li><a href="/layout/home">home</a></li>
                    <li><a href="/layout/blog">blog</a></li>
                    <li><a href="/layout/about">about</a></li>
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li class=“login”><a href="/login">登陆</a><a href="/registe">注册</a></li>                        
                    <!-- 如果用户登陆，才显示                         -->
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">当前用户 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">用户信息</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="/logout">退出登陆</a></li>
                    </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>
<script>
import CusHeader from '@/components/Cus-header'
export default {
    components: { CusHeader },
    data: function () {
        return {
            title: ''
        }
    },
    mounted: function () {
        this.title = sessionStorage.getItem('navActive');
        $('#nav li').removeClass();
        $('#nav li:contains("'+ this.title +'")').addClass('active');
    },
    methods: {
        changeStyle: function (e) {
            this.title = e.target.innerText;
            $('#nav li').removeClass();
            $('#nav li:contains("'+ this.title +'")').addClass('active');
            sessionStorage.setItem('navActive', this.title);    //存入sessionStorage，每次刷新可以保持上一次的选择
        }
    }
}
</script>
<style scoped>
/* a标签点击前后样式？ */
li > a {
    display:inline-block;
}
nav {
    margin-bottom: 0px;
}
.nav > li:hover {
    background-color: teal;
}
.nav > li > a:hover {
    color: white;
}
/* .navActive {
    background-color: springgreen;
} */
</style>


