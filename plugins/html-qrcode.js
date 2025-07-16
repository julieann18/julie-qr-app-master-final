// plugins/html-qrcode.js
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode'

export default {
  install: (app) => {
    // Attach both classes globally to Vue app
    app.config.globalProperties.$Html5Qrcode = Html5Qrcode
    app.config.globalProperties.$Html5QrcodeScanner = Html5QrcodeScanner
  }
}
