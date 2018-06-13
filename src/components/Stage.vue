<template>
	<div class="stage">
		<round-component v-for="(match, index) in filteredItems"
			v-bind:key="index"
			v-bind:stage="match.stage"
			v-bind:firstMember="match.firstMember"
			v-bind:secondMember="match.secondMember"
			v-bind:position="match.position">
		</round-component>
	</div>
</template>
<script>
	import MatchesJSON from '../storage/matches.json'
	import Round from "./Round.vue";

	export default {
		props: ["stage", "position"],
		created: function() {},
		methods: {
			getMatches: function() {
				return this.matches;
			},
			getClass: function() {
				if (this.position) {
					return "left"
				}

				return "right";
			}
		},
		beforeMount(){
			this.getMatches()
		},
		computed: {
			filteredItems() {
				return this.matches.filter(match => {
					return match.stage === this.stage && match.position === this.position;
				})
			}
		},
		data: function() {
			return {
				matches: MatchesJSON,
			}
		},
		components: {
			RoundComponent: Round,
		},
	}
</script>
