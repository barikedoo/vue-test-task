<template>
    <div class="ma-2">
        <!-- Ссылки реализованы внешние, если предполагаетя, что ссылки будут внутреними, вместо <a> будет использован <router-link> -->
        <a href="http://google.com" >
            <img src="https://picsum.photos/400/400/?random" alt="some random pic" class="slider-image">
        </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style>
.slider-image {
    width: 100%;
    max-width: 450px;
    height: auto;
}
</style>
