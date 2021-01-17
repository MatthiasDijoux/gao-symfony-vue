import router from "../routes";
import { authenticationService } from "../_services/authentication.service";

export default {
    date() {
        return {
            isDisplay: false,
            currentUser: null,
        }
    },

    methods: {
        logout() {
            authenticationService.logout();
            router.push("/login");
        },
        show: function () {
            this.isDisplay = true;
        },
        hide: function () {
            this.isDisplay = false;
        },
        isChecked() {
            return this.currentUser;
        },
    },

    created() {
        authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    }
}