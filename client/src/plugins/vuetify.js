import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md'
    },
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: Colors.teal.accent2,
                secondary: Colors.teal.accent4,
                accent: Colors.cyan.accent3
            }
        }
    },
});
