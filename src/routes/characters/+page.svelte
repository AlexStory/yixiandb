<script>
	import { characters } from './characters';

	const swords = characters.filter((x) => x.faction == 'Cloud Spirit Sword Sect');
	const heptastar = characters.filter((x) => x.faction == 'Heptastar Pavillion');
	const elements = characters.filter((x) => x.faction == 'Five Elements Alliance');
</script>

<h1 class="text-3xl">Characters</h1>

<h2 class="text-2xl mt-2">Cloud Spirit Sword Sect</h2>
{#each swords as character}
	<a href="/characters/{character.name}" class="mx-2">
		<span>{character.name}</span>
	</a>
{/each}

<h2 class="text-2xl mt-2">Heptastar Pavillion</h2>
{#each heptastar as character}
	<a href="/characters/{character.name}" class="mx-2">
		<span>{character.name}</span>
	</a>
{/each}

<h2 class="text-2xl mt-2">Five Elements Alliance</h2>
{#each elements as character}
	<a href="/characters/{character.name}" class="mx-2">
		<span>{character.name}</span>
	</a>
{/each}

<style>
	h1,
	h2 {
		font-family: 'BoshthonBrush';
	}
</style>
