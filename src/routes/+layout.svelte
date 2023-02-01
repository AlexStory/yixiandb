<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="max-w-screen-lg mx-auto px-2">
	<slot />
</main>
