<svelte:options runes={true} />

<script>
	import ContactMe from '../../components/ContactMe.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Contact | Osuwo Odongo John Frederick</title>
</svelte:head>

<main class="flex flex-col flex-1 p-4">
	<ContactMe formspreeEndpoint={data.formspreeEndpoint} />
</main>
