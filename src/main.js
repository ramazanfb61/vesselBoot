import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { popper } from '@popperjs/core'

createApp(App)

  .mount('#app')
