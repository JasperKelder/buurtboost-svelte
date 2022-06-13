<script>
	import { popup } from '../lib/popup';
</script>

<svelte:head>
	<title>BuurtBoost</title>
</svelte:head>

<section class="hero" id="hero">
	<div class="flex content">
		<h1>De slimste route naar woongeluk</h1>
		<p>
			Veel naoorlogse woonwijken in ons land hebben het stempel ‘probleemwijk’. Dáár moet wat aan
			gebeuren. Maar er is nog een andere uitdaging: de toenemende woningnood die vraagt om het
			toevoegen van woningen in de binnensteden. Iedereen weet dat het de hoogste tijd is om door te
			pakken, maar snel handelen blijkt lastig. Dat kan anders, vinden we bij BuurtBoost. Met een
			daadkrachtige aanpak versnellen wij de wijkontwikkeling!
		</p>
		<div>
			<a href="/contact">Maak een afspraak</a>
			<a href="#hero" on:click={popup.toggle}>Download brochure</a>
		</div>
	</div>
	<img src="svg/dots.svg" id="dots" alt="Dots" width="600px" height="424px" />
	<img id="woongeluk" src="woongeluk.jpg" alt="" width="500px" height="333px" />
</section>

<section class="triangles">
	<div>
		<div>
			<div class="triangle" />
			<div class="triangle" />
			<div class="triangle" />
		</div>
		<h3>Concrete aanpak van fysieke en sociale verbetering</h3>
	</div>
	<div>
		<div>
			<div class="triangle" />
			<div class="triangle" />
			<div class="triangle" />
		</div>
		<h3>De slimste en snelste route: binnen 2 weken inzetbaar</h3>
	</div>
	<div>
		<div>
			<div class="triangle" />
			<div class="triangle" />
			<div class="triangle" />
		</div>
		<h3>Eerste resultaten zichtbaar binnen 4 weken</h3>
	</div>
	<div>
		<div>
			<div class="triangle" />
			<div class="triangle" />
			<div class="triangle" />
		</div>
		<h3>Ook voor deelprojecten binnen een lopende wijkverbetering</h3>
	</div>
	<div>
		<div>
			<div class="triangle" />
			<div class="triangle" />
			<div class="triangle" />
		</div>
		<h3>Verbinder en aanjager van idee tot gebruik</h3>
	</div>
</section>

<section class="textimg">
	<div class="grid-container">
		<img src="omhelzing.jpg" alt="Omhelzing" width="400px" height="221px" />
		<div>
			<h2>Samen impact maken!</h2>
			<p>
				BuurtBoost is dé buurtontwikkelaar met een maatschappelijke missie: iedereen verdient
				woongeluk! Met onze wijkgerichte aanpak integreren we sociale en fysieke wijkverbetering. In
				nauwe samenwerking met gemeenten, corporaties, partners en vooral de bewoners realiseren we
				breed gedragen verbeteringsplannen. En door de fysieke omgeving, de woningkwaliteit en de
				voorzieningen aan te pakken, geven we direct een impuls aan de sociale verbetering. Laten we
				samen impact maken!
			</p>
		</div>

		<div>
			<h2>Van ‘mono’ naar ‘multi’</h2>
			<p>
				Veel probleemwijken in ons land zijn ‘mono-wijken’. Eenzijdig woningaanbod, eenzijdige
				bewoning, eenzijdige functies, eenzijdig ingerichte openbare ruimte – op de landelijke
				Leefbaarometer scoren zij laag. Samen met bewoners, corporaties, gemeenten en lokale
				partners maken we plannen om die monotonie te doorbreken en de verbetering van de wijk te
				versnellen. We brengen diversiteit in het woningaanbod, met betaalbare woningen voor
				uiteenlopende doelgroepen. We verbreden het aanbod aan functies, verbeteren de
				infrastructuur, verduurzamen het vastgoed, vergroenen de buitenruimte. En we verbinden
				bewoners met elkaar door ze actief mee te laten doen in hún wijk. Een ‘multi-wijk’, waarin
				woongeluk voorop staat.
			</p>
		</div>
		<div>
			<img src="huizen.jpg" alt="Omhelzing" width="400px" height="267px" />
		</div>

		<div>
			<img src="telefoon.jpg" alt="Man met telefoon" width="400px" height="267px" />
		</div>
		<div>
			<h2>BuurtBoost Ontwikkelaanpak: in acht stappen naar woongeluk</h2>
			<p>
				Onze uitgangspunten zijn: versnellen van de opgaven, betaalbare woningen, een prettige en
				duurzame leefomgeving en maximaal draagvlak onder de bewoners en overige belanghebbenden.
				Dit kan dankzij de slimme BuurtBoost Ontwikkelaanpak en onze doelgerichte boosters die het
				proces een ‘boost’ geven.
			</p>
			<a href="/onze-aanpak">Onze aanpak</a>
		</div>

		<div>
			<h2>Slimme boosters voor sneller resultaat</h2>
			<p>
				Sommige boosters zijn praktische tools, andere concrete middelen. We ontwikkelen ze zelf of
				samen met partners. Voorbeelden zijn de BuurtPeiling, een handige app om met de wijkbewoners
				de dialoog aan te gaan. Of de Optopper: een bouwkundige oplossing waarmee we in een zeer
				korte doorlooptijd een complete, eigentijdse en duurzame woonlaag op bestaande naoorlogse
				flats plaatsen.
			</p>
			<a href="/contact">Maak een afspraak</a>
		</div>
		<div>
			<img src="optopper.jpg" alt="Omhelzing" width="400px" height="566px" />
		</div>
	</div>
</section>

<style>
	.hero {
		background-color: var(--pink);
	}

	a {
		text-decoration: none;
		color: white;
		background-color: var(--dark-blue);
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

	.hero a:nth-of-type(2) {
		background-color: transparent;
		border-color: white;
	}

	.triangles {
		position: absolute;
		margin-top: 600px;
		display: flex;
		margin-left: 50%;
		transform: translate(-50%);
	}

	.triangles > div {
		margin: 0 30px;
		width: 150px;
	}

	.triangles > div > div {
		display: flex;
		align-items: center;
	}

	.triangles > div > h3 {
		font-size: 14px;
		font-weight: 400;
		max-width: 150px;
		margin-top: 15px;
	}

	.triangle {
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 18px solid var(--yellow);
		margin-right: 10px;
	}

	.triangle:nth-of-type(2) {
		opacity: 60%;
	}

	.triangle:nth-of-type(3) {
		opacity: 20%;
	}

	#woongeluk {
		position: absolute;
		bottom: 0;
		right: 0;
		border-bottom-right-radius: 20px;
		border-top-left-radius: 20px;
		border: solid 1px var(--dark-blue);
		z-index: 2;
	}

	.textimg a {
		background-color: var(--blue);
	}

	.textimg img {
		border-radius: 20px;
		margin: auto auto;
		box-shadow: 0 0 2px 1px var(--dark-blue);
	}
</style>
