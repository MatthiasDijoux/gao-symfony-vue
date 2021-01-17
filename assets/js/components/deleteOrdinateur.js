import Axios from "axios"
import { EventBus } from '../eventBus';
export default {

    props: {
        ordinateur: {
            default: function () {
                return {}
            }
        },
    },

    data() {
        return {
            dialog: false,
        }
    },

    methods: {
        deleteOrdinateur(item) {
            Axios.delete('/ordinateurs/' + this.ordinateur.id + '/delete').then(data => {
                EventBus.$emit('deleteOrdi', item)
            })
    }
},
}