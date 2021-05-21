import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, c as create_component, q as query_selector_all, b as detach_dev, f as claim_space, h as claim_element, j as children, k as claim_text, l as claim_component, m as add_location, n as attr_dev, o as insert_dev, p as append_dev, r as mount_component, z as set_data_dev, w as transition_in, x as transition_out, y as destroy_component } from './client.676a8f62.js';
import { C as CovidStat, a as CovidChart, T as TableContainer } from './TableContainer.eef1e42d.js';

/* src/routes/[state].svelte generated by Svelte v3.38.2 */
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
	covidstat = new CovidStat({ $$inline: true });
	covidchart = new CovidChart({ $$inline: true });

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
			add_location(h1, file, 23, 2, 487);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 22, 1, 461);
			attr_dev(div1, "class", "section header");
			add_location(div1, file, 21, 0, 431);
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
	return { state: page.params["state"] };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bstateu5D", slots, []);
	let { state } = $$props;
	const writable_props = ["state"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bstateu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	$$self.$capture_state = () => ({
		preload,
		CovidStat,
		CovidChart,
		TableContainer,
		state
	});

	$$self.$inject_state = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [state];
}

class U5Bstateu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { state: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bstateu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*state*/ ctx[0] === undefined && !("state" in props)) {
			console.warn("<U5Bstateu5D> was created without expected prop 'state'");
		}
	}

	get state() {
		throw new Error("<U5Bstateu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set state(value) {
		throw new Error("<U5Bstateu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bstateu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3N0YXRlXS44ODU4ZjdmMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9bc3RhdGVdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlKSB7XG4gICAgICAgIHJldHVybiB7IHN0YXRlOiBwYWdlLnBhcmFtc1tcInN0YXRlXCJdIH07XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBDb3ZpZFN0YXQgZnJvbSAnLi4vY29tcG9uZW50cy9Db3ZpZFN0YXQuc3ZlbHRlJztcblx0XG5cdGltcG9ydCBDb3ZpZENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ292aWRDaGFydC5zdmVsdGUnO1xuXG5cdGltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlQ29udGFpbmVyLnN2ZWx0ZSc7XG5cbiAgICBleHBvcnQgbGV0IHN0YXRlO1xuPC9zY3JpcHQ+XG5cblxuPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5Db3ZpZCAxOSAtIHtzdGF0ZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cInNlY3Rpb24gaGVhZGVyXCI+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHQ8aDE+Q292aWQgMTkgLSB7c3RhdGV9PC9oMT5cblx0PC9kaXY+XG48L2Rpdj5cblxuPENvdmlkU3RhdCAvPlxuXG48Q292aWRDaGFydCAvPlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFrQnVCLEdBQUs7Ozs7Ozs7Ozs7O3VCQUtWLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FHQUxBLEdBQUs7Ozs7bUVBS1YsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXRCRyxPQUFPLENBQUMsSUFBSTtVQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7Ozs7T0FXNUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
