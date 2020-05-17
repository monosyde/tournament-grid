<template>
	<div class="content">
		<div class="header">
			<div class="title-container">
				<div class="title">ПЛЭЙ-ОФФ</div>
			</div>
		</div>
		<div class="grid">
			<stage-component v-for="(stage, index) in stages"
				v-bind:key="index"
				v-bind:stage="stage.stage"
				v-bind:position="stage.position">
			</stage-component>
		</div>
	</div>
</template>
<script>
	import Stage from "./components/Stage.vue";
	import StagesJSON from './storage/stages.json';

	export default {
		data() {
			return {
				stages: StagesJSON,
			}
		},
		components: {
			StageComponent: Stage,
		},
	}
</script>
