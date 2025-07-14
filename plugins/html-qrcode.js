import { Html5Qrcode } from 'html5-qrcode'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      html5Qrcode: Html5Qrcode
    }
  }
})
