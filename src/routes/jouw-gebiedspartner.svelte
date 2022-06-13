<svelte:head>
	<title>BuurtBoost - Jouw Gebiedspartner</title>
</svelte:head>

<section class="hero">
	<div class="flex content">
		<h1>BuurtBoost: de bindende factor</h1>
		<p>
			BuurtBoost is een complete gebiedspartner. Gedurende het ontwikkelproces nemen we
			verschillende rollen aan, maar we zijn altijd de bindende factor. We geloven in co-creatie en
			in de creatieve kracht van lokale partijen. Daarom verbinden we alle betrokkenen in de wijk,
			overheid en ondernemers, corporaties en sociale partners. En zeker niet op de laatste plaats
			de bewoners en hun netwerken, want zij kennen de wijk als geen ander. Zo leggen we het
			fundament voor een duurzaam en breed gedragen resultaat.
		</p>
	</div>
	<img src="svg/dots.svg" id="dots" alt="Dots" width="600px" height="424px" />
</section>

<section class="textimg">
	<div class="grid-container">
		<img src="svg/regisseur.svg" alt="Regisseur" width="450px" height="300px" />
		<div>
			<h2>(Co)regisseur</h2>
			<p>
				We verbinden alle betrokken partijen in het sociale en fysieke domein. Alles wat nodig is om
				de verbetering in gang te zetten. Omdat we veel en diep in de wijk zitten, hebben we ook een
				signalerende functie, zodat we voor spelende issues de partijen aan kunnen haken die voor
				een duurzame oplossing kunnen zorgen.
			</p>
		</div>

		<div>
			<h2>Adviseur</h2>
			<p>
				Van begin tot eind adviseren we gemeenten, corporaties en andere belanghebbenden over de
				wijkverbetering. Met name in de eerste stappen van de BuurtBoost Ontwikkelaanpak zijn we
				actief met onderzoek en voorstellen voor verbetering en planvorming.
			</p>
		</div>
		<img src="svg/adviseur.svg" alt="Adviseur" width="450px" height="300px" />

		<img src="svg/ontwikkelaar.svg" alt="Ontwikkelaar" width="450px" height="300px" />

		<div>
			<h2>Ontwikkelaar</h2>
			<p>
				We treden we op als gebiedspartner en ontwikkelaar. Om duurzaam impact te maken zijn we
				bereid de (financiële) risico’s aan te gaan, bijvoorbeeld voor de ontwikkeling van
				marktwoningen. Zo dragen we bij aan de realisatie van de gezamenlijk gemaakte plannen.
			</p>
		</div>

		<div>
			<h2>Aannemer</h2>
			<p>
				Alles wat je van een (hoofd)aannemer mag verwachten: we nemen de werkzaamheden aan en voeren
				ze tot in detail uit, of het nu gaat om duurzame renovatie of nieuwbouw, om de
				infrastructurele inrichting of de groenvoorziening. We doen dit op onze eigen innovatieve
				wijze: geïndustrialiseerd, prefab en in een gestroomlijnd proces.
			</p>
		</div>
		<img src="svg/aannemer.svg" alt="Aannemer" width="450px" height="300px" />

		<img src="svg/wisselend.svg" alt="Wisselend" width="450px" height="400px" />
		<div>
			<h2>Wisselende rollen</h2>
			<p>
				Per stap in de Ontwikkelaanpak kan onze rol verschillen, afhankelijk van de fase waarin we
				ons bevinden en de opgaven die er op dat moment liggen. Dit betekent ook dat we samen kunnen
				werken met andere ontwikkelaars en aannemers, mocht de ontwikkelopgave daarom vragen.
			</p>
			<a href="/contact">Maak een afspraak</a>
		</div>
	</div>
</section>

<style>
	.hero {
		background-color: var(--teal);
	}

	.textimg {
		margin-top: 600px;
	}

	a {
		text-decoration: none;
		color: white;
		background-color: var(--blue);
		padding: 10px;
		border-radius: 20px;
		border: 1px solid var(--dark-blue);
		margin: 10px;
		min-width: 180px;
		text-align: center;
		transition: color 0.5s, box-shadow 0.5s;
	}

	a:hover {
		color: var(--yellow);
		box-shadow: 0 0 6px 1px var(--yellow);
	}
</style>
