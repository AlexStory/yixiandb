<script>
	export let activeCards;
	import Card from './Card.svelte';
</script>

<section class="section">
	<div class="columns is-multiline">
		{#each activeCards.filter((x) => x.phase == 'Meditation Phase') as card}
			<Card {card} />
		{/each}
	</div>
</section>

<section class="section">
	<div class="columns is-multiline">
		{#each activeCards.filter((x) => x.phase == 'Foundation Phase') as card}
			<Card {card} />
		{/each}
	</div>
</section>

<section class="section">
	<div class="columns is-multiline">
		{#each activeCards.filter((x) => x.phase == 'Virtuoso Phase') as card}
			<Card {card} />
		{/each}
	</div>
</section>

<section class="section">
	<div class="columns is-multiline">
		{#each activeCards.filter((x) => x.phase == 'Immortality Phase') as card}
			<Card {card} />
		{/each}
	</div>
</section>

<section class="section">
	<div class="columns is-multiline">
		{#each activeCards.filter((x) => x.phase == 'Incarnation Phase') as card}
			<Card {card} />
		{/each}
	</div>
</section>
