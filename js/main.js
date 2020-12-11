new Vue({
  el: "#app",
  data: {
    writetext: "HEADER",
    writesubtext:"Vaporwave",
    img: "img/vaporwave03.png",
    border: "oldborder"
  },
  methods: {
    choose01() {
      this.img = "img/vaporwave01.png"
    },
    choose02() {
      this.img = "img/vaporwave02.png"
    },
    choose03() {
      this.img = "img/vaporwave03.png"
    },
    download() {
      this.border = "newborder"
      html2canvas(document.querySelector("#previewImage")).then(canvas => {
        var imageData = canvas.toDataURL();
        document.getElementById('canvasImage').setAttribute("src",canvas.toDataURL());
      });
    },
    resetclass() {
      this.border = "oldborder"
      this.img = "img/vaporwave03.png"
    }
  }
})
