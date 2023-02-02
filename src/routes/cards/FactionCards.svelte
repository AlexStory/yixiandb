<script>
	export let cards;
	import Card from './Card.svelte';
	let faction = 'Cloud Spirit Sword Sect';
	$: activeCards = cards.filter((x) => x.faction == faction);
</script>

<div class="tabs">
	<ul>
		<li
			class:is-active={faction == 'Cloud Spirit Sword Sect'}
			on:click={() => (faction = 'Cloud Spirit Sword Sect')}
		>
			<a>Cloud Spirit Sword Sect</a>
		</li>
		<li
			class:is-active={faction == 'Heptastar Pavilion'}
			on:click={() => (faction = 'Heptastar Pavilion')}
		>
			<a>Heptastar Pavilion</a>
		</li>
		<li
			class:is-active={faction == 'Five Elements Alliance'}
			on:click={() => (faction = 'Five Elements Alliance')}
		>
			<a>Five Elements Alliance</a>
		</li>
	</ul>
</div>

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
		{#each activeCards.filter((x) => x.phase == 'Immortal Phase') as card}
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
