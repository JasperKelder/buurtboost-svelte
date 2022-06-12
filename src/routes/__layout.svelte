<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import PageTransition from '$lib/PageTransition.svelte';
	import Popup from '../lib/Popup.svelte';

	export let url;
</script>

<Popup />
<Header />
<PageTransition {url}>
	<main>
		<slot />
	</main>
	<Footer />
</PageTransition>
