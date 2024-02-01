<template>
  <!-- <UHorizontalNavigation :links="links" /> -->
  <div class="header fixed w-full border-b border-b-primary z-10 bg-white">
    <BaseNavBar></BaseNavBar>
  </div>
</template>

<script setup>
const route = useRoute();

// import type { UHorizontalNavigation } from '#ui/types'

// export interface Props {
//   links: BreadcrumbLink[]
// }

// defineProps<Props>()

const links = [
  [
    {
      label: "Installation",
      icon: "i-heroicons-home",
      to: "/getting-started/installation",
    },
    {
      label: "Horizontal Navigation",
      icon: "i-heroicons-chart-bar",
      to: `${
        route.path.startsWith("/dev") ? "/dev" : ""
      }/components/horizontal-navigation`,
    },
    {
      label: "Command Palette",
      icon: "i-heroicons-command-line",
      to: "/components/command-palette",
    },
  ],
  [
    {
      label: "Examples",
      icon: "i-heroicons-light-bulb",
    },
    {
      label: "Help",
      icon: "i-heroicons-question-mark-circle",
    },
  ],
];
</script>
