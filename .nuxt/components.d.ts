
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'Share': typeof import("../components/Share.vue")['default']
    'IconFacebook': typeof import("../assets/icons/facebook")['default']
    'IconIg': typeof import("../assets/icons/ig")['default']
    'IconLinkedIn': typeof import("../assets/icons/linked-in")['default']
    'IconXblack': typeof import("../assets/icons/xblack")['default']
    'IconXgreen': typeof import("../assets/icons/xgreen")['default']
    'IconYoutube': typeof import("../assets/icons/youtube")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtIcon': typeof import("../node_modules/.pnpm/nuxt-svgo@4.0.6_magicast@0.3.5_rollup@4.24.0_vue@3.5.12/node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyShare': typeof import("../components/Share.vue")['default']
    'LazyIconFacebook': typeof import("../assets/icons/facebook")['default']
    'LazyIconIg': typeof import("../assets/icons/ig")['default']
    'LazyIconLinkedIn': typeof import("../assets/icons/linked-in")['default']
    'LazyIconXblack': typeof import("../assets/icons/xblack")['default']
    'LazyIconXgreen': typeof import("../assets/icons/xgreen")['default']
    'LazyIconYoutube': typeof import("../assets/icons/youtube")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtIcon': typeof import("../node_modules/.pnpm/nuxt-svgo@4.0.6_magicast@0.3.5_rollup@4.24.0_vue@3.5.12/node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'LazyNuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
    'LazyNoScript': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Share: typeof import("../components/Share.vue")['default']
export const IconFacebook: typeof import("../assets/icons/facebook")['default']
export const IconIg: typeof import("../assets/icons/ig")['default']
export const IconLinkedIn: typeof import("../assets/icons/linked-in")['default']
export const IconXblack: typeof import("../assets/icons/xblack")['default']
export const IconXgreen: typeof import("../assets/icons/xgreen")['default']
export const IconYoutube: typeof import("../assets/icons/youtube")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtIcon: typeof import("../node_modules/.pnpm/nuxt-svgo@4.0.6_magicast@0.3.5_rollup@4.24.0_vue@3.5.12/node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyShare: typeof import("../components/Share.vue")['default']
export const LazyIconFacebook: typeof import("../assets/icons/facebook")['default']
export const LazyIconIg: typeof import("../assets/icons/ig")['default']
export const LazyIconLinkedIn: typeof import("../assets/icons/linked-in")['default']
export const LazyIconXblack: typeof import("../assets/icons/xblack")['default']
export const LazyIconXgreen: typeof import("../assets/icons/xgreen")['default']
export const LazyIconYoutube: typeof import("../assets/icons/youtube")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtIcon: typeof import("../node_modules/.pnpm/nuxt-svgo@4.0.6_magicast@0.3.5_rollup@4.24.0_vue@3.5.12/node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
export const LazyNuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const LazyNoScript: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.9_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_jpxidtc2435s4mxezwb6phvyei/node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
