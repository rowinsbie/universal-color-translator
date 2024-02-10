<script>
import ColorTranslator from './components/ColorTranslator.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ColorTranslator
  }
});
</script>

<template>
  <div>
    <div
      class="text-4xl text-center bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text  font-bold">
      Universal Color Translator</div>
      <div class="text-center font-bold pb-3">
        <p>Translate color name to HEX</p>
      </div>
    <ColorTranslator />
  </div>
</template>

<style scoped></style>
