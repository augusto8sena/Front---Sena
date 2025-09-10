<template>
	<NamedSlotsComponent>
		<template #header>
			<h2>Exemplo de Header</h2>
		</template>
		Este é o conteúdo principal do slot default.
		<template #footer>
			<small>Rodapé do componente</small>
		</template>
	</NamedSlotsComponent>
</template>

<script>
import NamedSlotsComponent from '../NamedSlotsComponent.vue';

export default {
	name: 'Exerc17',
	components: {
		NamedSlotsComponent
	}
};
</script>

<style scoped>
/* Adicione estilos específicos se necessário */
</style>
