export type PlatformUnions = 'facebook' | 'twitter' | 'linkedin' | 'email'

export type PlatformKeysConditionalTypes =
  | { platform: PlatformUnions; platforms?: never }
  | { platform?: never; platforms: Array<PlatformUnions> }

export interface ShareProperties {
  platform: PlatformUnions
  url: string
  icon: string
}