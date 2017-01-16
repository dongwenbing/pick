  var vm = new Vue({
      el: '#selectCity',
      data: {
          provincedefual: "请选择...",
          citydefual: "请选择...",
          area: "请选择...",
          items: null,
          province: null,
          city: null,
          area: null
      },
      methods: {
          getdata: function() {
              this.$http.get("/dev/data/nv/province.json").then(function(rtdata) {
                  if (!rtdata) return false;
                  rtdata = eval("(" + rtdata.body + ")");
                  this.items = rtdata;
              }, function(error) {})
          }
      },
  })


  vm.getdata();