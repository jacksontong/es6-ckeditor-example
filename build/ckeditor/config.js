/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// fixed https://snapfrozen.atlassian.net/browse/PS-258
	config.allowedContent = true;

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	// enable our custom plugin
	config.extraPlugins = 'lineutils,widget,placeholder_elements,ckeditor-gwf-plugin';

	config.font_names = 'GoogleWebFonts;' +
			'Arial/Arial, Helvetica, sans-serif;' +
			 	'Comic Sans MS/Comic Sans MS, cursive;' +
	 	'Courier New/Courier New, Courier, monospace;' +
	 	'Georgia/Georgia, serif;' +
	 	'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
	 	'Tahoma/Tahoma, Geneva, sans-serif;' +
	 	'Times New Roman/Times New Roman, Times, serif;' +
	 	'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
	 	'Verdana/Verdana, Geneva, sans-serif';

	config.placeholder_elements = {
		css:
		'.cke_placeholder_element { background: #ffff00;}' +
		'a .cke_placeholder_element { text-decoration: underline }',
		draggable: true,
		uiType: 'combo',
		placeholders: [
			{
				         group: 'Group 1',
				         placeholders: [
				             {label: 'Placeholder 1', value: 'PLACEHOLDER_1'},
				             {label: 'Placeholder 2', value: 'PLACEHOLDER_2'}
				         ]
		     },
	     {
	         group: 'Group 2',
	         placeholders: [
		             {label: 'Placeholder 3', value: 'PLACEHOLDER_4'},
	             {label: 'Placeholder 4', value: 'PLACEHOLDER_5'}
	         ]
	     },
		],
		// Defines the delimiter that indicates the start of a placeholder
		startDelimiter: '[[',

		// Defines the delimiter that indicates the end of a placeholder
		endDelimiter: ']]'
	};

	config.strinsert_button_label = 'Graphs';
	config.strinsert_button_title = 'Graphs & Infographic';
};
