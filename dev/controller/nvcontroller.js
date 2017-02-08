    function aaa(aaa) {
        alert("4566788");

        debugger
        var e = 6;
    }

    var vm = new Vue({
        el: '#selectCity',
        data: {
            provincedefual: "请选择...",
            citydefual: "请选择...",
            area: "请选择...",
            items: null,
            province: null,
            city: null,
            area: null,
            scotop: 0,
            pickstate: 5,
            pickitemName: "",
            pickwenbing: 0,
            pickitemId: null,
            pickcallback: function() {

                alert("666");
            }
        },
        methods: {
            getdata: function() {
                this.$http.get("/dev/data/nv/province.json").then(function(rtdata) {
                        if (!rtdata) return false;
                        rtdata = eval("(" + rtdata.body + ")");
                        this.items = rtdata;
                    },
                    function(error) {})
            },
            pickclick: function(event, aaa) {
                this.pickitemName = event.target.innerText;
                this.pickitemId = event.target.attributes.itemid.value;
                this.pickstate = event.target.attributes.itemid.value;
                // this.pickitemId ? this.pickcallback() : null;

                this.scotop = event.target.parentNode.scrollTop;
                var itemheight = event.target.parentNode.scrollHeight / (this.items.length + 2); //这种高度暂时可不用
                var itemlist = event.target.parentNode.children;
                itemheight = event.target.offsetHeight;
                var YY = Math.ceil(this.scotop / itemheight); //向上取整
                if (YY > 0) {
                    var setheight = YY * itemheight;
                    setheight -= itemheight / 2;
                    setheight ? event.target.parentNode.scrollTop = setheight : null;
                }
                // var newclass = document.getElementsByClassName("pick-item-se");该方法已抛弃
                // for (i in newclass) { newclass[i].className = "pick-item"; }

                //   event.target.className = "pick-items";
                event.target.className = "pick-item-se";
                //  debugger
                var bb = 55;


            },

            pickscorll: function(event) {
                this.scotop = event.target.scrollTop;
                var itemheight = event.target.scrollHeight / (this.items.length + 2); //这种高度暂时可不用
                var itemlist = event.target.children;
                if (event.target.children[0]) { itemheight = event.target.children[0].offsetHeight; }
                var YY = Math.ceil(this.scotop / itemheight); //向上取整
                if (YY > 0) {
                    var setheight = YY * itemheight;
                    setheight -= itemheight / 2;
                    setheight ? event.target.scrollTop = setheight : null;
                }
                debugger
                var bb = 55;
            }
        },
    })

    vm.getdata();