import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, r as globals, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as add_location, h as insert_dev, j as append_dev, u as set_data_dev, n as noop } from './client.0cc13440.js';

/* src/routes/[state].svelte generated by Svelte v3.38.2 */

const { console: console_1 } = globals;
const file = "src/routes/[state].svelte";

function create_fragment(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text(/*state*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, /*state*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 11, 0, 202);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*state*/ 1) set_data_dev(t, /*state*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
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
	console.log(page);
	return { state: page.params["state"] };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bstateu5D", slots, []);
	let { state } = $$props;
	const writable_props = ["state"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bstateu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	$$self.$capture_state = () => ({ preload, state });

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
			console_1.warn("<U5Bstateu5D> was created without expected prop 'state'");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3N0YXRlXS41MjMzNWRmOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9bc3RhdGVdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgICAgICByZXR1cm4geyBzdGF0ZTogcGFnZS5wYXJhbXNbXCJzdGF0ZVwiXSB9O1xuICAgIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc3RhdGU7XG48L3NjcmlwdD5cblxuPGgxPntzdGF0ZX08L2gxPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztzQkFXSyxHQUFLOzs7Ozs7c0NBQUwsR0FBSzs7Ozs7Ozs7Ozs7O3NEQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBVmdCLE9BQU8sQ0FBQyxJQUFJO0NBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtVQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7OztPQUs1QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
