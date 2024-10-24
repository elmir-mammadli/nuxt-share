<script setup lang="ts">
// Define a union type for valid platforms
import type { PlatformUnions, PlatformKeysConditionalTypes, ShareProperties } from '~/types/shareTypes'
import { shareProperties } from '~/utils/shareConfig'
// Define props to accept `PlatformUnions` for single platform or `PlatformUnions[]` for multiple platforms
const props = defineProps<PlatformKeysConditionalTypes>()

const route = useRoute()

// Runtime check to ensure both props are not passed at the same time, throw an error if they are
if (props.platform && props.platforms) {
  throw new Error('You cannot use both "platform" and "platforms" props at the same time.')
}

// Share properties array for each platform

// Access the baseUrl from runtime configuration set in nuxt.config.ts
const config = useRuntimeConfig()
const baseUrl = 'https://example.com'
// Compute current URL for sharing
const getCurrentURL = computed(() => `${baseUrl}${route.fullPath}`)

// Function to find share properties based on a platform
function getSharePropertiesForPlatform (platform: PlatformUnions) {
  return shareProperties.find(item => item.platform === platform)
}

// Function to get the computed URL for a platform
function getShareUrlForPlatform (platform: PlatformUnions) {
  const selectedPlatform = getSharePropertiesForPlatform(platform)
  return `${selectedPlatform?.url}${getCurrentURL.value}`
}

// Function to determine the rendered component (NuxtLink or Button)
// function getRenderedComponentForPlatform (platform: PlatformUnions) {
//   return defineNuxtLink({})
// }
</script>

<template>
  <!-- Multiple platforms mode -->
  <div
    v-if="props.platforms"
    :class="$attrs.class"
  >
    <div
      v-for="element in props.platforms"
      :key="element"
    >
      <NuxtLink
        :to="getShareUrlForPlatform(element)"
        :aria-label="`Share on ${element}`"
        target="_blank"
      >
        <component
          :is="getSharePropertiesForPlatform(element)?.icon"
          class="size-10 rounded-inner"
          :font-controlled="false"
        />
      </NuxtLink>
    </div>
  </div>

  <!-- Single platform mode -->
  <div v-else>
    <NuxtLink
      :to="getShareUrlForPlatform(props.platform)"
      :aria-label="`Share with ${props.platform}`"
      target="_blank"
    >
      <component
        :is="getSharePropertiesForPlatform(props.platform)?.icon"
        class="size-10 rounded-inner"
        :font-controlled="false"
      />
    </NuxtLink>
  </div>
</template>
