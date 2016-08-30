(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.redactorLangs = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function ($) {
    $.Redactor.opts.langs['en'] = {
      html: 'HTML',
      video: 'Insert Video...',
      image: 'Insert Image...',
      table: 'Table',
      link: 'Link',
      link_insert: 'Insert Link ...',
      link_edit: 'Edit link',
      unlink: 'Unlink',
      formatting: 'Formatting',
      paragraph: 'Normal',
      quote: 'Quote',
      code: 'Code',
      header1: 'Huge',
      header2: 'Large',
      header3: 'Header 3',
      header4: 'Header 4',
      header5: 'Header 5',
      bold: 'Bold',
      italic: 'Italic',
      fontcolor: 'Font Color',
      backcolor: 'Back Color',
      unorderedlist: 'Unordered List',
      orderedlist: 'Ordered List',
      outdent: 'Outdent',
      indent: 'Indent',
      cancel: 'Cancel',
      insert: 'Insert',
      save: 'Save',
      _delete: 'Delete',
      insert_table: 'Insert Table...',
      insert_row_above: 'Add Row Above',
      insert_row_below: 'Add Row Below',
      insert_column_left: 'Add Column Left',
      insert_column_right: 'Add Column Right',
      delete_column: 'Delete Column',
      delete_row: 'Delete Row',
      delete_table: 'Delete Table',
      rows: 'Rows',
      columns: 'Columns',
      add_head: 'Add Head',
      delete_head: 'Delete Head',
      title: 'Title',
      image_position: 'Position',
      none: 'None',
      left: 'Left',
      right: 'Right',
      image_web_link: 'Image Web Link',
      text: 'Text',
      mailto: 'Email',
      web: 'URL',
      video_html_code: 'Video Embed Code',
      file: 'Insert File...',
      upload: 'Upload',
      download: 'Download',
      choose: 'Choose',
      or_choose: 'Or choose',
      drop_file_here: 'Drop file here',
      align_left: 'Align text to the left',
      align_center: 'Center text',
      align_right: 'Align text to the right',
      align_justify: 'Justify text',
      horizontalrule: 'Insert Horizontal Rule',
      deleted: 'Deleted',
      anchor: 'Anchor',
      link_new_tab: 'Open link in new tab',
      underline: 'Underline',
      alignment: 'Alignment',
      filename: 'Name (optional)',
      edit: 'Edit',
      center: 'Center'
    };
  })(jQuery);
});
