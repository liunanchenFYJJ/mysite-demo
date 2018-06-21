<template>
    <div>
        <cus-header />
        <form class="form-signin" action="/test">
            <h1 class="h4 font-weight-normal">Please sign up</h1>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required minlength="6">
            <button class="btn btn-lg btn-info btn-block" type="submit" @click="signup">Sign up</button>
            <p class="text-primary">&copy;我的copyright</p>
        </form>
    </div>
</template>
<script>
import CusHeader from '@/components/Cus-header'
export default {
    components: { CusHeader },
    data: function () {
        return {
            
        }
    },
    methods: {
        signup: function () {
            location.href = '/success';
        }
    }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>


