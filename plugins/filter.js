import Vue from 'vue'
import { formatDate } from '~/utils/utils.js'

Vue.filter('formatDate', val => formatDate(val, 'Y-M-D h:m:s')) // 格式化时间