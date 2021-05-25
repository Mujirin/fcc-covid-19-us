<script context="module">
	import stateNames from '../data/stateNames.js';
	import requests from '../data/requests.js';

    export async function preload(page) {
		const state = page.params["state"];
		console.log(state, 'STATE', stateNames.find(s => s.abbreviation === state) === undefined)
		if (stateNames.find(s => s.abbreviation === state) === undefined) {
			console.log("Should get error");
			this.error(404, 'State Not Found in This Universe');
			return;
		}
		const fullStateName = stateNames.find(s => s.abbreviation === state).name;
		try {
			
			const stats = await requests.stateStats(state);
			console.log("HERE", stats);
			const historic = await requests.historicState(state);
			console.log(historic, "historic state");
			return { state: fullStateName, stats, historic };
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
		
	import About from './about.svelte';
	import Error from './_error.svelte';
import Index from './index.svelte';
import Table from '../components/Table.svelte';

    export let state;
	export let stats;
	export let historic;
	// console.log(historic, "historic")
</script>


<svelte:head>
    <title>Covid 19 - {state}</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - {state}</h1>
	</div>
</div>

<CovidStat {...stats}/>

<CovidChart historicData={historic} title="Covid 10 - {state}"/>

