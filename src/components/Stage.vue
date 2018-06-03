<template>
	<div :class="['stage stage-' + getClass()]">
		<match-component v-for="(match, index) in filteredItems"
			v-bind:key="index"
			v-bind:stage="match.stage"
			v-bind:firstMember="match.firstMember"
			v-bind:secondMember="match.secondMember"
			v-bind:position="match.position">
		</match-component>
	</div>
</template>
<script>
	import MatchesJSON from '../storage/matches.json'
	import Match from "./Match.vue";

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
			MatchComponent: Match,
		},
	}
</script>
