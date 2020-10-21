import 'd2l-organizations/components/d2l-organization-admin-list/d2l-organization-admin-list.js';
import 'foundation-components/components/activity/editor/d2l-activity-editor.js';
import { html, LitElement } from 'lit-element/lit-element.js';

class CollectionEditor extends LitElement {
	static get properties() {
		return {
			href: { type: String },
			token: { type: String }
		};
	}

	render() {
		return html`<d2l-activity-editor href="${this.href}" .token="${this.token}"></d2l-activity-editor>`;
	}
}
customElements.define('d2l-activity-collection-editor', CollectionEditor);
