<script context="module">
	import requests from '../data/requests.js';
	
	
	export async function preload() {
		try {
			const usStats = await requests.usStats();
			const historic = await requests.historicUS();
			const statesData = await requests.statesData();
			// console.log(historic, 'historic');

			return { usStats, historic, statesData }
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
	export let historic;
	export let statesData;
	console.log(statesData, 'statesData');
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

<CovidChart historicData={historic} title="US Covid-19"/>
<p>{historic} </p>
<TableContainer data={statesData}/>