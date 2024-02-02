<template>
  <NuxtLoadingIndicator color="rgb(51 123 208)" />
  <TheHeader></TheHeader>
  <main id="main" class="py-[15vh] min-h-screen">
    <NuxtPage />
  </main>
  <TheFooter></TheFooter>
</template>
<script>
export default {
  name: "DefaultLayout",
};
</script>

<style>
body {
  background: theme("colors.dark")
}
.bg-blue-gradient,
.text-gradient {
  background: linear-gradient(
    136.91deg,
    theme("colors.blue.500") -12.5%,
    #fff 107.5%
  );
}
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-header-gradient {
  background: #3984f4;
  background: linear-gradient(
    169.4deg,
    #3984f4 -6.01%,
    #0cd3ff 36.87%,
    #2f7cf0 78.04%,
    #0e65e8 103.77%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
