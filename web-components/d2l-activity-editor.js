import '@brightspace-ui/polaris/components/activity/editor/d2l-activity-editor.js';
import { html, LitElement } from 'lit-element/lit-element.js';

class CollectionEditor extends LitElement {
	static get properties() {
		return {
			href: { type: String },
			token: { type: String }
		};
	}

	render() {
		return html`
			<slot name="editor-nav" slot="header"></slot>
			<d2l-activity-editor no-header template="primary-secondary" href="${this.href}" .token="${this.token}"></d2l-activity-editor>
		`;
	}
}
customElements.define('d2l-activity-assignment-editor', CollectionEditor);
