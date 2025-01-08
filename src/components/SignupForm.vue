<template>
    <form class="w-full max-w-sm">
      <h2 class="text-xl font-semibold mb-4">Signup</h2>
      <input type="text" placeholder="Name" class="w-full mb-2 p-2 border rounded" />
      <input type="text" placeholder="Email" class="w-full mb-2 p-2 border rounded" />
      <input type="password" placeholder="Password" class="w-full mb-2 p-2 border rounded" />
      <button type="submit" class="w-full p-2 bg-green-500 text-white rounded">
        Signup
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'SignupForm',
  };
  </script>
  