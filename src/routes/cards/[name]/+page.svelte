<script>
	import { page } from '$app/stores';
	import { cards } from '../cards';
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
	<h1 class="is-size-2">{card.name}</h1>
	<div class="columns">
		<div class="column is-one-quarter is-clickable" on:click={next}>
			<img src="/images/cards/{card.iname}{n}.png" alt="{card.name}" />
		</div>	

		<div class="column flex">
			
			<h2 class="is-size-3">Faction:</h2>
			<p class="text-xl mb-2">{card.faction}</p>
			
			<h2 class="is-size-3">Details:</h2>
			
			{#each card.actions as action}
			<div class="my-2">
				{action}
			</div>
			{/each}
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
