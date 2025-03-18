<template>
  <div class="background-container">
    <div class="background-image"></div>
    <div class="overlay"></div>
  </div>  

  <div class="login-form">
    <h2>Đăng nhập / Đăng ký</h2>
    <div class="form-group">
      <label class="form-label">Email/số điện thoại di động</label>
      <input
        type="text"
        v-model="email"
        placeholder="+84 hoặc yourname@gmail.com"
        class="form-input"
        :class="{ 'error': errorMessage }"
      />
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
    <button 
      class="sign-in-btn" 
      @click="handleSignIn"
      :disabled="loading || !email"
    >
      {{ loading ? 'Đang xử lý...' : 'Sign In' }}
    </button>
    <div class="divider">hoặc</div>
    <div class="social-login">
      <button 
        class="google-btn"
        @click="handleGoogleSignIn"
        :disabled="loading"
      >
        <img src="/google-icon.svg" alt="Google" />
        Google
      </button>
      <button 
        class="facebook-btn"
        @click="handleFacebookSignIn"
        :disabled="loading"
      >
        <img src="/facebook-icon.svg" alt="Facebook" />
        Facebook
      </button>
    </div>
    <a href="#" class="forgot-password">Bạn quên mật khẩu?</a>
  </div>
</template>

<script setup>
import { useLoginForm } from '../composables/useLoginForm'

const {
  email,
  loading,
  errorMessage,
  isValidInput,
  handleSignIn,
  handleGoogleSignIn,
  handleFacebookSignIn
} = useLoginForm()
</script>

<style>
@import '../assets/styles/LoginForm.css';
</style>