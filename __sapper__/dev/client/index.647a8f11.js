import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, a as assign, v as validate_slots, b as space, e as element, t as text, c as create_component, q as query_selector_all, f as detach_dev, h as claim_space, j as claim_element, k as children, l as claim_text, m as claim_component, n as add_location, o as attr_dev, p as insert_dev, r as append_dev, u as mount_component, w as get_spread_update, x as get_spread_object, y as transition_in, z as transition_out, A as destroy_component } from './client.f033122c.js';
import { r as requests, C as CovidStat, a as CovidChart, T as TableContainer } from './TableContainer.7f4a7c13.js';

/* src/routes/index.svelte generated by Svelte v3.38.2 */

const { console: console_1 } = globals;
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let covidstat;
	let t3;
	let covidchart;
	let t4;
	let tablecontainer;
	let current;
	const covidstat_spread_levels = [/*usStats*/ ctx[0]];
	let covidstat_props = {};

	for (let i = 0; i < covidstat_spread_levels.length; i += 1) {
		covidstat_props = assign(covidstat_props, covidstat_spread_levels[i]);
	}

	covidstat = new CovidStat({ props: covidstat_props, $$inline: true });
	covidchart = new CovidChart({ $$inline: true });
	tablecontainer = new TableContainer({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Covid 19 - US");
			t2 = space();
			create_component(covidstat.$$.fragment);
			t3 = space();
			create_component(covidchart.$$.fragment);
			t4 = space();
			create_component(tablecontainer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1m7wmeq\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Covid 19 - US");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(covidstat.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(covidchart.$$.fragment, nodes);
			t4 = claim_space(nodes);
			claim_component(tablecontainer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Covid 19 US Tracker";
			add_location(h1, file, 40, 2, 908);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 39, 1, 882);
			attr_dev(div1, "class", "section header");
			add_location(div1, file, 38, 0, 852);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			mount_component(covidstat, target, anchor);
			insert_dev(target, t3, anchor);
			mount_component(covidchart, target, anchor);
			insert_dev(target, t4, anchor);
			mount_component(tablecontainer, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const covidstat_changes = (dirty & /*usStats*/ 1)
			? get_spread_update(covidstat_spread_levels, [get_spread_object(/*usStats*/ ctx[0])])
			: {};

			covidstat.$set(covidstat_changes);
		},
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
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t2);
			destroy_component(covidstat, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(covidchart, detaching);
			if (detaching) detach_dev(t4);
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

async function preload() {
	try {
		const usStats = await requests.usStats();
		const historicUS = await requests.historicUS();

		// console.log(historicUS, 'historicUS');
		return { usStats, historicUS };
	} catch(e) {
		console.log(e);
		this.error(500, "There was an eror in calling the api, please try again in 5 minutes.");
		return;
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let { usStats } = $$props;
	let { historicUS } = $$props;
	console.log(historicUS, "historicUS");
	const writable_props = ["usStats", "historicUS"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("usStats" in $$props) $$invalidate(0, usStats = $$props.usStats);
		if ("historicUS" in $$props) $$invalidate(1, historicUS = $$props.historicUS);
	};

	$$self.$capture_state = () => ({
		requests,
		preload,
		CovidStat,
		CovidChart,
		TableContainer,
		usStats,
		historicUS
	});

	$$self.$inject_state = $$props => {
		if ("usStats" in $$props) $$invalidate(0, usStats = $$props.usStats);
		if ("historicUS" in $$props) $$invalidate(1, historicUS = $$props.historicUS);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [usStats, historicUS];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { usStats: 0, historicUS: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*usStats*/ ctx[0] === undefined && !("usStats" in props)) {
			console_1.warn("<Routes> was created without expected prop 'usStats'");
		}

		if (/*historicUS*/ ctx[1] === undefined && !("historicUS" in props)) {
			console_1.warn("<Routes> was created without expected prop 'historicUS'");
		}
	}

	get usStats() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set usStats(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get historicUS() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set historicUS(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjQ3YThmMTEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRpbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vZGF0YS9yZXF1ZXN0cy5qcyc7XG5cdFxuXHRcblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHVzU3RhdHMgPSBhd2FpdCByZXF1ZXN0cy51c1N0YXRzKCk7XG5cdFx0XHRjb25zdCBoaXN0b3JpY1VTID0gYXdhaXQgcmVxdWVzdHMuaGlzdG9yaWNVUygpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaGlzdG9yaWNVUywgJ2hpc3RvcmljVVMnKTtcblxuXHRcdFx0cmV0dXJuIHsgdXNTdGF0cywgaGlzdG9yaWNVUyB9XG5cdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdHRoaXMuZXJyb3IoNTAwLCBcblx0XHRcdFwiVGhlcmUgd2FzIGFuIGVyb3IgaW4gY2FsbGluZyB0aGUgYXBpLCBwbGVhc2UgdHJ5IGFnYWluIGluIDUgbWludXRlcy5cIik7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgQ292aWRTdGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ292aWRTdGF0LnN2ZWx0ZSc7XG5cdFxuXHRpbXBvcnQgQ292aWRDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NvdmlkQ2hhcnQuc3ZlbHRlJztcblxuXHRpbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZUNvbnRhaW5lci5zdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgdXNTdGF0cztcblx0ZXhwb3J0IGxldCBoaXN0b3JpY1VTO1xuXHRjb25zb2xlLmxvZyhoaXN0b3JpY1VTLCAnaGlzdG9yaWNVUycpO1xuXHQvLyBjb25zb2xlLmxvZyh1c1N0YXRzLCAndXNTdGF0ZScpO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+Q292aWQgMTkgVVMgVHJhY2tlcjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwic2VjdGlvbiBoZWFkZXJcIj5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxoMT5Db3ZpZCAxOSAtIFVTPC9oMT5cblx0PC9kaXY+XG48L2Rpdj5cblxuPENvdmlkU3RhdCB7Li4udXNTdGF0c30vPlxuXG48Q292aWRDaGFydCAvPlxuXG48VGFibGVDb250YWluZXIgLz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQTRDZSxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0VBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF4Q0MsT0FBTzs7UUFFckIsT0FBTyxTQUFTLFFBQVEsQ0FBQyxPQUFPO1FBQ2hDLFVBQVUsU0FBUyxRQUFRLENBQUMsVUFBVTs7O1dBR25DLE9BQU8sRUFBRSxVQUFVO1NBQ3JCLENBQUM7RUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFDZCxzRUFBc0U7Ozs7Ozs7O09BYzdELE9BQU87T0FDUCxVQUFVO0NBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
