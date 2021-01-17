import Axios from "axios"

export default {
    props: {
        attribution: {
            default: function () {
                return {}
            }
        },

        horaire: {
            default: function () {
                return {}
            }
        }
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        deletePoste() {
            Axios.delete('/attributions/delete/' + this.attribution.id).then(response => {
                this.$emit('deleteAttribution', this.horaire)
            })
        }
    },
}