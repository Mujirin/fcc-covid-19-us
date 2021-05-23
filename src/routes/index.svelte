<script context="module">
	import requests from '../data/requests.js';
	
	
	export async function preload() {
		try {
			const usStats = await requests.usStats();
			const historicUS = await requests.historicUS();
			// console.log(historicUS, 'historicUS');

			return { usStats, historicUS }
		} catch(e) {
			console.log(e);
			this.error(500, 
			"There was an eror in calling the api, please try again in 5 minutes.");
			return;

		}
	}
</script>

<script>
	import CovidStat from '../components/CovidStat.svelte';
	
	import CovidChart from '../components/CovidChart.svelte';

	import TableContainer from '../components/TableContainer.svelte';

	export let usStats;
	export let historicUS;
	console.log(historicUS, 'historicUS');
	// console.log(usStats, 'usState');
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