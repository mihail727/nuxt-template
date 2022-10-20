<script setup lang="ts"></script>

<template>
	<div>
		<div :class="$style.layoutComponent">default layout</div>
		<slot />
	</div>
</template>

<style lang="scss" module>
	.layoutComponent {
		display: flex;
		flex-direction: column;
		background-color: $primary;
	}
</style>
