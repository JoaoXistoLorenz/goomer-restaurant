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
	created() {
		/* this.salvar() */
		/* this.excluir() */
		/* this.obterUsuario() */
	},
	methods: {
		excluir() {
			this.$http.delete(`produtos/1/`)
			.then(() => console.log('sucesso')).catch(err => {
				console.log('Problema para excluir!')
			})
		},
		salvar() {
			let p = {
				nome:'joao',
				descricao:'segundo teste',
				valor:2500
			}
			this.$http.post(`produtos/`, p)
				.then(_ => {
					console.log('realizado')
				})
		},
		obterUsuario() {
			this.$http.get('produtos/2/').then(res => {
				console.log(res.data)
			})
		},
		obterUsuarios() {
			this.$http.get('produtos/').then(res => {
				console.log(res.data)
			})
		},
	}
}
</script>

<style>
</style>
