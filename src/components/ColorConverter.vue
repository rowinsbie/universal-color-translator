<script>
import { defineComponent } from 'vue';
import colors from '../assets/colors.json';
import DOMPurify from 'dompurify';
export default defineComponent({
  data() {
    return {
      colorName: "",
      colors: colors,
      hex: null,
      isInputSafe:true,
      isEmpty:false,
    }
  },
  methods: {
    setHex(hex) {
      this.hex = hex;
    },
    getHex() {
      return this.hex;
    },
    resetHex() {
      this.hex = null;
    },
    sanitizeKeyword() {
      const userInput = this.$refs.colorName.value;
      this.colorName = DOMPurify.sanitize(userInput);
      this.isInputSafe = (this.getKeyword() == userInput);
    },
    getKeyword() {
      return this.colorName;
    },
    convertColor() {
      this.isEmpty = this.checkIfEmpty();
      this.sanitizeKeyword();
      this.resetHex();
      if (this.getKeyword() in this.colors) {
        this.setHex(this.colors[this.colorName]);
      }
    },
    isSafe() {
      return this.isInputSafe;
    },
    checkIfEmpty() {
      return this.$refs.colorName.value.length <= 0;
    },
  },
});
</script>
<template>
  <div class="flex flex-col items-center space-y-4">
    <input ref="colorName" @keyup.enter="convertColor" type="text"
      class="w-full max-w-md text-gray-800 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter color name...">
      <button  type="button" @click="convertColor" class="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:from-green-600 hover:to-blue-600 hover:shadow-lg transition duration-300">
    Translate
</button>
    <div class="text-1xl font-bold p-4">
      <span v-if="getHex() != null">
        Hex: <span :style="{ color: getHex() }">{{ getHex() }}</span>
      </span>
      <span  v-else-if="getHex() == null && getKeyword() != ''">No data found for <span class=" text-red-600">{{ getKeyword() }}</span>.</span>
      <span class=" text-red-600" v-else-if="isSafe() == false">Security Alert: Your input was rejected due to potential XSS (Cross-Site Scripting) content. Please remove any special characters or HTML tags from your input and try again.</span>
      <span class=" text-red-600" v-else-if="isEmpty">Please enter a color name</span>
    </div>
  </div>
</template>
<style scoped></style>
