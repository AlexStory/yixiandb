<script>
	import Header from './Header.svelte';
	import 'bulma/css/bulma.css';
	import '@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css';
	import '../app.css';
</script>

<Header />

<main class="container px-2">
	<slot />
</main>
