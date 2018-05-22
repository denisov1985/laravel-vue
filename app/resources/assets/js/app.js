import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Vue from 'vue';
import Vuex from 'vuex';
import ExampleComponent from './components/ExampleComponent';

Vue.use(Buefy);

const app = new Vue({
    el: '#app',
    components: {
        ExampleComponent,
    }
});
