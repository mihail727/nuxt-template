<template>
	<div :class="$style.appComponent">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss" module>
	.appComponent {
		min-height: 100vh;
		min-width: 100%;
	}
</style>
