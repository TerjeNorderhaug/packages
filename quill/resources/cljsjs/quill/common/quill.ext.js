var Quill = {
  "deleteText": function() {},
  "disable": function() {},
  "enable": function() {},
  "getContents": function() {},
  "getLength": function() {},
  "getText": function() {},
  "insertEmbed": function() {},
  "insertText": function() {},
  "pasteHTML": function() {},
  "setContents": function() {},
  "setText": function() {},
  "update": function() {},
  "updateContents": function() {},
  "format": function() {},
  "formatLine": function() {},
  "formatText": function() {},
  "getFormat": function() {},
  "removeFormat": function() {},
  "text-change": function() {},
  "selection-change": function() {},
  "off": function() {},
  "on": function() {},
  "once": function() {},
  "blur": function() {},
  "focus": function() {},
  "getBounds": function() {},
  "getSelection": function() {},
  "hasFocus": function() {},
  "setSelection": function() {},
  "debug": function() {},
  "import": function() {},
  "register": function() {},
  "addContainer": function() {},
  "getModule": function() {},
  "DEFAULTS": {
    "bounds": {},
    "formats": {},
    "modules": {},
    "placeholder": {},
    "readOnly": {},
    "strict": {},
    "theme": {}
  },
  "events": {
    "EDITOR_CHANGE": {},
    "SCROLL_BEFORE_UPDATE": {},
    "SCROLL_OPTIMIZE": {},
    "SCROLL_UPDATE": {},
    "SELECTION_CHANGE": {},
    "TEXT_CHANGE": {}
  },
  "sources": {
    "API": {},
    "SILENT": {},
    "USER": {}
  },
  "version": {},
  "imports": {
    "delta": function () {},
    "parchment": {
      "Scope": {
        "3": {},
        "5": {},
        "6": {},
        "7": {},
        "9": {},
        "10": {},
        "11": {},
        "12": {},
        "13": {},
        "14": {},
        "15": {},
        "TYPE": {},
        "LEVEL": {},
        "ATTRIBUTE": {},
        "BLOT": {},
        "INLINE": {},
        "BLOCK": {},
        "BLOCK_BLOT": {},
        "INLINE_BLOT": {},
        "BLOCK_ATTRIBUTE": {},
        "INLINE_ATTRIBUTE": {},
        "ANY": {}
      },
      "create": function () {},
      "find": function () {},
      "query": function () {},
      "register": function () {},
      "Container": {
        "create": function () {},
        "blotName": {}
      },
      "Format": {
        "create": function () {},
        "blotName": {},
        "formats": function () {}
      },
      "Leaf": {
        "create": function () {},
        "blotName": {},
        "value": function () {},
        "scope": {}
      },
      "Embed": {
        "create": function () {},
        "blotName": {},
        "value": function () {},
        "scope": {},
        "formats": function () {}
      },
      "Scroll": {
        "create": function () {},
        "blotName": {},
        "defaultChild": {},
        "scope": {},
        "tagName": {}
      },
      "Block": {
        "create": function () {},
        "blotName": {},
        "formats": function () {},
        "scope": {},
        "tagName": {}
      },
      "Inline": {
        "create": function () {},
        "blotName": {},
        "formats": function () {},
        "scope": {},
        "tagName": {}
      },
      "Text": {
        "create": function () {},
        "blotName": {},
        "value": function () {},
        "scope": {}
      },
      "Attributor": {
        "Attribute": {
          "keys": function () {}
        },
        "Class": {
          "keys": function () {}
        },
        "Style": {
          "keys": function () {}
        },
        "Store": function () {}
      }
    },
    "core/module": {
      "DEFAULTS": {}
    },
    "core/theme": {
      "DEFAULTS": {
        "modules": {}
      },
      "themes": {
        "default": function () {}
      }
    },
    "blots/block": {
      "blotName": {},
      "tagName": {},
      "defaultChild": {},
      "allowedChildren": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "blots/block/embed": {
      "scope": {},
      "create": function () {},
      "blotName": {},
      "value": function () {},
      "formats": function () {}
    },
    "blots/break": {
      "blotName": {},
      "tagName": {},
      "create": function () {},
      "value": function () {},
      "scope": {},
      "formats": function () {}
    },
    "blots/container": {
      "allowedChildren": {},
      "create": function () {},
      "blotName": {}
    },
    "blots/cursor": {
      "blotName": {},
      "className": {},
      "tagName": {},
      "CONTENTS": {},
      "create": function () {},
      "value": function () {},
      "scope": {},
      "formats": function () {}
    },
    "blots/embed": {
      "create": function () {},
      "blotName": {},
      "value": function () {},
      "scope": {},
      "formats": function () {}
    },
    "blots/inline": {
      "allowedChildren": {},
      "order": {},
      "tagName": {},
      "create": function () {},
      "blotName": {},
      "formats": function () {},
      "scope": {}
    },
    "blots/scroll": {
      "blotName": {},
      "className": {},
      "tagName": {},
      "defaultChild": {},
      "allowedChildren": {},
      "create": function () {},
      "scope": {}
    },
    "blots/text": {
      "create": function () {},
      "blotName": {},
      "value": function () {},
      "scope": {}
    },
    "modules/clipboard": {
      "DEFAULTS": {
        "matchers": {}
      }
    },
    "modules/history": {
      "DEFAULTS": {
        "delay": {},
        "maxStack": {},
        "userOnly": {}
      }
    },
    "modules/keyboard": {
      "keys": {
        "BACKSPACE": {},
        "TAB": {},
        "ENTER": {},
        "ESCAPE": {},
        "LEFT": {},
        "UP": {},
        "RIGHT": {},
        "DOWN": {},
        "DELETE": {}
      },
      "DEFAULTS": {
        "bindings": {
          "bold": {
            "key": {},
            "shortKey": {},
            "handler": function () {}
          },
          "italic": {
            "key": {},
            "shortKey": {},
            "handler": function () {}
          },
          "underline": {
            "key": {},
            "shortKey": {},
            "handler": function () {}
          },
          "indent": {
            "key": {},
            "format": {},
            "handler": function () {}
          },
          "outdent": {
            "key": {},
            "shiftKey": {},
            "format": {},
            "handler": function () {}
          },
          "outdent backspace": {
            "key": {},
            "collapsed": {},
            "format": {},
            "offset": {},
            "handler": function () {}
          },
          "indent code-block": {
            "key": {},
            "shiftKey": {},
            "format": {
              "code-block": {}
            },
            "handler": function () {}
          },
          "outdent code-block": {
            "key": {},
            "shiftKey": {},
            "format": {
              "code-block": {}
            },
            "handler": function () {}
          },
          "remove tab": {
            "key": {},
            "shiftKey": {},
            "collapsed": {},
            "prefix": {},
            "handler": function () {}
          },
          "tab": {
            "key": {},
            "handler": function () {}
          },
          "list empty enter": {
            "key": {},
            "collapsed": {},
            "format": {},
            "empty": {},
            "handler": function () {}
          },
          "header enter": {
            "key": {},
            "collapsed": {},
            "format": {},
            "suffix": {},
            "handler": function () {}
          },
          "list autofill": {
            "key": {},
            "collapsed": {},
            "format": {
              "list": {}
            },
            "prefix": {},
            "handler": function () {}
          }
        }
      }
    },
    "attributors/attribute/direction": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "add": function () {},
      "canAdd": function () {},
      "remove": function () {},
      "value": function () {}
    },
    "attributors/class/align": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/class/background": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/class/color": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/class/direction": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/class/font": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/class/size": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/style/align": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/style/background": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/style/color": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/style/direction": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/style/font": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "attributors/style/size": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/align": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/direction": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/indent": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/background": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/color": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/font": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/size": {
      "attrName": {},
      "keyName": {},
      "scope": {},
      "whitelist": {},
      "constructor": {
        "keys": function () {}
      },
      "add": function () {},
      "remove": function () {},
      "value": function () {},
      "canAdd": function () {}
    },
    "formats/blockquote": {
      "blotName": {},
      "tagName": {},
      "defaultChild": {},
      "allowedChildren": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/code-block": {
      "blotName": {},
      "tagName": {},
      "TAB": {},
      "defaultChild": {},
      "allowedChildren": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/header": {
      "blotName": {},
      "tagName": {},
      "defaultChild": {},
      "allowedChildren": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/list": {
      "blotName": {},
      "scope": {},
      "tagName": {},
      "defaultChild": {},
      "allowedChildren": {},
      "create": function () {}
    },
    "formats/bold": {
      "blotName": {},
      "tagName": {},
      "allowedChildren": {},
      "order": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/code": {
      "blotName": {},
      "tagName": {},
      "allowedChildren": {},
      "order": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/italic": {
      "blotName": {},
      "tagName": {},
      "allowedChildren": {},
      "order": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/link": {
      "blotName": {},
      "tagName": {},
      "SANITIZED_URL": {},
      "allowedChildren": {},
      "order": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/script": {
      "blotName": {},
      "tagName": {},
      "allowedChildren": {},
      "order": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/strike": {
      "blotName": {},
      "tagName": {},
      "allowedChildren": {},
      "order": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/underline": {
      "blotName": {},
      "tagName": {},
      "allowedChildren": {},
      "order": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "formats/image": {
      "blotName": {},
      "tagName": {},
      "create": function () {},
      "value": function () {},
      "scope": {},
      "formats": function () {}
    },
    "formats/video": {
      "blotName": {},
      "className": {},
      "tagName": {},
      "scope": {},
      "create": function () {},
      "value": function () {},
      "formats": function () {}
    },
    "formats/list/item": {
      "blotName": {},
      "tagName": {},
      "defaultChild": {},
      "allowedChildren": {},
      "create": function () {},
      "formats": function () {},
      "scope": {}
    },
    "modules/formula": function () {},
    "modules/syntax": {
      "DEFAULTS": {
        "highlight": {}
      }
    },
    "modules/toolbar": {
      "DEFAULTS": {
        "container": {},
        "handlers": {
          "clean": function () {},
          "direction": function () {},
          "link": function () {},
          "indent": function () {}
        }
      }
    },
    "themes/bubble": function() {},
    "themes/snow": function() {},
    "ui/icons": {
      "align": {
        "": {},
        "center": {},
        "right": {},
        "justify": {}
      },
      "background": {},
      "blockquote": {},
      "bold": {},
      "clean": {},
      "code": {},
      "code-block": {},
      "color": {},
      "direction": {
        "": {},
        "rtl": {}
      },
      "float": {
        "center": {},
        "full": {},
        "left": {},
        "right": {}
      },
      "formula": {},
      "header": {
        "1": {},
        "2": {}
      },
      "italic": {},
      "image": {},
      "indent": {
        "+1": {},
        "-1": {}
      },
      "link": {},
      "list": {
        "ordered": {},
        "bullet": {}
      },
      "script": {
        "sub": {},
        "super": {}
      },
      "strike": {},
      "underline": {},
      "video": {}
    },
    "ui/picker": function () {},
    "ui/icon-picker": function () {},
    "ui/color-picker": function () {},
    "ui/tooltip": function () {}
  }
};
Quill.imports.delta.prototype = {
  "insert": function () {},
  "delete": function () {},
  "retain": function () {},
  "push": function () {},
  "filter": function () {},
  "forEach": function () {},
  "map": function () {},
  "reduce": function () {},
  "chop": function () {},
  "length": function () {},
  "slice": function () {},
  "compose": function () {},
  "concat": function () {},
  "diff": function () {},
  "eachLine": function () {},
  "transform": function () {},
  "transformPosition": function () {}
};
Quill.imports.parchment.Container.prototype = {
  "constructor": function () {},
  "appendChild": function () {},
  "attach": function () {},
  "deleteAt": function () {},
  "descendant": function () {},
  "descendants": function () {},
  "detach": function () {},
  "formatAt": function () {},
  "insertAt": function () {},
  "insertBefore": function () {},
  "length": function () {},
  "moveChildren": function () {},
  "optimize": function () {},
  "path": function () {},
  "removeChild": function () {},
  "replace": function () {},
  "split": function () {},
  "unwrap": function () {},
  "update": function () {},
  "statics": function () {},
  "clone": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "offset": function () {},
  "remove": function () {},
  "replaceWith": function () {},
  "wrap": function () {}
};
Quill.imports.parchment.Format.prototype = {
  "constructor": function () {},
  "attach": function () {},
  "format": function () {},
  "formats": function () {},
  "replaceWith": function () {},
  "update": function () {},
  "wrap": function () {},
  "appendChild": function () {},
  "deleteAt": function () {},
  "descendant": function () {},
  "descendants": function () {},
  "detach": function () {},
  "formatAt": function () {},
  "insertAt": function () {},
  "insertBefore": function () {},
  "length": function () {},
  "moveChildren": function () {},
  "optimize": function () {},
  "path": function () {},
  "removeChild": function () {},
  "replace": function () {},
  "split": function () {},
  "unwrap": function () {},
  "statics": function () {},
  "clone": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "offset": function () {},
  "remove": function () {}
};
Quill.imports.parchment.Leaf.prototype = {
  "constructor": function () {},
  "index": function () {},
  "position": function () {},
  "value": function () {},
  "statics": function () {},
  "attach": function () {},
  "clone": function () {},
  "detach": function () {},
  "deleteAt": function () {},
  "formatAt": function () {},
  "insertAt": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "length": function () {},
  "offset": function () {},
  "optimize": function () {},
  "remove": function () {},
  "replace": function () {},
  "replaceWith": function () {},
  "split": function () {},
  "update": function () {},
  "wrap": function () {}
};
Quill.imports.parchment.Embed.prototype = {
  "constructor": function () {},
  "format": function () {},
  "formatAt": function () {},
  "formats": function () {},
  "index": function () {},
  "position": function () {},
  "value": function () {},
  "statics": function () {},
  "attach": function () {},
  "clone": function () {},
  "detach": function () {},
  "deleteAt": function () {},
  "insertAt": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "length": function () {},
  "offset": function () {},
  "optimize": function () {},
  "remove": function () {},
  "replace": function () {},
  "replaceWith": function () {},
  "split": function () {},
  "update": function () {},
  "wrap": function () {}
};
Quill.imports.parchment.Scroll.prototype = {
  "constructor": function () {},
  "detach": function () {},
  "deleteAt": function () {},
  "formatAt": function () {},
  "insertAt": function () {},
  "optimize": function () {},
  "update": function () {},
  "appendChild": function () {},
  "attach": function () {},
  "descendant": function () {},
  "descendants": function () {},
  "insertBefore": function () {},
  "length": function () {},
  "moveChildren": function () {},
  "path": function () {},
  "removeChild": function () {},
  "replace": function () {},
  "split": function () {},
  "unwrap": function () {},
  "statics": function () {},
  "clone": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "offset": function () {},
  "remove": function () {},
  "replaceWith": function () {},
  "wrap": function () {}
};
Quill.imports.parchment.Block.prototype = {
  "constructor": function () {},
  "format": function () {},
  "formatAt": function () {},
  "insertAt": function () {},
  "attach": function () {},
  "formats": function () {},
  "replaceWith": function () {},
  "update": function () {},
  "wrap": function () {},
  "appendChild": function () {},
  "deleteAt": function () {},
  "descendant": function () {},
  "descendants": function () {},
  "detach": function () {},
  "insertBefore": function () {},
  "length": function () {},
  "moveChildren": function () {},
  "optimize": function () {},
  "path": function () {},
  "removeChild": function () {},
  "replace": function () {},
  "split": function () {},
  "unwrap": function () {},
  "statics": function () {},
  "clone": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "offset": function () {},
  "remove": function () {}
};
Quill.imports.parchment.Inline.prototype = {
  "constructor": function () {},
  "format": function () {},
  "formatAt": function () {},
  "optimize": function () {},
  "attach": function () {},
  "formats": function () {},
  "replaceWith": function () {},
  "update": function () {},
  "wrap": function () {},
  "appendChild": function () {},
  "deleteAt": function () {},
  "descendant": function () {},
  "descendants": function () {},
  "detach": function () {},
  "insertAt": function () {},
  "insertBefore": function () {},
  "length": function () {},
  "moveChildren": function () {},
  "path": function () {},
  "removeChild": function () {},
  "replace": function () {},
  "split": function () {},
  "unwrap": function () {},
  "statics": function () {},
  "clone": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "offset": function () {},
  "remove": function () {}
};
Quill.imports.parchment.Text.prototype = {
  "constructor": function () {},
  "deleteAt": function () {},
  "index": function () {},
  "insertAt": function () {},
  "length": function () {},
  "optimize": function () {},
  "position": function () {},
  "split": function () {},
  "update": function () {},
  "value": function () {},
  "statics": function () {},
  "attach": function () {},
  "clone": function () {},
  "detach": function () {},
  "formatAt": function () {},
  "insertInto": function () {},
  "isolate": function () {},
  "offset": function () {},
  "remove": function () {},
  "replace": function () {},
  "replaceWith": function () {},
  "wrap": function () {}
};
Quill.imports.parchment.Attributor.Attribute.prototype = {
  "add": function () {},
  "canAdd": function () {},
  "remove": function () {},
  "value": function () {}
};
Quill.imports.parchment.Attributor.Class.prototype = {
  "constructor": function () {},
  "add": function () {},
  "remove": function () {},
  "value": function () {},
  "canAdd": function () {}
};
Quill.imports.parchment.Attributor.Style.prototype = {
  "constructor": function () {},
  "add": function () {},
  "remove": function () {},
  "value": function () {},
  "canAdd": function () {}
};
Quill.imports.parchment.Attributor.Store.prototype = {
  "attribute": function () {},
  "build": function () {},
  "copy": function () {},
  "move": function () {},
  "values": function () {}
};
