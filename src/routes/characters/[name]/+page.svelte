<script>
	import { page } from '$app/stores';
	import { characters } from '../characters';
	const name = $page.params.name;
	const character = characters.find((x) => x.name == name);
</script>

{#if !character}
	<h1 class="is-size-1">Character not found</h1>
{:else}
	<h1 class="is-size-1">{character.name}</h1>
	<div class="columns">
		<div class="column is-one-quarter">
			<img src="/images/character/{character.iname}.jpg" alt={character.name} />
		</div>
		<div class="column flex">
			<h2 class="is-size-3">Faction:</h2>
			<p class="text-xl mb-2">{character.faction}</p>

			<h2 class="is-size-3">Abilities:</h2>

			{#each character.abilities as ability}
				<div class="my-2 is-flex is-justify-content-start">
					<div>
						{#if ability.iname}
							<figure class="image is-96x96 mr-4">
								<img src="/images/fates/{ability.iname}.jpg" alt={ability.name} />
							</figure>
						{/if}
					</div>
					<div>
						<h3 class="is-size-5 has-text-weight-bold">{ability.name} - {ability.phase}</h3>
						<p>{ability.description}</p>
					</div>
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
