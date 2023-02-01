<script>
	var active = false;
</script>

<header class="mb-2">
	<nav class="navbar is-dark" aria-label="main navigation">
		<div class="navbar-brand is-size-3">
			<a class="navbar-item" href="/">
				<h1>Yi Xian DB</h1>
			</a>

			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				role="button"
				class="navbar-burger"
				class:is-active={active}
				on:click={() => (active = !active)}
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu" class:is-active={active}>
			<div class="navbar-start">
				<a class="navbar-item" href="/cards">Cards</a>
				<a class="navbar-item" href="/characters">Characters</a>
			</div>
		</div>
	</nav>
</header>

<style>
	h1 {
		font-family: 'BoshthonBrush';
	}

	.bb {
		border-bottom: 1px solid #333;
	}
</style>
