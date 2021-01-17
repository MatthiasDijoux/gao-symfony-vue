import Axios from "axios"
import Ordinateurs from '../components/Ordinateurs.vue'
import DatePicker from '../components/DatePicker.vue';
import AddOrdi from '../components/AddOrdi.vue';
import { EventBus } from "../eventBus";
export default {
    components: {
        Ordinateurs,
        AddOrdi,
        DatePicker

    },

    data() {
        return {
            ordinateurs: [],
            date: new Date().toISOString().substr(0, 10),
            pagination: {
                page: 1,
                visible: 10,
                pageCount: 0,
            },
            horaires: []
        }
    },

    methods: {
        selectDate(date) {
            this.ordinateurs = [];
            this.getOrdinateurs(1);
            this.date = date;

            EventBus.$on('deleteOrdi', (data) => {
                const index = this.ordinateurs.indexOf(data);
                this.ordinateurs.splice(index, 1)
            })
        },

        displayHoraire() {
            this.horaires = [];
            for (let i = 0; i < 10; i++) {
                this.horaires.push({
                    index: i + 8,
                    attribution: (typeof this.attributions[i + 8] !== 'undefined') ? this.attributions[i + 8] : false
                })
            }
        },

        add(ordi) {
            const index = _.findIndex(this.ordinateurs, { id: ordi.id });
            this.ordinateurs.push(ordi);
        },

        getOrdinateurs(page) {
            this.ordinateurs = []
            Axios.post('/ordinateurs/get', { page: page }).then(({ data }) => {
                data.forEach(ordinateur => {
                    this.ordinateurs.push(ordinateur);
                })
                // this.pagination.pageCount = data[1];
            })
        }
    }
}