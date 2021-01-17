import Axios from "axios";

export default {
    props: {
        ordinateur: {
            default: function () {
                return {}
            },
        },
        date: {
            default: function () {
                return {}
            },
        },
        horaire: {
            default: function () {
                return {}
            },
        }
    },
    data() {
        return {
            snackbar: false,
            timeout: 3000,
            colorSnack: 'success',
            text: '',

            dialog: false,

            query: '',
            select: [],
            search: null,
            loading: false,
            listClients: [],
            id_client: '',
            no_data: false,
        }
    },

    watch: {
        search: function (val) {
            if (val && val.length >= 3) {

                this.loading = true
                Axios.get('/clients/search', { query: val })
                    .then(data => {
                        data.data.forEach(data => {
                            this.loading = false;
                            let NomPrenom = data.name + ' ' + data.firstname
                            data.name = NomPrenom
                            this.listClients.push(data)
                        })

                    });
            }
        },
    },

    methods: {

        ajoutClient() {
            Axios.post('/attributions/add', { id_client: this.select.id, id_ordinateur: this.ordinateur.id, horaire: this.horaire, date: this.date }).then(({ data }) => {
                this.snackbar = true;
                this.$emit('addAttribue', data)
                this.text = "Le client a été ajouter à l'ordi";
                this.dialog = false;
            })
        },

        addClient(client) {
            // console.log(client);
        }
    }

}