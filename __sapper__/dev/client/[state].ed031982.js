import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, k as element, l as text, a as space, c as create_component, o as claim_element, p as children, q as claim_text, j as detach_dev, e as claim_space, b as claim_component, r as add_location, f as insert_dev, u as append_dev, m as mount_component, w as set_data_dev, t as transition_in, g as transition_out, h as destroy_component } from './client.30012453.js';
import { C as CovidStat, a as CovidChart, T as TableContainer } from './TableContainer.8be0c2f0.js';

/* src/routes/[state].svelte generated by Svelte v3.38.2 */
const file = "src/routes/[state].svelte";

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let covidstat;
	let t2;
	let covidchart;
	let current;
	covidstat = new CovidStat({ $$inline: true });
	covidchart = new CovidChart({ $$inline: true });

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(/*state*/ ctx[0]);
			t1 = space();
			create_component(covidstat.$$.fragment);
			t2 = space();
			create_component(covidchart.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*state*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			claim_component(covidstat.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(covidchart.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 16, 0, 362);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			mount_component(covidstat, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(covidchart, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*state*/ 1) set_data_dev(t0, /*state*/ ctx[0]);
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
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			destroy_component(covidstat, detaching);
			if (detaching) detach_dev(t2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3N0YXRlXS5lZDAzMTk4Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9bc3RhdGVdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlKSB7XG4gICAgICAgIHJldHVybiB7IHN0YXRlOiBwYWdlLnBhcmFtc1tcInN0YXRlXCJdIH07XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBDb3ZpZFN0YXQgZnJvbSAnLi4vY29tcG9uZW50cy9Db3ZpZFN0YXQuc3ZlbHRlJztcblx0XG5cdGltcG9ydCBDb3ZpZENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ292aWRDaGFydC5zdmVsdGUnO1xuXG5cdGltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlQ29udGFpbmVyLnN2ZWx0ZSc7XG5cbiAgICBleHBvcnQgbGV0IHN0YXRlO1xuPC9zY3JpcHQ+XG5cbjxoMT57c3RhdGV9PC9oMT5cblxuPENvdmlkU3RhdCAvPlxuXG48Q292aWRDaGFydCAvPlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBZ0JLLEdBQUs7Ozs7Ozs7Ozs7dUNBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWZnQixPQUFPLENBQUMsSUFBSTtVQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7Ozs7T0FXNUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
