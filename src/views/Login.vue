<template>
    <div class="row jumbotron">
        <div class="container col-md-4 col-xs-6 col-md-offset-4 col-xs-offset-3">
            <cus-header />
            <form>
                <div class="form-group">
                    <label for="email">邮箱</label>
                    <input id="email" type="email" class="form-control" v-model="email" @blur="validateEmail" placeholder="you@example.com" autofocus>
                    <cus-alert v-bind:show="ok">Enter a valid email address</cus-alert>
                </div>
                <div class="form-group">
                    <label for="password">密码</label>
                    <input id="password" type="password" class="form-control" v-model="password" @blur="validatePassword" placeholder="password">
                    <cus-alert v-bind:show="ok1">密码错误</cus-alert>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="remeberMe">记住我
                    </label>
                    <label>
                        <a>忘记密码?</a>
                    </label>
                </div>
                <button type="submit" class="btn btn-info" @click="submit">提交</button>
            </form>
        </div>
    </div>
</template>
<script>
import CusAlert from '@/components/cus-alert'
import CusHeader from '@/components/Cus-header'
export default {
    name: 'Login',
    components: { CusAlert, CusHeader },
    data: function () {
        return {
            email: '',
            password: '',
            remeberMe: false,
            ok: false,
            ok1: false,
        }
    },
    methods: {
        submit: function (e) {
            e.preventDefault();
            // 模拟操作
            // $('#email').trigger('blur');
            // $('#password').trigger('blur');
            $('#email').blur(this.validateEmail());
            $('#password').blur(this.validatePassword());

            if (false) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }

            $.post('/', {username: this.username, password: this.password}, function (data) {
                console.log(data);
            })

            // 如果记住我，存入cookie
            if (this.remeberMe == true) {
                
            }
        },
        validateEmail: function () {
            var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            if (reg.test(this.email)) {
                this.ok = false;                
            } else {
                this.ok = true;
            }
        },
        validatePassword: function () {
            if (this.password.length >= 6) {
                this.ok1 = false; 
            } else {
                this.ok1 = true;   
            }
        }
    }
}
</script>

<style scoped>
#email:focus, #password:focus{
    background-color: aqua;
}
</style>

