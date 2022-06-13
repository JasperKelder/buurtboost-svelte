<svelte:head>
	<title>BuurtBoost - Contact</title>
</svelte:head>

<section class="hero">
	<div class="flex content">
		<h1>Samen impact maken?</h1>
		<p>
			Zin in een goed gesprek over de slimste route naar woongeluk? Over de manier waarop we
			wijkontwikkeling versnellen en bestaande wijken verrijken? Of heb je goede ideeën voor
			boosters? Bel of mail BuurtBoost!
		</p>
	</div>
	<img src="svg/dots.svg" id="dots" alt="Dots" width="600px" height="424px" />
</section>

<section class="contact">
	<div class="contact-persoon">
		<img src="1.jpg" alt="1" width="200px" height="200px" />
		<h2>Bas de Haan</h2>
		<p>Commercieel Technisch Manager</p>
		<div class="action">
			<a href="tel:+31600000000">06-00000000</a>
			<a href="mailto:anoniem@buurtboost.nl" target="_blank" rel="noopener noreferrer"
				>anoniem@buurtboost.nl</a
			>
		</div>
	</div>
	<div class="contact-persoon">
		<img src="2.jpg" alt="2" width="200px" height="200px" />
		<h2>Mariette Broesterhuizen</h2>
		<p>Strategisch Manager</p>
		<div class="action">
			<a href="tel:+31600000000">06-00000000</a>
			<a href="mailto:anoniem@buurtboost.nl" target="_blank" rel="noopener noreferrer"
				>anoniem@buurtboost.nl</a
			>
		</div>
	</div>
	<div class="contact-persoon">
		<img src="3.jpg" alt="3" width="200px" height="200px" />
		<h2>Mara Kopp</h2>
		<p>Buurtontwikkelaar</p>
		<div class="action">
			<a href="tel:+31600000000">06-00000000</a>
			<a href="mailto:anoniem@buurtboost.nl" target="_blank" rel="noopener noreferrer"
				>anoniem@buurtboost.nl</a
			>
		</div>
	</div>
	<div class="contact-persoon">
		<img src="4.jpg" alt="4" width="200px" height="200px" />
		<h2>Ellen Burke</h2>
		<p>Marketing & Communicatie</p>
		<div class="action">
			<a href="tel:+31600000000">06-00000000</a>
			<a href="mailto:anoniem@buurtboost.nl" target="_blank" rel="noopener noreferrer"
				>anoniem@buurtboost.nl</a
			>
		</div>
	</div>
</section>

<style>
	.hero {
		background-color: var(--yellow);
	}

	h1 {
		color: var(--dark-blue);
		margin: 30px;
	}

	.contact {
		display: grid;
		grid-auto-flow: column;
		position: absolute;
		margin-left: 50%;
		transform: translate(-50%);
		max-width: 1500px;
		top: 600px;
		z-index: 1000;
	}

	.contact-persoon {
		margin: 0 -15px;
		text-align: center;
		font-weight: 300;
	}

	.contact-persoon img {
		border-radius: 100%;
		box-shadow: 0 0 2px 1px var(--dark-blue);
	}

	.contact-persoon h2 {
		margin: 20px 0 5px 0;
		width: 300px;
		font-size: 22px;
	}

	.action {
		display: flex;
		flex-direction: column;
	}

	.action a {
		text-decoration: none;
		color: inherit;
		transition: color 0.4s;
		padding: 1px;
	}

	.action a:hover {
		color: var(--yellow);
	}
</style>
