<script>
	import { page } from '$app/stores';

	let pageHeight = '2700';

	if ($page.url.pathname === '/jouw-gebiedspartner') {
		pageHeight = '2500';
	} else if ($page.url.pathname === '/onze-aanpak') {
		pageHeight = '1500';
	} else if ($page.url.pathname === '/contact') {
		pageHeight = '1055';
	}
</script>

<footer id="footer" style="margin-top: {pageHeight}px;">
	<span>
		<p>een initiatief van</p>
		<a href="https://vorm.nl/" target="_blank" rel="noopener noreferrer">
			<img src="svg/vorm.svg" alt="Vorm Logo" id="vorm" width="69px" height="18px" />
		</a>
	</span>

	<nav>
		<ul>
			<li>
				<a href="/onze-aanpak">Aanpak</a>
			</li>
			<li>
				<a href="/jouw-gebiedspartner">Gebiedspartners</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="#footer" onclick="confetti()">Disclaimer</a>
			</li>
			<li>
				<a href="#footer" onclick="confetti()">Cookies</a>
			</li>
			<li>
				<a href="#footer" onclick="confetti()">Colofon</a>
			</li>
		</ul>
	</nav>
</footer>

<style>
	footer {
		background-color: var(--dark-blue);
		height: 300px;
		width: 100%;
		position: absolute;
		box-shadow: 0 0 6px 1px var(--dark-blue);
	}

	nav {
		display: flex;
		position: absolute;
		right: 10px;
		bottom: 80px;
	}

	ul {
		list-style: none;
		margin: 0 70px;
	}

	a {
		color: white;
		transition: color 0.5s, box-shadow 0.5s;
	}

	a:hover {
		color: var(--yellow);
	}

	p {
		color: white;
		font-size: 20px;
		font-weight: 200;
	}

	#vorm {
		margin-top: 4px;
		margin-left: 10px;
	}

	span {
		display: flex;
		position: absolute;
		bottom: 50px;
		left: 100px;
	}
</style>
