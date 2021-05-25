import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, C as globals, D as assign, v as validate_slots, H as Error, a as space, e as element, t as text, w as create_component, E as query_selector_all, g as detach_dev, h as claim_space, c as claim_element, b as children, f as claim_text, x as claim_component, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, y as mount_component, n as set_data_dev, F as get_spread_update, G as get_spread_object, z as transition_in, A as transition_out, B as destroy_component } from './client.0bc81fc4.js';
import { s as stateNames, r as requests, C as CovidStat, a as CovidChart, T as TableContainer, R as Routes, b as Table } from './index.fc4636f5.js';
import About from './about.b3725227.js';

/* src/routes/[state].svelte generated by Svelte v3.38.2 */

const { Error: Error_1, console: console_1 } = globals;
const file = "src/routes/[state].svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let t3;
	let covidstat;
	let t4;
	let covidchart;
	let current;
	document.title = title_value = "Covid 19 - " + /*state*/ ctx[0];
	const covidstat_spread_levels = [/*stats*/ ctx[1]];
	let covidstat_props = {};

	for (let i = 0; i < covidstat_spread_levels.length; i += 1) {
		covidstat_props = assign(covidstat_props, covidstat_spread_levels[i]);
	}

	covidstat = new CovidStat({ props: covidstat_props, $$inline: true });

	covidchart = new CovidChart({
			props: {
				historicData: /*historic*/ ctx[2],
				title: "Covid 10 - " + /*state*/ ctx[0]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Covid 19 - ");
			t2 = text(/*state*/ ctx[0]);
			t3 = space();
			create_component(covidstat.$$.fragment);
			t4 = space();
			create_component(covidchart.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-hbep04\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Covid 19 - ");
			t2 = claim_text(h1_nodes, /*state*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(covidstat.$$.fragment, nodes);
			t4 = claim_space(nodes);
			claim_component(covidchart.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 53, 2, 1533);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 52, 1, 1507);
			attr_dev(div1, "class", "section header");
			add_location(div1, file, 51, 0, 1477);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			mount_component(covidstat, target, anchor);
			insert_dev(target, t4, anchor);
			mount_component(covidchart, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*state*/ 1) && title_value !== (title_value = "Covid 19 - " + /*state*/ ctx[0])) {
				document.title = title_value;
			}

			if (!current || dirty & /*state*/ 1) set_data_dev(t2, /*state*/ ctx[0]);

			const covidstat_changes = (dirty & /*stats*/ 2)
			? get_spread_update(covidstat_spread_levels, [get_spread_object(/*stats*/ ctx[1])])
			: {};

			covidstat.$set(covidstat_changes);
			const covidchart_changes = {};
			if (dirty & /*historic*/ 4) covidchart_changes.historicData = /*historic*/ ctx[2];
			if (dirty & /*state*/ 1) covidchart_changes.title = "Covid 10 - " + /*state*/ ctx[0];
			covidchart.$set(covidchart_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(covidstat.$$.fragment, local);
			transition_in(covidchart.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(covidstat.$$.fragment, local);
			transition_out(covidchart.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t3);
			destroy_component(covidstat, detaching);
			if (detaching) detach_dev(t4);
			destroy_component(covidchart, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page) {
	const state = page.params["state"];
	console.log(state, "STATE", stateNames.find(s => s.abbreviation === state) === undefined);

	if (stateNames.find(s => s.abbreviation === state) === undefined) {
		console.log("Should get error");
		this.error(404, "State Not Found in This Universe");
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
		this.error(500, "There was an eror in calling the api, please try again in 5 minutes.");
		return;
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bstateu5D", slots, []);
	let { state } = $$props;
	let { stats } = $$props;
	let { historic } = $$props;
	const writable_props = ["state", "stats", "historic"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bstateu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
		if ("stats" in $$props) $$invalidate(1, stats = $$props.stats);
		if ("historic" in $$props) $$invalidate(2, historic = $$props.historic);
	};

	$$self.$capture_state = () => ({
		stateNames,
		requests,
		preload,
		CovidStat,
		CovidChart,
		TableContainer,
		About,
		Error,
		Index: Routes,
		Table,
		state,
		stats,
		historic
	});

	$$self.$inject_state = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
		if ("stats" in $$props) $$invalidate(1, stats = $$props.stats);
		if ("historic" in $$props) $$invalidate(2, historic = $$props.historic);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [state, stats, historic];
}

class U5Bstateu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { state: 0, stats: 1, historic: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bstateu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*state*/ ctx[0] === undefined && !("state" in props)) {
			console_1.warn("<U5Bstateu5D> was created without expected prop 'state'");
		}

		if (/*stats*/ ctx[1] === undefined && !("stats" in props)) {
			console_1.warn("<U5Bstateu5D> was created without expected prop 'stats'");
		}

		if (/*historic*/ ctx[2] === undefined && !("historic" in props)) {
			console_1.warn("<U5Bstateu5D> was created without expected prop 'historic'");
		}
	}

	get state() {
		throw new Error_1("<U5Bstateu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set state(value) {
		throw new Error_1("<U5Bstateu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get stats() {
		throw new Error_1("<U5Bstateu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stats(value) {
		throw new Error_1("<U5Bstateu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get historic() {
		throw new Error_1("<U5Bstateu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set historic(value) {
		throw new Error_1("<U5Bstateu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bstateu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3N0YXRlXS5hNzhiYTgwYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9bc3RhdGVdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0aW1wb3J0IHN0YXRlTmFtZXMgZnJvbSAnLi4vZGF0YS9zdGF0ZU5hbWVzLmpzJztcblx0aW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL2RhdGEvcmVxdWVzdHMuanMnO1xuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSkge1xuXHRcdGNvbnN0IHN0YXRlID0gcGFnZS5wYXJhbXNbXCJzdGF0ZVwiXTtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZSwgJ1NUQVRFJywgc3RhdGVOYW1lcy5maW5kKHMgPT4gcy5hYmJyZXZpYXRpb24gPT09IHN0YXRlKSA9PT0gdW5kZWZpbmVkKVxuXHRcdGlmIChzdGF0ZU5hbWVzLmZpbmQocyA9PiBzLmFiYnJldmlhdGlvbiA9PT0gc3RhdGUpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2hvdWxkIGdldCBlcnJvclwiKTtcblx0XHRcdHRoaXMuZXJyb3IoNDA0LCAnU3RhdGUgTm90IEZvdW5kIGluIFRoaXMgVW5pdmVyc2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZnVsbFN0YXRlTmFtZSA9IHN0YXRlTmFtZXMuZmluZChzID0+IHMuYWJicmV2aWF0aW9uID09PSBzdGF0ZSkubmFtZTtcblx0XHR0cnkge1xuXHRcdFx0XG5cdFx0XHRjb25zdCBzdGF0cyA9IGF3YWl0IHJlcXVlc3RzLnN0YXRlU3RhdHMoc3RhdGUpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJIRVJFXCIsIHN0YXRzKTtcblx0XHRcdGNvbnN0IGhpc3RvcmljID0gYXdhaXQgcmVxdWVzdHMuaGlzdG9yaWNTdGF0ZShzdGF0ZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhoaXN0b3JpYywgXCJoaXN0b3JpYyBzdGF0ZVwiKTtcblx0XHRcdHJldHVybiB7IHN0YXRlOiBmdWxsU3RhdGVOYW1lLCBzdGF0cywgaGlzdG9yaWMgfTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdHRoaXMuZXJyb3IoNTAwLCBcblx0XHRcdFwiVGhlcmUgd2FzIGFuIGVyb3IgaW4gY2FsbGluZyB0aGUgYXBpLCBwbGVhc2UgdHJ5IGFnYWluIGluIDUgbWludXRlcy5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgQ292aWRTdGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ292aWRTdGF0LnN2ZWx0ZSc7XG5cdFxuXHRpbXBvcnQgQ292aWRDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NvdmlkQ2hhcnQuc3ZlbHRlJztcblxuXHRpbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZUNvbnRhaW5lci5zdmVsdGUnO1xuXHRcdFxuXHRpbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dC5zdmVsdGUnO1xuXHRpbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3Iuc3ZlbHRlJztcbmltcG9ydCBJbmRleCBmcm9tICcuL2luZGV4LnN2ZWx0ZSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZS5zdmVsdGUnO1xuXG4gICAgZXhwb3J0IGxldCBzdGF0ZTtcblx0ZXhwb3J0IGxldCBzdGF0cztcblx0ZXhwb3J0IGxldCBoaXN0b3JpYztcblx0Ly8gY29uc29sZS5sb2coaGlzdG9yaWMsIFwiaGlzdG9yaWNcIilcbjwvc2NyaXB0PlxuXG5cbjxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+Q292aWQgMTkgLSB7c3RhdGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJzZWN0aW9uIGhlYWRlclwiPlxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGgxPkNvdmlkIDE5IC0ge3N0YXRlfTwvaDE+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbjxDb3ZpZFN0YXQgey4uLnN0YXRzfS8+XG5cbjxDb3ZpZENoYXJ0IGhpc3RvcmljRGF0YT17aGlzdG9yaWN9IHRpdGxlPVwiQ292aWQgMTAgLSB7c3RhdGV9XCIvPlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFnRHVCLEdBQUs7NENBU2IsR0FBSzs7Ozs7Ozs7Ozs7K0JBRU0sR0FBUTtxQ0FBcUIsR0FBSzs7Ozs7Ozs7Ozs7O3VCQU4xQyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxR0FMQSxHQUFLOzs7O21FQUtWLEdBQUs7Ozs2RUFJUixHQUFLOzs7Ozs4RUFFTSxHQUFRO2lGQUFxQixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXZEbEMsT0FBTyxDQUFDLElBQUk7T0FDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztDQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksS0FBSyxLQUFLLE1BQU0sU0FBUzs7S0FDcEYsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksS0FBSyxLQUFLLE1BQU0sU0FBUztFQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtFQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxrQ0FBa0M7Ozs7T0FHN0MsYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFLElBQUk7OztRQUdsRSxLQUFLLFNBQVMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLO0VBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUs7UUFDbkIsUUFBUSxTQUFTLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSztFQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0I7V0FDN0IsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUTtTQUN2QyxDQUFDO0VBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQ2Qsc0VBQXNFOzs7Ozs7OztPQWtCMUQsS0FBSztPQUNSLEtBQUs7T0FDTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
