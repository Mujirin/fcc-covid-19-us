import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as add_location, h as insert_dev, j as append_dev, n as noop, k as create_component, l as space, m as claim_component, o as claim_space, p as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './client.39910cc8.js';

/* src/components/CovidStat.svelte generated by Svelte v3.38.2 */

const file$1 = "src/components/CovidStat.svelte";

function create_fragment$2(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("Covid Stat");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Covid Stat");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CovidStat", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CovidStat> was created with unknown prop '${key}'`);
	});

	return [];
}

class CovidStat extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CovidStat",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/components/CovidChart.svelte generated by Svelte v3.38.2 */

const file = "src/components/CovidChart.svelte";

function create_fragment$1(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("Covid Chart");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Covid Chart");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CovidChart", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CovidChart> was created with unknown prop '${key}'`);
	});

	return [];
}

class CovidChart extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CovidChart",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.38.2 */

function create_fragment(ctx) {
	let covidstat;
	let t;
	let covidchart;
	let current;
	covidstat = new CovidStat({ $$inline: true });
	covidchart = new CovidChart({ $$inline: true });

	const block = {
		c: function create() {
			create_component(covidstat.$$.fragment);
			t = space();
			create_component(covidchart.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(covidstat.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(covidchart.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(covidstat, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(covidchart, target, anchor);
			current = true;
		},
		p: noop,
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
			destroy_component(covidstat, detaching);
			if (detaching) detach_dev(t);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ CovidStat, CovidChart });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTNjMjc4NDkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
