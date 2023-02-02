<script>
	import CardRows from './CardRows.svelte';

	export let cards;
</script>

<div>
	<CardRows activeCards={cards} />
</div>
