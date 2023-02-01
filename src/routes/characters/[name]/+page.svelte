<script>
	import { page } from '$app/stores';
	import { characters } from '../characters';
	const name = $page.params.name;
	const character = characters.find((x) => x.name == name);
</script>

{#if !character}
	<h1 class="text-4xl">Character not found</h1>
{:else}
	<h1 class="text-4xl">{character.name}</h1>
	<h2 class="text-2xl">Faction:</h2>
	<p class="text-xl mb-2">{character.faction}</p>

	<h2 class="text-2xl">Abilities:</h2>

	{#each character?.abilities as ability}
		<div class="my-2">
			<h3 class="text-xl font-bold">{ability.name} - {ability.phase}</h3>
			<p>{ability.description}</p>
		</div>
	{/each}
{/if}

<style>
	h1,
	h2 {
		font-family: 'BoshthonBrush';
		margin-bottom: 10px;
	}
</style>
