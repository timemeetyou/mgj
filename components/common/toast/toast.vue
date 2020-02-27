<template>
  <div v-show="isShow" class="toast">
    <span class="message">{{message}}</span>
  </div>
</template>
<script>
import { debounce } from "../../../common/utils.js";
export default {
  name: "Toast",
  components: {},
  data() {
    return {
      message: "",
      isShow: false,
      timer: {}
    };
  },
  methods: {
    show(message, time = 1500) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
        this.isShow = true;
        this.message = message;

        this.timer = setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, time);
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 75%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.65);
  color: #fff;
  padding: 8px 15px;
  z-index: 9999;
  font-size: 16px;
  transform: translate(-50%, 0);
  border-radius: 20px;
}
</style>
