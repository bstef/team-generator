import PrimeVue from 'primevue/config'
import Toast from 'primevue/toast'

import ToastService from 'primevue/toastservice'

import Tooltip from 'primevue/tooltip'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'
import Dialog from 'primevue/dialog'
import Checkbox from 'primevue/checkbox'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(PrimeVue)
  nuxt.vueApp.use(ToastService)
  nuxt.vueApp.use(ConfirmationService)

  // Directives
  nuxt.vueApp.directive('tooltip', Tooltip)

  // Components
  nuxt.vueApp.component('Toast', Toast)
  nuxt.vueApp.component('InputText', InputText)
  nuxt.vueApp.component('InputNumber', InputNumber)
  nuxt.vueApp.component('Divider', Divider)
  nuxt.vueApp.component('InputSwitch', InputSwitch)
  nuxt.vueApp.component('Button', Button)
  nuxt.vueApp.component('ConfirmDialog', ConfirmDialog)
  nuxt.vueApp.component('Dialog', Dialog)
  nuxt.vueApp.component('Checkbox', Checkbox)
  nuxt.vueApp.component('Accordion', Accordion)
  nuxt.vueApp.component('AccordionTab', AccordionTab)
})
