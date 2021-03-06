import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, G as query_selector_all, g as detach_dev, h as claim_space, c as claim_element, b as children, f as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, o as noop } from './client.e1f9fe0f.js';

/* src/routes/about.svelte generated by Svelte v3.38.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;
	let a;
	let t4;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("About");
			t2 = space();
			p = element("p");
			t3 = text("The data for this site came from ");
			a = element("a");
			t4 = text("The Covid Tracking Project");
			t5 = text("\n            . You can learn more about the project by going to their site.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1fi6p7f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "About");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "The data for this site came from ");
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t4 = claim_text(a_nodes, "The Covid Tracking Project");
			a_nodes.forEach(detach_dev);
			t5 = claim_text(p_nodes, "\n            . You can learn more about the project by going to their site.");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About Covid 19 Tracker US";
			add_location(h1, file, 6, 8, 140);
			attr_dev(a, "href", "https://covidtracking.com");
			add_location(a, file, 8, 45, 212);
			add_location(p, file, 7, 8, 163);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 5, 4, 108);
			attr_dev(div1, "class", "section header");
			add_location(div1, file, 4, 0, 75);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			append_dev(p, a);
			append_dev(a, t4);
			append_dev(p, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("About", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYzFlNDA5YTMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
