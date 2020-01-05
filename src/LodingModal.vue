

<template>
  <transition
    name="loader"
    @after-leave="afterLeave"
  >
    <div
      v-if="show"
      :class="['overlay', error ? 'is-err' : '']"
    >
      <div class="loader" />
    </div>
  </transition>
</template>

<script>
export default {
  props: ["show", "error"],
  computed: {
    i() {
      if(this.error) console.log("error!!!")
      return "a"
    }
  },
  methods: {
    afterLeave() {
      this.$emit("loaded")
    }
  }
}
</script>

<style lang="scss" scoped>

$spinner-width: 40px;
$blue: #0076d3;
$btn-bg: #8BC34A;
$text-light: #fefefe;

.overlay {
  background-color: rgba(255,255,255, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loader{
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #000;
  &:before, &:after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &:after{
    width: $spinner-width;
    height: $spinner-width;
    border: 4px solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    animation: spin linear 1s infinite;
  }
  &:before{
    width: $spinner-width/2;
    height: $spinner-width/4;
    border: 3px solid #fff;
    border-right: 0;
    border-top: 0;
    transform: rotate(0deg) scale(0);
    animation-delay: 2.5s;
  }
}

.loader-enter-active, .loader-leave-active {
  transition: opacity .25s;
}

.loader-enter, .loader-leave-to {
  opacity: 0;
}

.loader-leave-active {
  transition-delay: .5s;
  .loader {
    &:after {
      content: normal;
    }
    &:before {
      animation: success ease-in .15s forwards;
    }
  }
}

.is-err {
    .loader {
      &:before {
        font-size: 20px;
        font-weight: bold;
        content: "!";
        animation: error ease-in .15s forwards !important;
      }
    }
  }

    
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes success{
  from {
      transform: rotate(0) scale(0);
      }
  to {
    transform: rotate(-45deg) scale(1);
  }
}

@keyframes error{
  from {
      transform: scale(0);
      }
  to {
    transform: scale(1);
  }
}
</style>