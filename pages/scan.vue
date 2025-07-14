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
            <v-btn @click="$refs.qrImage.click()" color="primary">Upload QR Code Image</v-btn>
            <input ref="qrImage" type="file" accept="image/*" @change="onImageUpload" hidden />

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
import { ref } from 'vue'
import { Html5Qrcode } from 'html5-qrcode'

const result = ref('')
const qrImage = ref(null)

const onImageUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const scanner = new Html5Qrcode('image-scan-placeholder') // dummy container

  try {
    const decodedText = await scanner.scanFile(file, true)
    result.value = decodedText
    await scanner.clear()
  } catch (err) {
    console.error("Failed to scan image:", err)
  }
}
</script>
