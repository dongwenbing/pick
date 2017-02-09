var vm = new Vue({
    el: '#selectCity',
    data: {
        scotop: 0,
        provincedisplay: null,
        citydisplay: null,
        areadisplay: null,
        pickstate: true,
        province: null,
        city: null,
        area: null,
        provinceitems: null,
        cityitems: null,
        areaitems: null,
        allcity: null,
        pickprovincestate: 5,
        pickcitystate: 5,
        pickareastate: 5,
        pickprovinceName: "",
        pickcityName: "",
        pickareaName: "",
        pickprovinceId: null,
        pickcityId: null,
        pickareaId: null

    },
    computed: {
        reversedcitydisplay: function() {
            var cityid = citydisplay;


            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        picksure: function() {

            if (this.pickareaId && this.pickareaName) { this.pickstate = false };
        },
        pickprovinceclick: function(event) {

            this.pickprovinceName = event.target.innerText;
            this.pickprovinceId = event.target.attributes.itemid.value;
            this.pickprovincestate = event.target.attributes.itemid.value;
            var tempcity = new Array();
            for (i in this.allcity.city) {
                if (this.allcity.city[i].ProID == this.pickprovinceId) { tempcity.push(this.allcity.city[i]); }
            }
            this.cityitems = tempcity;
            this.provincedisplay = this.pickprovinceId;
            this.citydisplay = null;
            this.areaitems = null;
            this.pickitemsite(event);
        },
        pickcityclick: function(event) {
            this.pickcityName = event.target.innerText;
            this.pickcityId = event.target.attributes.itemid.value;
            this.pickcitystate = event.target.attributes.itemid.value;
            this.citydisplay = this.pickcityId;
            var tempcity = new Array();
            for (i in this.allcity.area) {
                if (this.allcity.area[i].CityID == this.pickcityId) { tempcity.push(this.allcity.area[i]); }
            }
            this.areaitems = tempcity;
            this.areadisplay = null;
            this.pickitemsite(event);
        },
        pickareaclick: function(event) {
            this.pickareaName = event.target.innerText;
            this.pickareaId = event.target.attributes.itemid.value;
            this.pickareastate = event.target.attributes.itemid.value;
            this.areadisplay = this.pickareaId;
            this.pickitemsite(event);
        },
        pickitemsite: function(event) {
            this.scotop = event.target.parentNode.scrollTop;
            var itemheight = 0;
            var itemlist = event.target.parentNode.children;
            itemheight = event.target.offsetHeight;
            var YY = Math.ceil(this.scotop / itemheight); //向上取整
            if (YY > 0) {
                var setheight = YY * itemheight;
                setheight -= itemheight / 2;
                setheight ? event.target.parentNode.scrollTop = setheight : null;
            }

        },

        pickscorll: function(event) {
            this.scotop = event.target.scrollTop;
            var itemheight = 0;
            var itemlist = event.target.children;
            if (event.target.children[0]) { itemheight = event.target.children[0].offsetHeight; }
            var YY = Math.ceil(this.scotop / itemheight); //向上取整
            if (YY > 0) {
                var setheight = YY * itemheight;
                setheight -= itemheight / 2;
                setheight ? event.target.scrollTop = setheight : null;
            }
            this.provincedisplay = 1;
            debugger
            var bb = 55;
        },
        getdata: function() {
            this.$http.get("/dev/data/nv/allcity.json").then(function(rtdata) {
                    if (!rtdata) return false;
                    rtdata = eval("(" + rtdata.body + ")");
                    this.allcity = rtdata;
                    this.provinceitems = rtdata.province;
                    this.cityitems = rtdata.city;
                    if (rtdata.length > 0) { this.provincedisplay = rtdata[0].ProID }
                },
                function(error) {});

        }
    },
})

vm.getdata();