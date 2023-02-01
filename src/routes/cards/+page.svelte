<script>
	var category = 'Faction';
	var phase = 'all';
</script>

<h1 class="text-3xl">Cards</h1>

<div class="mb-3">
	<button
		class="rounded  border-2 px-4 py-2 border-black {category == 'Faction'
			? 'border-sold'
			: 'border-dashed'}"
		on:click={() => (category = 'Faction')}>Faction</button
	>
	<button
		class="rounded border-2 px-4 py-2 border-black {category == 'Side Job'
			? 'border-sold'
			: 'border-dashed'}"
		on:click={() => (category = 'Side Job')}>Side Job</button
	>

	<button
		class="rounded border-2 px-4 py-2 border-black {category == 'Fortunes'
			? 'border-solid'
			: 'border-dashed'}"
		on:click={() => (category = 'Fortunes')}>Fortunes</button
	>
</div>

{#if category == 'Faction'}
	<h2 class="text-3xl">Faction</h2>
{:else if category == 'Side Job'}
	<h2 class="text-3xl">Side Job</h2>
{:else if category == 'Fortunes'}
	<h2 class="text-3xl">Fortunes</h2>
{/if}

<style>
	h1,
	h2 {
		font-family: 'BoshthonBrush';
	}
</style>
