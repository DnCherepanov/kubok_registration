import Vue from 'vue'
import { Button, Checkbox, CheckboxGroup, Dialog, Drawer, Form, FormItem, DatePicker, Input, Icon, Card, Table, TableColumn, Row, Col, Container, Header, Link, Message, Main } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
import DateFilter from '@/common/date.filter'
import VueMask from 'v-mask'

Vue.filter('date', DateFilter)
Vue.use(VueMask)
locale.use(lang)
Vue.component(Button.name, Button)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Dialog.name, Dialog)
Vue.component(Drawer.name, Drawer)
Vue.component(FormItem.name, FormItem)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Form.name, Form)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component(Card.name, Card)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Link.name, Link)
Vue.component(Main.name, Main)

Vue.prototype.$message = Message
