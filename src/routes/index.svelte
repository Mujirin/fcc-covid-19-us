<script context="module">
	import requests from '../data/requests.js';
	
	export async function preload() {
		try {
			const usStats = await requests.usStats();

			return { usStats }
		} catch(e) {

		}
	}
</script>

<script>
	import CovidStat from '../components/CovidStat.svelte';
	
	import CovidChart from '../components/CovidChart.svelte';

	import TableContainer from '../components/TableContainer.svelte';
import About from './about.svelte';
import Nav from '../components/Nav.svelte';

	export let usStats;

	console.log(usStats, 'usState')
</script>

<svelte:head>
    <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - US</h1>
	</div>
</div>

<CovidStat {...usStats}/>

<CovidChart />

<TableContainer />