<template>
  <LayoutPage>
    <template #login>
      <LoginForm />
    </template>
    <template #signup>
      <SignupForm />
    </template>555
  </LayoutPage>
</template>

<script>
import LoginForm from './LoginForm.vue'
import SignupForm from './SignupForm.vue'
import LayoutPage from './LayoutPage.vue'

export default {
    components: {
        LoginForm,
        SignupForm,
        LayoutPage,
    },
}
</script>

<style>

</style>