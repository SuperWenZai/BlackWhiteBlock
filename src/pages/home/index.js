import smBlock from "../../components/smBlock";
import { setTimeout } from "timers";

export default {
    name: "home",

    data() {
        return {
            number: [],
            numTime: 0
        };
    },

    components: {
        smBlock
    },

    created() {
        let arrNun = [];

        for (let i = 0; i < 5; i++) {
            let num = [0, 0, 0, 0];
            num[Math.floor(Math.random() * 4)] = 1;
            arrNun.push(num);
        }

        this.number = arrNun;
    },

    methods: {
        aa(e) {
            this.numTime = this.numTime + e;
            console.log(this.numTime);

            // setTimeout(() => {
            //     let number = this.number;
            //     let num = [0, 0, 0, 0];
            //     var parent = document.querySelector(".content div");
            //     parent.remove();

            //     num[Math.floor(Math.random() * 4)] = 1;
            //     // number.splice(0,1);
            //     number = number.push(num);
            // }, 1000);
        }
    },

    watch: {
        numTime() {
            let number = this.number;
            let num = [0, 0, 0, 0];
            var parent = document.querySelector(".content div");

            parent.remove();

            num[Math.floor(Math.random() * 4)] = 1;
            // number.splice(0,1);
            number = number.push(num);
            // this.number = this.number.slice(1,5);

            // this.number = []
            // console.log(number)
        }
    }
};