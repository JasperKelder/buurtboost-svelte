<script>
	import { page } from '$app/stores';

	let scrollHeight;

	$: logoSource =
		$page.url.pathname === '/contact' || scrollHeight > 10
			? 'svg/logo-blauw.svg'
			: 'svg/logo-wit.svg';
</script>

<svelte:window bind:scrollY={scrollHeight} />

<header class:headerChange={scrollHeight > 10}>
	<nav>
		<div class="logo">
			<a href="/" class:active={$page.url.pathname === '/'}>
				<img src={logoSource} alt="BuurtBoost Logo" />
			</a>
		</div>

		<div class="links">
			<ul>
				<li>
					<a href="/onze-aanpak" class:active={$page.url.pathname === '/onze-aanpak'}>onze aanpak</a
					>
				</li>
				<li>
					<a
						href="/jouw-gebiedspartner"
						class:active={$page.url.pathname === '/jouw-gebiedspartner'}>jouw gebiedspartner</a
					>
				</li>
				<li>
					<a href="/contact" class:active={$page.url.pathname === '/contact'}>contact</a>
				</li>
			</ul>
		</div>
		<div class="socials">
			<a href="https://buurtboost.nl/" target="_blank" rel="noopener noreferrer">
				<img src="svg/instagram.svg" alt="Instagram Logo" width="25px" />
			</a>
			<a href="https://buurtboost.nl/" target="_blank" rel="noopener noreferrer">
				<img src="svg/linkedin.svg" alt="LinkedIn Logo" width="25px" />
			</a>
		</div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100vw;
		z-index: 2;
		transition: background-color 0.4s;
	}

	nav {
		margin: auto auto;
		display: flex;
		align-items: center;
		vertical-align: center;
		max-width: 1500px;
		padding: 30px;
	}

	li {
		display: inline-block;
	}

	a {
		text-decoration: none;
		color: var(--dark-blue);
		font-size: 18px;
		font-weight: 700;
	}

	.logo img {
		height: 60px;
		margin-left: 45px;
	}

	.active {
		color: white;
	}

	.links {
		margin-left: auto;
		margin-right: 90px;
	}

	.links a {
		display: block;
		position: relative;
		padding: 8px 0;
		margin-right: 30px;
	}

	.links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: white;
		opacity: 0;
		transition: opacity 300ms, transform 300ms;
	}

	.links a:hover::after,
	.links a:focus::after {
		opacity: 1;
		transform: translate3d(0, 2px, 0);
	}

	.links li a::after {
		opacity: 1;
		transform: scale(0);
		transform-origin: center;
	}

	.links li a:hover::after,
	.links li a:focus::after {
		transform: scale(1);
	}

	.headerChange {
		background-color: var(--pink);
		border-bottom: 1px solid var(--dark-blue);
		box-shadow: 0 0 6px 1px var(--dark-blue);
	}

	.socials {
		position: absolute;
		right: 2vw;
	}
</style>
