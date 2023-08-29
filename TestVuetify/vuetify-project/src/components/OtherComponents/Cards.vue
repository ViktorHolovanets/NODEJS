<script setup lang="ts">
const props = defineProps({
  img:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  subtitle:String
});
</script>

<template>
  <div class="cards_item">
    <div class="card">
      <div class="card_image"><img :src="img" alt="Avatar band"></div>
      <div class="card_content">
        <div class="bg-black text-h3">{{ title }}</div>
        <div class="card_text">
          <p>{{ subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cards_item {
  display: flex;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  background-color: #79797a;
  border-radius: 10px;
}

.card_image {
  max-height: 50ch;
  margin-top: -24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100px;
    position: relative;
    top: -100px;
    background: linear-gradient(0deg, #091014 10%, rgba(0, 0, 0, 0) 100%);
  }
}

.card {
  background-color: #091014;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}

.card_content {
  padding: 1rem;
  z-index: 1;
  display: block;
}

.card_text {
  color: #DDDACB;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
}
</style>
