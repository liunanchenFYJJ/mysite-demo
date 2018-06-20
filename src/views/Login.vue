<template>
    <div class="row jumbotron">
        <div class="container col-md-4 col-xs-6 col-md-offset-4 col-xs-offset-3">
            <form>
                <div class="form-group">
                    <label for="email">邮箱</label>
                    <input type="email" class="form-control" v-model="email" @change="validateEmail" placeholder="you@example.com">
                    <cus-alert v-bind:show="ok">Enter a valid email address</cus-alert>
                </div>
                <div class="form-group">
                    <label for="password">密码</label>
                    <input type="password" class="form-control" v-model="password" @change="validatePassword" placeholder="password">
                    <cus-alert v-bind:show="ok1">密码错误</cus-alert>
                </div>
                <div class="checkbox">
                    <label>
                    <input type="checkbox" v-model="remeberMe">记住我
                    </label>
                </div>
                <button type="submit" class="btn btn-info" @click="submit">提交</button>
            </form>
        </div>
    </div>
</template>
<script>
import CusAlert from '@/components/cus-alert'
export default {
    name: 'Login',
    components: { CusAlert },
    data: function () {
        return {
            email: 'example.com',
            password: '123456',
            remeberMe: true,
            ok: false,
            ok1: false,
        }
    },
    // props: {
    //     email: Number,
    //     password: {
    //         validator: function (value) {
    //             return value > 100;
    //         }
    //     }
    // },
    methods: {
        submit: function (e) {
            e.preventDefault();
            console.log('submit');
        },
        validateEmail: function () {
            var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            if (reg.test(this.email)) {
                console.log('success');
            } else {
                this.ok = true;               
            }
        },
        validatePassword: function () {
            if (this.password.length >= 6) {
                console.log('success');
            } else {
                this.ok1 = true;                
            }
        }
    }
}
</script>

<style scoped>

</style>

