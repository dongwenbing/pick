var vm = new Vue({
    el: '#selectCity',
    data: {
        scotop: 0,
        provincedefual: "请选择...",
        citydefual: "请选择...",
        areadefual: "请选择...",

        province: null,
        city: null,
        area: null,
        provinceitems: null,
        cityitems: null,
        areaitems: null,
        pickprovincestate: 5,
        pickcitystate: 5,
        pickareastate: 5,
        pickprovinceName: "",
        pickcityName: "",
        pickareaName: "",
        pickprovinceId: null,
        pickcityId: null,
        pickareaId: null

    }
})