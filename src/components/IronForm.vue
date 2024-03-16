<script setup>
import IronInput from '@/components/IronInput.vue'
import { reactive } from 'vue'

const myInputs = [
  { id: 'username', title: 'Username', type: 'text', value: 'NachoSizle' },
  { id: 'email', title: 'Email', type: 'email', value: 'nacho@gmail.com' },
  { id: 'phone', title: 'Phone', type: 'tel', value: '123-456-7890'},
  { id: 'password', title: 'Password', type: 'password', value: 'sadasdasdasd' },
  { id: 'comments', title: 'Comments!', type: 'textarea', value: '' },
  { id: 'subscribed', title: 'Subscribed!', type: 'checkbox', value: 'true' },
]

const formModel = reactive({
  username: myInputs.find(input => input.id === 'username').value,
  email: myInputs.find(input => input.id === 'email').value,
  phone: myInputs.find(input => input.id === 'phone').value,
  password: myInputs.find(input => input.id === 'password').value,
  subscribed: myInputs.find(input => input.id === 'subscribed').value
})

function _updateInput(value, inputId) {
  formModel[inputId] = value
}

function _saveData() {
  console.log('Form Model ----> ', formModel)
}
</script>

<template>
  <form>
    <IronInput v-for="(input, index) in myInputs" :key="index"
     :id="input.id"
     :title="input.title"
     :type="input.type"
     :value="input.value"
     @update:input="_updateInput"/>
  </form>
  <button @click="_saveData">Save Data</button>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>