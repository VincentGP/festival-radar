<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['bgColor', 'fontSize']
}
</script>

<style lang="scss" scoped>

.btn {  
  background: #f7f8f9;
  height: 48px;
  padding: 0 20px;
  border: 2px solid #93B6B7;
  border-radius: 25px;
  transition: background 0.3s, color 0.3s;
  text-transform: uppercase;

  &:hover {
    background: #93B6B7;
    color: white;
  }

  &--small {
    height: 30px;
    padding: 0 10px;
  }

  &--gray {
    border: 2px solid #D8D8D8;

    &:hover {
      background: #D8D8D8;
      color: black;
    }
  }


}

</style>
