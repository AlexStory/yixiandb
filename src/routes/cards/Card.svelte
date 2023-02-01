<script>
	export let card;
</script>

<div class="column is-one-fifth">
	<a href="/cards/{card.name}">
		<div class="card has-background-dark mb-2">
			<div class="card-content columns is-multiline">
				<img src="/images/cards/{card.iname}1.png" alt={card.name} class="column is-full mx-auto" />
				<span class="subtitle has-text-white has-text-centered column is-full">{card.name}</span>
			</div>
		</div>
	</a>
</div>
