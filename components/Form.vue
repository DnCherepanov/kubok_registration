<template>
  <div>
    <el-button :class="buttonClass" round @click="dialog = true">
      Принять участие
    </el-button>
    <el-drawer
      title="Заполните форму на участие"
      ref="drawer"
      :visible.sync="dialog"
      :direction="drawerDirection"
      :size="drawerSize"
      :with-header="witdhHeader"
    >
      <div class="drawer__content">
        <el-form
          ref="form"
          :model="controls"
          :rules="rules"
          :label-position="labelPosition"
        >
          <el-form-item label="ФИО" prop="name" :label-width="formLabelWidth">
            <el-input
              v-model="controls.name"
              placeholder="Иванов Иван Иванович"
            >
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :md="12" :span="24">
              <el-form-item
                label="Дата рождения"
                prop="date"
                :label-width="formLabelWidth"
              >
                <el-date-picker
                  v-model="controls.date"
                  type="date"
                  placeholder="08/07/1989"
                  default-value="07/08/1989"
                  format="dd/MM/yyyy"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :md="12" :span="24">
              <el-form-item label="Телефон" prop="phone">
                <el-input
                  v-model="controls.phone"
                  v-mask="'+7 (###)-###-####'"
                  placeholder="+7 (---) --- ----"
                >
                  <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="Спортивная дисциплина" prop="type">
            <el-checkbox-group v-model="controls.type">
              <el-checkbox label="Одиночный разряд" name="type"></el-checkbox>
              <el-checkbox label="Парный разряд" name="type"></el-checkbox>
              <el-checkbox label="Смешанный разряд" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :md="12" :span="24">
              <el-form-item
                label="Партнер (парный разряд)"
                prop="partner1"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="controls.partner1"
                  placeholder="Иванов Иван Иванович"
                >
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-user-solid"
                  ></i>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" :span="24">
              <el-form-item
                label="Партнер (смешанный разряд)"
                prop="partner2"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="controls.partner2"
                  placeholder="Иванов Иван Иванович"
                >
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-user-solid"
                  ></i>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="form__info">
          <p class="el-icon-warning-outline" style="font-size: 15px;">
            Информация по категориям взрослого турнира.
          </p>
          <blockquote>
            <ul>
              <li>
                Женский одиночный турнир 18-49 лет
              </li>
              <li>
                Женский одиночный турнир 50 лет и старше
              </li>
              <li>
                Женская пара от 18 лет и старше
              </li>
              <li>
                Мужской одиночный турнир 18-49 лет
              </li>
              <li>
                Мужской одиночный турнир 50 лет и старше
              </li>
              <li>
                Мужской одиночный турнир (продвинутый уровень игры) от 18 лет и
                старше - тренеры, инструкторы, игроки принимающее участие во
                всероссийский соревнованиях, опытные игроки
              </li>
              <li>
                Смешанная пара от 18 лет и старше
              </li>
            </ul>
          </blockquote>
        </div>

        <div class="drawer__footer">
          <el-button round @click="resetForm()">Сбросить</el-button>
          <el-button round type="primary" :loading="loading" @click="onSubmit()"
            >{{ loading ? 'Отправляю ...' : 'Отправить' }}
          </el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawerDirection: {
      type: String,
      default: 'ltr',
    },
    drawerSize: {
      type: String,
      default: '40%',
    },
    witdhHeader: {
      type: Boolean,
      default: false,
    },
    buttonClass: {
      type: String,
      default: 'button',
    },
  },
  data() {
    return {
      dialog: false,
      loading: false,
      labelPosition: 'top',
      formLabelWidth: 'auto',
      myInputModel: '',
      controls: {
        name: '',
        date: '',
        phone: '',
        type: [],
        partner1: '',
        partner2: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Поле не может быть пустым',
            trigger: 'blur',
          },
        ],
        date: [
          {
            required: true,
            message: 'Поле не может быть пустым',
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            message: 'Поле не может быть пустым',
            trigger: 'blur',
          },
        ],
        type: [
          {
            required: true,
            message: 'Выберите дисциплину',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            name: this.controls.name,
            date: this.controls.date,
            phone: this.controls.phone,
            type: this.controls.type,
            partner1: this.controls.partner1,
            partner2: this.controls.partner2,
          }

          try {
            const participant = await this.$store.dispatch(
              'participant/create',
              formData
            )

            this.$emit('created', participant)
          } catch (e) {
            this.loading = false
          }
          this.dialog = false
          this.loading = false
          this.$refs.form.resetFields()
          this.$message({
            offset: '0',
            duration: '4000',
            message: 'Ваша заявка принята',
            type: 'success',
          })
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    },
  },
}
</script>


<style lang="scss" scoped>
.button {
  border-radius: 35px;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  padding: 20px 50px;
  font-size: 15px;
  background: none;
}

.button:hover {
  color: #000;
  background-color: #fff;
}
.button-mobile {
  border-radius: 35px;
  border: 1px solid #333;
  color: #333;
  text-align: center;
  text-decoration: none;
  font-weight: normal;
  background: none;
}
.drawer__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 40px 60px;
  overflow: scroll;
}
.drawer__content form {
  flex: 1;
}
.drawer__footer {
  display: flex;
  margin-top: 20px;
}
.drawer__footer button {
  flex: 1;
}
.form__info {
  padding: 20px;
  background-color: #ecf8ff;
  border-radius: 4px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.form__info ul {
  margin: 10px 0;
  padding-left: 20px;
}
</style>


