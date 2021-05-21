<script context="module">
	import stateNames from '../data/stateNames.js';

    export async function preload(page) {
		const state = page.params["state"];
		// console.log(stateNames)
		if (stateNames.find(s => s.abbreviation === state) === undefined) {
			console.log("Should get error");
			this.error(404, 'State Not Found in This Universe');
			return;
		}

		try {
			return { state: page.params["state"] };
		} catch(e) {
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

    export let state;
</script>


<svelte:head>
    <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - {state}</h1>
	</div>
</div>

<CovidStat />

<CovidChart />

