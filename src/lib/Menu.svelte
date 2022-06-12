<script>
	import { fly } from 'svelte/transition';
	import Scan from './menu/Scan.svelte';
	import Peiling from './menu/Peiling.svelte';
	import Scenarios from './menu/Scenarios.svelte';
	import Strategie from './menu/Strategie.svelte';
	import Plan from './menu/Plan.svelte';
	import Ontwikkeling from './menu/Ontwikkeling.svelte';
	import Realisatie from './menu/Realisatie.svelte';
	import Gebruik from './menu/Gebruik.svelte';

	export let scan = false;
	export let peiling = false;
	export let scenarios = false;
	export let strategie = false;
	export let plan = false;
	export let ontwikkeling = false;
	export let realisatie = false;
	export let gebruik = false;
</script>

{#if scan}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Scan />
	</nav>
{/if}
{#if peiling}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Peiling />
	</nav>
{/if}
{#if scenarios}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Scenarios />
	</nav>
{/if}
{#if strategie}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Strategie />
	</nav>
{/if}
{#if plan}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Plan />
	</nav>
{/if}
{#if ontwikkeling}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Ontwikkeling />
	</nav>
{/if}
{#if realisatie}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Realisatie />
	</nav>
{/if}
{#if gebruik}
	<nav transition:fly={{ x: 200, opacity: 0 }}>
		<Gebruik />
	</nav>
{/if}

<style>
	nav {
		position: absolute;
		top: 600px;
		right: 200px;
		height: 500px;
		width: 500px;
		font-size: 20px;
		font-weight: 300;
	}
</style>
