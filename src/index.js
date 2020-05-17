import Vue from "vue";
import App from "./App.vue";

var VueTruncate = require('vue-truncate-filter');
Vue.use(VueTruncate);

Vue.filter("cut", function (value) {
	if (!value) {
		return "";
	}
	value = value.toString();
	return value.slice(0, 3);
});


new Vue({
	el: "#app",
	render: h => h(App),
});
