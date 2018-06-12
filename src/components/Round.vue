<template>
	<div class="round">
		<div class="match">
			<img class="logo" src="../assets/icons/Russia.png">
			<div class="match-member">{{ firstMember }}</div>
		</div>
		<div class="match">
			<img class="logo" src="../assets/icons/Portugal.png">
			<div class="match-member">{{ secondMember }}</div>
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
