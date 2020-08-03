<template>
  <div v-if="loaded" class="counter">
    <div class="counter__box counter-animation">
      <div class="circle">
        {{ displayDays }}
      </div>
      <p>Дней</p>
    </div>
    <div class="counter__box counter-animation">
      <div class="circle">
        {{ displayHours }}
      </div>
      <p>Часов</p>
    </div>
    <div class="counter__box counter-animation">
      <div class="circle">
        {{ displayMinutes }}
      </div>
      <p>Минут</p>
    </div>
    <div class="counter__box counter-animation">
      <div class="circle">
        {{ displaySeconds }}
      </div>
      <p>Секунд</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: Number,
      default: 0,
    },
    month: {
      type: Number,
      default: 0,
    },
    date: {
      type: Number,
      default: 0,
    },
    hour: {
      type: Number,
      default: 0,
    },
    minute: {
      type: Number,
      default: 0,
    },
    second: {
      type: Number,
      default: 0,
    },
    millisecond: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      loaded: false,
    }
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      )
    },
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    formatNum: (num) => (num < 10 ? '0' + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        // const end = new Date(2020, 7, 15, 9, 0, 0, 0)
        const distance = this.end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          return
        }

        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)
        this.displayMinutes = this.formatNum(minutes)
        this.displaySeconds = this.formatNum(seconds)
        this.displayHours = this.formatNum(hours)
        this.displayDays = this.formatNum(days)
        this.loaded = true
      }, 1000)
    },
  },
}
</script>
<style lang="scss" scoped>
.counter {
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3vw;
  font-size: 4vw;
  text-align: center;
  color: #fff;
  font-weight: 100;
}
.circle {
  border: 1px solid #fff;
  border-radius: 100%;
  padding: 20px;
  line-height: 1.2;
}
.counter__box {
  transform: translateY(400%);
}
.counter__box:first-child {
  animation-delay: 0s;
}
.counter__box:nth-child(2) {
  animation-delay: 0.5s;
}
.counter__box:nth-child(3) {
  animation-delay: 1s;
}
.counter__box:last-child {
  animation-delay: 1.5s;
}
.counter__box p {
  font-size: 15px;
  margin-top: 10px;
  font-weight: normal;
}
</style>
