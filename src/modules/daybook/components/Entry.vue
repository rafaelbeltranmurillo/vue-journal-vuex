<template>
  <div class="entry-cointainer mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 }})">

      <!-- Title -->
      <div class="entry-title d-flex">
          <spa class="text-success fs-5 fw-bold">28</spa>
          <spa class="mx-1 fs-5">Julio</spa>
          <spa class="mx-2 fw-light">2022, viernes</spa>
      </div>

      <div class="entry-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique porro natus quae voluptatum esse officiis magnam nulla sunt vel, impedit nam molestias ipsum iste provident quidem alias in qui.
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .entry-cointainer{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-description {
            font-size: 12px;
        }
    }


</style>