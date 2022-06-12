<script>
	import Menu from '$lib/Menu.svelte';
	let scan = true;
	let peiling = false;
	let scenarios = false;
	let strategie = false;
	let plan = false;
	let ontwikkeling = false;
	let realisatie = false;
	let gebruik = false;

	function reset() {
		scan = false;
		peiling = false;
		scenarios = false;
		strategie = false;
		plan = false;
		ontwikkeling = false;
		realisatie = false;
		gebruik = false;
	}
</script>

<svelte:head>
	<title>BuurtBoost - Onze Aanpak</title>
</svelte:head>

<section class="hero">
	<div class="flex content">
		<h1>De slimme BuurtBoost Ontwikkelaanpak</h1>
		<p>
			De BuurtBoost Ontwikkelaanpak volgt een overzichtelijk stappenplan en gebruikt van een mix van
			slimme methoden en middelen, van data-analyse, wetenschappelijke inzichten en
			stakeholderparticipatie tot vernieuwende vormen van projectontwikkeling en bouw. Snel en
			concreet, in acht stappen naar woongeluk!
		</p>
	</div>
	<img src="svg/dots.svg" id="dots" alt="Dots" width="600px" />
</section>

<section class="menu">
	<div class="buttons">
		<ol>
			<li>
				<button on:click={() => reset()} on:click={() => (scan = !scan)} class:active={scan}
					>Scan</button
				>
			</li>
			<li>
				<button
					on:click={() => reset()}
					on:click={() => (peiling = !peiling)}
					class:active={peiling}>Peiling</button
				>
			</li>
			<li>
				<button
					on:click={() => reset()}
					on:click={() => (scenarios = !scenarios)}
					class:active={scenarios}>Scenario's</button
				>
			</li>

			<li>
				<button
					on:click={() => reset()}
					on:click={() => (strategie = !strategie)}
					class:active={strategie}>Strategie</button
				>
			</li>

			<li>
				<button on:click={() => reset()} on:click={() => (plan = !plan)} class:active={plan}
					>Plan</button
				>
			</li>
			<li>
				<button
					on:click={() => reset()}
					on:click={() => (ontwikkeling = !ontwikkeling)}
					class:active={ontwikkeling}>Ontwikkeling</button
				>
			</li>
			<li>
				<button
					on:click={() => reset()}
					on:click={() => (realisatie = !realisatie)}
					class:active={realisatie}>Realisatie</button
				>
			</li>
			<li>
				<button
					on:click={() => reset()}
					on:click={() => (gebruik = !gebruik)}
					class:active={gebruik}>Gebruik</button
				>
			</li>
		</ol>
	</div>

	<Menu
		bind:scan
		bind:peiling
		bind:scenarios
		bind:strategie
		bind:plan
		bind:ontwikkeling
		bind:realisatie
		bind:gebruik
	/>
</section>

<style>
	.hero {
		background-color: var(--blue);
	}

	.buttons {
		position: absolute;
		top: 600px;
		left: 200px;
		display: flex;
		flex-direction: column;
	}

	button:nth-of-type(2) {
		top: 750px;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 5px;
		font: inherit;
		cursor: pointer;
		margin: 2px;
		font-size: 20px;
		text-align: left;
		transition: font-weight 0.3s;
	}

	button:hover {
		font-weight: 800;
	}

	.active {
		font-weight: 800;
	}

	ol {
		list-style: none;
		counter-reset: item;
	}

	li {
		counter-increment: item;
		margin-bottom: 5px;
	}

	li:before {
		margin-right: 5px;
		content: counter(item);
		background: var(--yellow);
		border-radius: 100%;
		color: var(--dark-blue);
		width: 1.2em;
		text-align: center;
		display: inline-block;
	}

	.menu {
		position: absolute;
		width: 1200px;
		margin-left: 50%;
		transform: translate(-50%);
	}
</style>
