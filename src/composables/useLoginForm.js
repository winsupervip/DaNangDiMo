import { ref, computed } from 'vue'

export function useLoginForm() {
  const email = ref('')
  const loading = ref(false)
  const errorMessage = ref('')

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhone = (phone) => {
    const phoneRegex = /^\+?84[0-9]{9,10}$/
    return phoneRegex.test(phone)
  }

  const isValidInput = computed(() => {
    return isValidEmail(email.value) || isValidPhone(email.value)
  })

  const handleSignIn = async () => {
    if (!isValidInput.value) {
      errorMessage.value = 'Vui lòng nhập email hoặc số điện thoại hợp lệ'
      return
    }
    loading.value = true
    errorMessage.value = ''
    try {
      // TODO: Implement actual sign in logic here
      console.log('Signing in with:', email.value)
    } catch (error) {
      errorMessage.value = 'Đã có lỗi xảy ra. Vui lòng thử lại sau.'
    } finally {
      loading.value = false
    }
  }

  const handleGoogleSignIn = async () => {
    loading.value = true
    errorMessage.value = ''
    try {
      // TODO: Implement Google sign in logic here
      console.log('Signing in with Google')
    } catch (error) {
      errorMessage.value = 'Đăng nhập bằng Google thất bại'
    } finally {
      loading.value = false
    }
  }

  const handleFacebookSignIn = async () => {
    loading.value = true
    errorMessage.value = ''
    try {
      // TODO: Implement Facebook sign in logic here
      console.log('Signing in with Facebook')
    } catch (error) {
      errorMessage.value = 'Đăng nhập bằng Facebook thất bại'
    } finally {
      loading.value = false
    }
  }

  return {
    email,
    loading,
    errorMessage,
    isValidInput,
    handleSignIn,
    handleGoogleSignIn,
    handleFacebookSignIn
  }
}