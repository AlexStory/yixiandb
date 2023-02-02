<script>
	import { page } from '$app/stores';
	import { cards } from '../cards';
	import CharacterCards from '../CharacterCards.svelte';
	import Details from './Details.svelte';
	const name = $page.params.name;
	const card = cards.find((x) => x.name == name);
	let n = 1;

	function next() {
		n++;
		if (n > 3) {
			n = 1;
		}
	}
</script>

{#if !card}
	<h1 class="is-size-1">Card not found</h1>
{:else}
	<h1 class="is-size-1 block">{card.name}</h1>
	<div class="columns">
		<div class="column is-one-quarter is-clickable" on:click={next}>
			<img src="/images/cards/{card.iname}{n}.png" alt={card.name} />
		</div>

		<div class="column flex">
			<h2 class="is-size-2">Phase</h2>
			<p class="text-xl mb-2">{card.phase}</p>

			{#if card.faction}
				<h2 class="is-size-2">Faction:</h2>
				<p class="text-xl mb-2">{card.faction}</p>
			{/if}

			{#if card.character}
				<h2 class="is-size-2">Character:</h2>
				<p class="text-xl mb-2"><a href="/characters/{card.character}">{card.character}</a></p>
			{/if}

			<h2 class="is-size-2">Details:</h2>
			{#if n == 1}
				<Details details={card.tier1} />
			{/if}
			{#if n == 2}
				<Details details={card.tier2} />
			{/if}
			{#if n == 3}
				<Details details={card.tier3} />
			{/if}
		</div>
	</div>
{/if}

<style>
	h1,
	h2 {
		font-family: 'BoshthonBrush';
		margin-bottom: 10px;
	}

	h1 {
		border-bottom: 1px solid #333;
	}
</style>
