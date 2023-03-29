<script>
import metadata from '~~/helpers/metadata';
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    useHead(metadata('webiste.title'));
    return {}
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      alert('화면이 클릭되었습니다.')
    }
  }
})
</script>
<template>
  <div class="prose min-h-screen" @click="handleClick">
    <h1>Hello, World!</h1>
  </div>
</template>