new Vue({
  el: "#app",
  data: {
    message: "",
    firstName: "Sarvesh",
    lastName: "Bhatt",
    age: 23,
    x: 0,
    y: 0,
  },
  methods: {
    greeting: function () {
      return this.firstName + " " + this.lastName;
    },
    plusAge: function (inc) {
      this.age += inc;
    },
    minusAge: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
