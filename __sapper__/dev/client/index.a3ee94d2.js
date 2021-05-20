import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as create_component, a as space, b as claim_component, e as claim_space, m as mount_component, f as insert_dev, n as noop, t as transition_in, g as transition_out, h as destroy_component, j as detach_dev } from './client.9a669953.js';
import { C as CovidStat, a as CovidChart, T as TableContainer } from './TableContainer.d5842a57.js';

/* src/routes/index.svelte generated by Svelte v3.38.2 */

function create_fragment(ctx) {
	let covidstat;
	let t0;
	let covidchart;
	let t1;
	let tablecontainer;
	let current;
	covidstat = new CovidStat({ $$inline: true });
	covidchart = new CovidChart({ $$inline: true });
	tablecontainer = new TableContainer({ $$inline: true });

	const block = {
		c: function create() {
			create_component(covidstat.$$.fragment);
			t0 = space();
			create_component(covidchart.$$.fragment);
			t1 = space();
			create_component(tablecontainer.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(covidstat.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(covidchart.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(tablecontainer.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(covidstat, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(covidchart, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(tablecontainer, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(covidstat.$$.fragment, local);
			transition_in(covidchart.$$.fragment, local);
			transition_in(tablecontainer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(covidstat.$$.fragment, local);
			transition_out(covidchart.$$.fragment, local);
			transition_out(tablecontainer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(covidstat, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(covidchart, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(tablecontainer, detaching);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ CovidStat, CovidChart, TableContainer });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTNlZTk0ZDIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
