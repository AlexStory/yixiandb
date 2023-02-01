<script>
	import { characters } from './characters';
	import CharacteRows from './CharacteRows.svelte';

	const swords = characters.filter((x) => x.faction == 'Cloud Spirit Sword Sect');
	const heptastar = characters.filter((x) => x.faction == 'Heptastar Pavillion');
	const elements = characters.filter((x) => x.faction == 'Five Elements Alliance');
</script>

<h1 class="is-size-2">Characters</h1>

<h2 class="is-size-3">Cloud Spirit Sword Sect</h2>
<CharacteRows characters={swords} />

<h2 class="is-size-3">Heptastar Pavillion</h2>
<CharacteRows characters={heptastar} />

<h2 class="is-size-3">Five Elements Alliance</h2>
<CharacteRows characters={elements} />

<style>
	h1,
	h2 {
		font-family: 'BoshthonBrush';
	}

	h1 {
		border-bottom: 1px solid #333;
	}
</style>
