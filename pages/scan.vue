<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5" elevation="4">
          <v-card-title class="text-h6 text-center">
            <v-icon class="mr-2">mdi-qrcode-scan</v-icon>
            Scan QR Code
          </v-card-title>

          <v-card-text>
            <!-- Live camera QR scanner area -->
            <div id="reader" style="width: 100%; height: auto;"></div>

            <v-alert
              v-if="result"
              type="success"
              class="mt-4"
              border="start"
              prominent
            >
              <strong>Result:</strong><br />
              {{ result }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Html5Qrcode } from 'html5-qrcode'

const result = ref('')
let html5QrCode = null

onMounted(() => {
  const qrRegionId = 'reader'
  html5QrCode = new Html5Qrcode(qrRegionId)

  Html5Qrcode.getCameras().then((devices) => {
    if (devices && devices.length) {
      // Use the first camera (or back camera on mobile)
      const backCamera =
        devices.find((device) =>
          device.label.toLowerCase().includes('back')
        ) || devices[0]
      const cameraId = backCamera.id

      html5QrCode.start(
        cameraId,
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          result.value = decodedText
          html5QrCode.stop().then(() => html5QrCode.clear())
        },
        (errorMessage) => {
          // Ignore scan errors
        }
      )
    } else {
      console.error('No cameras found.')
    }
  }).catch((err) => {
    console.error('Camera error:', err)
  })
})

onBeforeUnmount(() => {
  if (html5QrCode) {
    html5QrCode.stop().then(() => html5QrCode.clear())
  }
})
</script>
