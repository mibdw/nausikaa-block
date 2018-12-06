const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl } = wp.components;

registerBlockType("nausikaa/code-example", {
	title: __("Nausikaä Code Example"),
	description: __(
		"A code example block for the Nausikaä CSS framework documentation page. It renders with a toggle to show/hide the code."
	),
	icon: "carrot",
	category: "common",
	keywords: [__("Nausikaä - Code Example")],
	attributes: {
		content: {
			type: "string",
			source: "text"
		},
		uid: {
			type: "string",
			source: "attribute",
			selector: "input",
			attribute: "id"
		}
	},
	edit({ attributes, setAttributes }) {
		if (!attributes.uid)
			setAttributes({
				uid: Math.random()
					.toString(36)
					.substr(2, 9)
			});

		return (
			<div className="container">
				<TextareaControl
					help="Please put the example code from above element(s) here"
					style={{ height: "10em", fontFamily: "monospace" }}
					onChange={content => setAttributes({ content })}
					value={attributes.content}
				/>
			</div>
		);
	},
	save({ attributes }) {
		return (
			<div className="code-example">
				<input type="checkbox" id={attributes.uid} />
				<label for={attributes.uid} title="Show/hide example code">
					<svg viewBox="0 0 24 24" width="24px" height="24px" className="code">
						<path fill="none" d="M0 0h24v24H0V0z" />
						<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
					</svg>
					<svg viewBox="0 0 24 24" width="24px" height="24px" className="clear">
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</label>
				<pre>
					<code>{attributes.content}</code>
				</pre>
			</div>
		);
	}
});
