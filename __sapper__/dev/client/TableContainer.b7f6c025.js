import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, b as space, j as claim_element, k as children, l as claim_text, f as detach_dev, h as claim_space, o as attr_dev, n as add_location, p as insert_dev, r as append_dev, B as set_data_dev, C as noop, c as create_component, m as claim_component, u as mount_component, y as transition_in, z as transition_out, A as destroy_component } from './client.01c0ebee.js';

/* src/components/CovidStat.svelte generated by Svelte v3.38.2 */

const file$4 = "src/components/CovidStat.svelte";

function create_fragment$4(ctx) {
	let div2;
	let div1;
	let div0;
	let h20;
	let t0;
	let t1;
	let t2;
	let h21;
	let t3;
	let t4;
	let t5;
	let h22;
	let t6;
	let t7;
	let t8;
	let h23;
	let t9;
	let t10;
	let t11;
	let div5;
	let div4;
	let div3;
	let h24;
	let t12;
	let t13;
	let t14;
	let h25;
	let t15;
	let t16;
	let t17;
	let h26;
	let t18;
	let t19;
	let t20;
	let h27;
	let t21;
	let t22;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h20 = element("h2");
			t0 = text("Cases: ");
			t1 = text(/*cases*/ ctx[0]);
			t2 = space();
			h21 = element("h2");
			t3 = text("Deaths: ");
			t4 = text(/*deaths*/ ctx[1]);
			t5 = space();
			h22 = element("h2");
			t6 = text("Recovered: ");
			t7 = text(/*recovered*/ ctx[2]);
			t8 = space();
			h23 = element("h2");
			t9 = text("Updated: ");
			t10 = text(/*updated*/ ctx[7]);
			t11 = space();
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			h24 = element("h2");
			t12 = text("Tested: ");
			t13 = text(/*tested*/ ctx[6]);
			t14 = space();
			h25 = element("h2");
			t15 = text("Hospitalize: ");
			t16 = text(/*hospitalized*/ ctx[4]);
			t17 = space();
			h26 = element("h2");
			t18 = text("Total ICU: ");
			t19 = text(/*icu*/ ctx[5]);
			t20 = space();
			h27 = element("h2");
			t21 = text("Total Ventilator: ");
			t22 = text(/*ventilator*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h20 = claim_element(div0_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t0 = claim_text(h20_nodes, "Cases: ");
			t1 = claim_text(h20_nodes, /*cases*/ ctx[0]);
			h20_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			h21 = claim_element(div0_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t3 = claim_text(h21_nodes, "Deaths: ");
			t4 = claim_text(h21_nodes, /*deaths*/ ctx[1]);
			h21_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			h22 = claim_element(div0_nodes, "H2", { class: true });
			var h22_nodes = children(h22);
			t6 = claim_text(h22_nodes, "Recovered: ");
			t7 = claim_text(h22_nodes, /*recovered*/ ctx[2]);
			h22_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			h23 = claim_element(div0_nodes, "H2", { class: true });
			var h23_nodes = children(h23);
			t9 = claim_text(h23_nodes, "Updated: ");
			t10 = claim_text(h23_nodes, /*updated*/ ctx[7]);
			h23_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h24 = claim_element(div3_nodes, "H2", { class: true });
			var h24_nodes = children(h24);
			t12 = claim_text(h24_nodes, "Tested: ");
			t13 = claim_text(h24_nodes, /*tested*/ ctx[6]);
			h24_nodes.forEach(detach_dev);
			t14 = claim_space(div3_nodes);
			h25 = claim_element(div3_nodes, "H2", { class: true });
			var h25_nodes = children(h25);
			t15 = claim_text(h25_nodes, "Hospitalize: ");
			t16 = claim_text(h25_nodes, /*hospitalized*/ ctx[4]);
			h25_nodes.forEach(detach_dev);
			t17 = claim_space(div3_nodes);
			h26 = claim_element(div3_nodes, "H2", { class: true });
			var h26_nodes = children(h26);
			t18 = claim_text(h26_nodes, "Total ICU: ");
			t19 = claim_text(h26_nodes, /*icu*/ ctx[5]);
			h26_nodes.forEach(detach_dev);
			t20 = claim_space(div3_nodes);
			h27 = claim_element(div3_nodes, "H2", { class: true });
			var h27_nodes = children(h27);
			t21 = claim_text(h27_nodes, "Total Ventilator: ");
			t22 = claim_text(h27_nodes, /*ventilator*/ ctx[3]);
			h27_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h20, "class", "is-3 column");
			add_location(h20, file$4, 20, 12, 377);
			attr_dev(h21, "class", "is-3 column");
			add_location(h21, file$4, 21, 12, 433);
			attr_dev(h22, "class", "is-3 column");
			add_location(h22, file$4, 22, 12, 491);
			attr_dev(h23, "class", "is-3 column");
			add_location(h23, file$4, 23, 12, 555);
			attr_dev(div0, "class", "columns svelte-1bw7fy0");
			add_location(div0, file$4, 19, 8, 343);
			attr_dev(div1, "class", "container");
			add_location(div1, file$4, 18, 4, 311);
			attr_dev(div2, "class", "section");
			add_location(div2, file$4, 17, 0, 285);
			attr_dev(h24, "class", "is-3 column");
			add_location(h24, file$4, 31, 12, 729);
			attr_dev(h25, "class", "is-3 column");
			add_location(h25, file$4, 32, 12, 787);
			attr_dev(h26, "class", "is-3 column");
			add_location(h26, file$4, 33, 12, 856);
			attr_dev(h27, "class", "is-3 column");
			add_location(h27, file$4, 34, 12, 914);
			attr_dev(div3, "class", "columns svelte-1bw7fy0");
			add_location(div3, file$4, 30, 8, 695);
			attr_dev(div4, "class", "container");
			add_location(div4, file$4, 29, 4, 663);
			attr_dev(div5, "class", "section");
			add_location(div5, file$4, 28, 0, 637);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, h20);
			append_dev(h20, t0);
			append_dev(h20, t1);
			append_dev(div0, t2);
			append_dev(div0, h21);
			append_dev(h21, t3);
			append_dev(h21, t4);
			append_dev(div0, t5);
			append_dev(div0, h22);
			append_dev(h22, t6);
			append_dev(h22, t7);
			append_dev(div0, t8);
			append_dev(div0, h23);
			append_dev(h23, t9);
			append_dev(h23, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, h24);
			append_dev(h24, t12);
			append_dev(h24, t13);
			append_dev(div3, t14);
			append_dev(div3, h25);
			append_dev(h25, t15);
			append_dev(h25, t16);
			append_dev(div3, t17);
			append_dev(div3, h26);
			append_dev(h26, t18);
			append_dev(h26, t19);
			append_dev(div3, t20);
			append_dev(div3, h27);
			append_dev(h27, t21);
			append_dev(h27, t22);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*cases*/ 1) set_data_dev(t1, /*cases*/ ctx[0]);
			if (dirty & /*deaths*/ 2) set_data_dev(t4, /*deaths*/ ctx[1]);
			if (dirty & /*recovered*/ 4) set_data_dev(t7, /*recovered*/ ctx[2]);
			if (dirty & /*updated*/ 128) set_data_dev(t10, /*updated*/ ctx[7]);
			if (dirty & /*tested*/ 64) set_data_dev(t13, /*tested*/ ctx[6]);
			if (dirty & /*hospitalized*/ 16) set_data_dev(t16, /*hospitalized*/ ctx[4]);
			if (dirty & /*icu*/ 32) set_data_dev(t19, /*icu*/ ctx[5]);
			if (dirty & /*ventilator*/ 8) set_data_dev(t22, /*ventilator*/ ctx[3]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(div5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CovidStat", slots, []);
	let { cases } = $$props;
	let { deaths } = $$props;
	let { recovered } = $$props;
	let { ventilator } = $$props;
	let { hospitalized } = $$props;
	let { icu } = $$props;
	let { tested } = $$props;
	let { updated } = $$props;

	const writable_props = [
		"cases",
		"deaths",
		"recovered",
		"ventilator",
		"hospitalized",
		"icu",
		"tested",
		"updated"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CovidStat> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("cases" in $$props) $$invalidate(0, cases = $$props.cases);
		if ("deaths" in $$props) $$invalidate(1, deaths = $$props.deaths);
		if ("recovered" in $$props) $$invalidate(2, recovered = $$props.recovered);
		if ("ventilator" in $$props) $$invalidate(3, ventilator = $$props.ventilator);
		if ("hospitalized" in $$props) $$invalidate(4, hospitalized = $$props.hospitalized);
		if ("icu" in $$props) $$invalidate(5, icu = $$props.icu);
		if ("tested" in $$props) $$invalidate(6, tested = $$props.tested);
		if ("updated" in $$props) $$invalidate(7, updated = $$props.updated);
	};

	$$self.$capture_state = () => ({
		cases,
		deaths,
		recovered,
		ventilator,
		hospitalized,
		icu,
		tested,
		updated
	});

	$$self.$inject_state = $$props => {
		if ("cases" in $$props) $$invalidate(0, cases = $$props.cases);
		if ("deaths" in $$props) $$invalidate(1, deaths = $$props.deaths);
		if ("recovered" in $$props) $$invalidate(2, recovered = $$props.recovered);
		if ("ventilator" in $$props) $$invalidate(3, ventilator = $$props.ventilator);
		if ("hospitalized" in $$props) $$invalidate(4, hospitalized = $$props.hospitalized);
		if ("icu" in $$props) $$invalidate(5, icu = $$props.icu);
		if ("tested" in $$props) $$invalidate(6, tested = $$props.tested);
		if ("updated" in $$props) $$invalidate(7, updated = $$props.updated);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [cases, deaths, recovered, ventilator, hospitalized, icu, tested, updated];
}

class CovidStat extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
			cases: 0,
			deaths: 1,
			recovered: 2,
			ventilator: 3,
			hospitalized: 4,
			icu: 5,
			tested: 6,
			updated: 7
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CovidStat",
			options,
			id: create_fragment$4.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*cases*/ ctx[0] === undefined && !("cases" in props)) {
			console.warn("<CovidStat> was created without expected prop 'cases'");
		}

		if (/*deaths*/ ctx[1] === undefined && !("deaths" in props)) {
			console.warn("<CovidStat> was created without expected prop 'deaths'");
		}

		if (/*recovered*/ ctx[2] === undefined && !("recovered" in props)) {
			console.warn("<CovidStat> was created without expected prop 'recovered'");
		}

		if (/*ventilator*/ ctx[3] === undefined && !("ventilator" in props)) {
			console.warn("<CovidStat> was created without expected prop 'ventilator'");
		}

		if (/*hospitalized*/ ctx[4] === undefined && !("hospitalized" in props)) {
			console.warn("<CovidStat> was created without expected prop 'hospitalized'");
		}

		if (/*icu*/ ctx[5] === undefined && !("icu" in props)) {
			console.warn("<CovidStat> was created without expected prop 'icu'");
		}

		if (/*tested*/ ctx[6] === undefined && !("tested" in props)) {
			console.warn("<CovidStat> was created without expected prop 'tested'");
		}

		if (/*updated*/ ctx[7] === undefined && !("updated" in props)) {
			console.warn("<CovidStat> was created without expected prop 'updated'");
		}
	}

	get cases() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set cases(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get deaths() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set deaths(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get recovered() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set recovered(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ventilator() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ventilator(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hospitalized() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set hospitalized(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get icu() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set icu(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tested() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tested(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get updated() {
		throw new Error("<CovidStat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set updated(value) {
		throw new Error("<CovidStat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/CovidChart.svelte generated by Svelte v3.38.2 */

const file$3 = "src/components/CovidChart.svelte";

function create_fragment$3(ctx) {
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
			add_location(h1, file$3, 0, 0, 0);
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
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props) {
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
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CovidChart",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/components/TableFilter.svelte generated by Svelte v3.38.2 */

const file$2 = "src/components/TableFilter.svelte";

function create_fragment$2(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("Table Filter");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Table Filter");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$2, 0, 0, 0);
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
	validate_slots("TableFilter", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TableFilter> was created with unknown prop '${key}'`);
	});

	return [];
}

class TableFilter extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TableFilter",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/components/Table.svelte generated by Svelte v3.38.2 */

const file$1 = "src/components/Table.svelte";

function create_fragment$1(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("Table");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Table");
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
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Table", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Table> was created with unknown prop '${key}'`);
	});

	return [];
}

class Table extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Table",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/components/TableContainer.svelte generated by Svelte v3.38.2 */
const file = "src/components/TableContainer.svelte";

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let tablefilter;
	let t2;
	let table;
	let current;
	tablefilter = new TableFilter({ $$inline: true });
	table = new Table({ $$inline: true });

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Table Container");
			t1 = space();
			create_component(tablefilter.$$.fragment);
			t2 = space();
			create_component(table.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Table Container");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			claim_component(tablefilter.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(table.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 5, 0, 112);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			mount_component(tablefilter, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(table, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(tablefilter.$$.fragment, local);
			transition_in(table.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tablefilter.$$.fragment, local);
			transition_out(table.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			destroy_component(tablefilter, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(table, detaching);
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
	validate_slots("TableContainer", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TableContainer> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ TableFilter, Table });
	return [];
}

class TableContainer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TableContainer",
			options,
			id: create_fragment.name
		});
	}
}

export { CovidStat as C, TableContainer as T, CovidChart as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVDb250YWluZXIuYjdmNmMwMjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvdmlkU3RhdC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGNhc2VzO1xuICAgIGV4cG9ydCBsZXQgZGVhdGhzO1xuICAgIGV4cG9ydCBsZXQgcmVjb3ZlcmVkO1xuICAgIGV4cG9ydCBsZXQgdmVudGlsYXRvcjtcbiAgICBleHBvcnQgbGV0IGhvc3BpdGFsaXplZDtcbiAgICBleHBvcnQgbGV0IGljdTtcbiAgICBleHBvcnQgbGV0IHRlc3RlZDtcbiAgICBleHBvcnQgbGV0IHVwZGF0ZWQ7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5jb2x1bW5zIHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImlzLTMgY29sdW1uXCI+Q2FzZXM6IHtjYXNlc308L2gyPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiaXMtMyBjb2x1bW5cIj5EZWF0aHM6IHtkZWF0aHN9PC9oMj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImlzLTMgY29sdW1uXCI+UmVjb3ZlcmVkOiB7cmVjb3ZlcmVkfTwvaDI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJpcy0zIGNvbHVtblwiPlVwZGF0ZWQ6IHt1cGRhdGVkfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiaXMtMyBjb2x1bW5cIj5UZXN0ZWQ6IHt0ZXN0ZWR9PC9oMj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImlzLTMgY29sdW1uXCI+SG9zcGl0YWxpemU6IHtob3NwaXRhbGl6ZWR9PC9oMj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImlzLTMgY29sdW1uXCI+VG90YWwgSUNVOiB7aWN1fTwvaDI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJpcy0zIGNvbHVtblwiPlRvdGFsIFZlbnRpbGF0b3I6IHt2ZW50aWxhdG9yfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBb0I0QyxHQUFLOzs7O3dCQUNKLEdBQU07Ozs7MkJBQ0gsR0FBUzs7OzswQkFDWCxHQUFPOzs7Ozs7O3lCQVFSLEdBQU07Ozs7K0JBQ0QsR0FBWTs7OztzQkFDZCxHQUFHOzs7OzZCQUNJLEdBQVU7Ozs7Ozs7Ozs7Ozs7d0NBZHJCLEdBQUs7Ozs7Ozt5Q0FDSixHQUFNOzs7Ozs7NENBQ0gsR0FBUzs7Ozs7OzJDQUNYLEdBQU87Ozs7Ozs7Ozs7Ozs7OzswQ0FRUixHQUFNOzs7Ozs7Z0RBQ0QsR0FBWTs7Ozs7O3VDQUNkLEdBQUc7Ozs7Ozs4Q0FDSSxHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFkckIsR0FBSzt5REFDSixHQUFNOytEQUNILEdBQVM7OERBQ1gsR0FBTzsyREFRUixHQUFNO3VFQUNELEdBQVk7cURBQ2QsR0FBRztrRUFDSSxHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BakNsRCxLQUFLO09BQ0wsTUFBTTtPQUNOLFNBQVM7T0FDVCxVQUFVO09BQ1YsWUFBWTtPQUNaLEdBQUc7T0FDSCxNQUFNO09BQ04sT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
