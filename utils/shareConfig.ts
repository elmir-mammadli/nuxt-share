import { type ShareProperties } from "~/types/shareTypes"

export const shareProperties: Array<ShareProperties> = [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/sharer/sharer.php?u=',
      icon: 'IconFacebook'
    },
    {
      platform: 'twitter',
      url: 'https://x.com/intent/post?url=',
      icon: 'IconXblack'
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
      icon: 'IconLinkedIn'
    },
    {
      platform: 'email',
      url: 'mailto:?subject=',
      icon: 'IconEmail'
    }
  ] as const