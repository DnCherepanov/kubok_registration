import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'

import DateFilter from '@/common/date.filter'

import VueMask from 'v-mask'

Vue.use(Element, { locale })
Vue.filter('date', DateFilter)
Vue.use(VueMask)
