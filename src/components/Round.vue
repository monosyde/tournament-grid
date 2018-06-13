<template>
	<div class="round">
		<div class="match">
			<div class="logo" v-bind:style="{ backgroundImage: 'url(./src/assets/icons/' + firstMember + '.png)' }"></div>
			<div class="match-member">{{ firstMember | cut }}</div>
		</div>
		<div class="match">
			<div class="logo" v-bind:style="{ backgroundImage: 'url(./src/assets/icons/' + secondMember + '.png)' }"></div>
			<div class="match-member">{{ secondMember | cut }}</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["stage", "firstMember", "secondMember", "position"],
		created: function() {},
		data: function() {
			return {};
		}
	}
</script>
