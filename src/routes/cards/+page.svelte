<script>
	import { cards } from './cards';
	import FactionCards from './FactionCards.svelte';
	var category = 'Faction';
	var phase = 'all';
	$: activeCards = cards.filter((x) => x.type == category);
</script>

<h1 class="is-size-2 mb-2">Cards</h1>

<div class="tabs">
	<ul>
		<li class:is-active={category == 'Faction'} on:click={() => (category = 'Faction')}>
			<a class="has-text-black">Faction</a>
		</li>
		<li class:is-active={category == 'Side Job'} on:click={() => (category = 'Side Job')}>
			<a class="has-text-black">Side Job</a>
		</li>
		<li class:is-active={category == 'Character'} on:click={() => (category = 'Character')}>
			<a class="has-text-black">Character</a>
		</li>
		<li class:is-active={category == 'Fortune'} on:click={() => (category = 'Fortune')}>
			<a class="has-text-black">Fortune</a>
		</li>
	</ul>
</div>

{#if category == 'Faction'}
	<FactionCards cards={activeCards} />
{/if}

<style>
	h1,
	h2 {
		font-family: 'BoshthonBrush';
	}

	h1 {
		border-bottom: 1px solid #333;
	}
</style>
