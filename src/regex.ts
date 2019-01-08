// i'm not even going to begin to understand this
// but that won't stop me from stealing it

var attr_name = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

var unquoted = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';

var attr_value =
  '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

var attribute = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

var open_tag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

var close_tag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

var HTML_TAG_RE = new RegExp(
  '^(?:' +
    open_tag +
    '|' +
    close_tag +
    '|' +
    comment +
    '|' +
    processing +
    '|' +
    declaration +
    '|' +
    cdata +
    ')'
);
var HTML_OPEN_CLOSE_TAG_RE = new RegExp(
  '^(?:' + open_tag + '|' + close_tag + ')'
);

export { HTML_TAG_RE, HTML_OPEN_CLOSE_TAG_RE };
