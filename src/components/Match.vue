<template>
	<div class="match">
		<div class="match-title">{{ stage }}</div>
		<div class="match-member">{{ firstMember }}</div>
		<div class="match-member">{{ secondMember }}</div>
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
