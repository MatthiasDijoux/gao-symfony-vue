import Axios from "axios";
export default {

  data() {
    return {
      dialog: false,
      lazy: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Un nom est requis',
        v => (v && v.length <= 25) || 'Le nom ne doit pas être supérieure à 25 Caractères',
      ],
    }
  },

  methods: {
    addOrdinateur() {
      let name = JSON.parse(JSON.stringify(this.name));
      Axios.post('/ordinateurs/new',
        { name: name },
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          },
        }
      ).then(response => {
        this.$emit('addOrdi', response.data)
        this.dialog = false;
         })
    }
  }
}