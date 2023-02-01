<script>
	export let characters;
</script>

<div class="columns">
	{#each characters as character}
		<div class="column is-one-quarter">
			<a href="/characters/{character.name}" >
				<div class="card has-background-dark py-2">
					<div class="card-content columns is-multiline">
						<img src="/images/character/{character.iname}.jpg" alt="{character.name}" class="column is-full mx-auto"/>
						<span class="has-text-white block column is-full has-text-centered is-size-4">{character.name}</span>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
