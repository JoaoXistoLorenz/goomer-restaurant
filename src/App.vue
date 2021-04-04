<template>
	<div id="app">
		<Header />
		<router-view/>

	</div>
</template>

<script>
import Header from "./components/templates/header"
export default {
	components: {
		Header
	},
	data() {
		return {}
	},
}
</script>

<style>
</style>
