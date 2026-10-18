<template>
    <div class="inputbox">
        <label for=""><span class="required">*</span>请输入用户名：</label>
        <input type="text" class="login-input" v-model="username">
    </div>
    <div class="inputbox">
        <label for=""><span class="required">*</span>请输入密码：</label>
        <input type="password" class="login-input" v-model="password">
    </div>
    <div>
        <button class="buttonbox" @click="handleLogin">提交</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from './router';

    const username = ref('')
    const password = ref('')

    function handleLogin() {
        
        if (username.value === 'A01' && password.value === '123456') {
            localStorage.setItem('token', 'logged-in')
            router.push('/home')
        }
        else {
            alert('用户名或密码错误！')
        }
    }
</script>

<style>

</style>