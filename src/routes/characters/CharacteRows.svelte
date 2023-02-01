<script>
	export let characters;
</script>

<div class="columns">
	{#each characters as character}
		<div class="column is-one-quarter">
			<div class="card has-background-dark">
				<div class="card-content">
					<a href="/characters/{character.name}" class="mx-2 has-text-white">
						<span>{character.name}</span>
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>
