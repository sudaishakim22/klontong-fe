<template>
  <div class="grid w-full gap-4">
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

        <div
          v-if="isLoading"
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div class="group relative bg-red-300" v-for="(product, index) in data" :key="index">
            <div
              class="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
            >
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
        </div>
        <div v-else>loading</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useMyProductStore } from "../../stores/product";
  const productStore = useMyProductStore();
  const data = productStore.products;
  const isLoading = productStore.isLoading;

  onMounted(async () => {
    try {
      await productStore.getProduct();
    } catch (error) {
      console.log(error);
    }
  });
</script>

<style></style>
