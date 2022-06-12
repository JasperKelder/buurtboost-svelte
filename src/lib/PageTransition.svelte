<script>
	import { fly } from 'svelte/transition';
	export let url = '';
</script>

{#key url}
	<div in:fly={{ y: -300, duration: 300 }} out:fly={{ y: 300, duration: 300 }}>
		<slot />
	</div>
{/key}
