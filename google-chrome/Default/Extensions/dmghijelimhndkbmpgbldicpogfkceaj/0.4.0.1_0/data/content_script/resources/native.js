var native = {
  "dark": {
    "theme": {"number": 41},
    "class": {
      "cloned": "dark-mode-native-dark-cloned",
      "original": "dark-mode-native-dark-original",
      "processed": "dark-mode-native-dark-processed"
    },
    "observer": {
      "options": {
        "subtree": true,
        "childList": true
      },
      "mutation": new MutationObserver(function (mutations) {
        for (var mutation of mutations) {
          for (var node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              native.dark.engine.analyze.document.sheets("process");
            }
            /*  */
            if (node.nodeType === Node.TEXT_NODE) {
              if (mutation.target) {
                native.dark.engine.analyze.document.sheets("process");
              }
            }
          }
        }
      })
    },
    "engine": {
      "clone": {
        "node": function (node) {
          var local = native.dark.engine.is.node.local(node);
          if (!local) {
            var original = native.dark.engine.is.node.original(node);
            if (!original) {
              var cloned = native.dark.engine.is.node.cloned(node);
              if (!cloned) {
                var tagname = node.tagName.toLowerCase();
                var nodename = node.nodeName.toLowerCase();
                /*  */
                if (tagname === "style" || nodename === "style") {
                  var tmp = node.cloneNode(true);
                  [...tmp.attributes].forEach(e => tmp.removeAttribute(e.name));
                  /*  */
                  tmp.classList.add(native.dark.class.cloned);
                  node.classList.add(native.dark.class.original);
                  node.after(tmp);
                }
              }
            }
          }
        }
      },
      "fetch": {
        "stack": {},
        "remote": {
          "sheet"(sheet) {
            if (sheet) {
              if (sheet.href) {
                if (sheet.href.indexOf("http") === 0) {
                  var node = sheet.ownerNode;
                  if (node) {
                    var original = native.dark.engine.is.node.original(node);
                    if (!original) {
                      node.classList.add(native.dark.class.original);
                      native.dark.engine.fetch.stack[sheet.href] = sheet;
                      /*  */
                      fetch(sheet.href).then(r => r.text()).then(function (content) {
                        if (content) {
                          var style = document.createElement("style");
                          /*  */
                          style.textContent = content;
                          style.setAttribute("lang", "en");
                          style.setAttribute("type", "text/css");
                          style.classList.add(native.dark.class.cloned);
                          /*  */
                          sheet.ownerNode.after(style);
                        }
                      }).catch(function (e) {
                        background.send("native-dark-fetch-remote-style", {
                          "href": sheet.href
                        });
                      });
                    }
                  }
                }
              }
            }
          }
        }
      },
      "is": {
        "active": false,
        "sheet": {
          "processed": function (sheet) {
            return sheet && (native.dark.class.processed in sheet);
          }
        },
        "node": {
          "cloned": function (node) {
            return node && node.classList.contains(native.dark.class.cloned);
          },
          "original": function (node) {
            return node && node.classList.contains(native.dark.class.original);
          },
          "local": function (node) {
            var cond_a = node && node.id && node.id === "dark-mode-custom-link";
            var cond_b = node && node.id && node.id === "dark-mode-general-link";
            var cond_c = node && node.id && node.id === "dark-mode-custom-style";
            var cond_d = node && node.id && node.id === "dark-mode-native-style";
            /*  */
            return cond_a || cond_b || cond_c || cond_d;
          }
        },
        "color": {
          "valid": function (e) {
            if (e) {
              try {
                e = e.toLowerCase();
                /*  */
                if (e !== "none") {
                  if (e !== "unset") {
                    if (e !== "black") {
                      if (e !== "inherit") {
                        if (e !== "initial") {
                          if (e !== "transparent") {
                            if (e.indexOf("url(") === -1) {
                              if (e.indexOf("-gradient") === -1) {
                                var tmp = e.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
                                var opacity = tmp && tmp.length ? tmp[tmp.length - 1] : null;
                                /*  */
                                var cond_1 = e.indexOf("rgba") === -1;
                                var cond_2 = e.indexOf("rgba") !== -1 && (opacity ? Number(opacity) >= 0.9 : false);  
                                if (cond_1 || cond_2) {
                                  return true;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } catch (e) {
                return false;
              }
            }
            /*  */
            return false;
          }
        }
      },
      "process": {
        "action": function (rule, sheet) {
          if (rule) {
            if (sheet) {
              var is = {};
              sheet[native.dark.class.processed] = null;
              /*  */
              is.color = rule.style["color"];
              is.outline = rule.style["outline-color"];
              is.image = rule.style["background-image"];
              is.svg = rule.style["fill"] || rule.style["stroke"];
              is.shadow = rule.style["box-shadow"] || rule.style["text-shadow"];
              is.background = rule.style["background"] || rule.style["background-color"];
              is.border = rule.style["border-color"] || rule.style["border-top-color"] || rule.style["border-bottom-color"] || rule.style["border-left-color"] || rule.style["border-right-color"];
              /*  */
              //if (is.svg) native.dark.engine.apply.style.for["svg"](rule);
              if (is.color) native.dark.engine.apply.style.for["color"](rule);
              if (is.shadow) native.dark.engine.apply.style.for["shadow"](rule);
              if (is.background) native.dark.engine.apply.style.for["background"](rule);
              if (is.image) native.dark.engine.apply.style.for["background-image"](rule);
              if (is.border || is.outline) native.dark.engine.apply.style.for["border"](rule);
            }
          }
        },
        "sheet": function (sheet) {
          try {
            if (sheet) {
              if (sheet.rules) {
                for (var rule of sheet.rules) {
                  if (rule.style) {
                    native.dark.engine.process.action(rule, sheet);
                  } else if (rule.cssRules) {
                    for (var key of rule.cssRules) {
                      if (key.style) {
                        native.dark.engine.process.action(key, sheet);
                      }
                    }
                  }
                }
              }
            }
          } catch (e) {}
        }
      },
      "apply": {
        "style": {
          "for": {
            "color": function (rule) {
              if (rule.style["color"]) {
                rule.style.setProperty("color", "#dcdcdc", "important");
              }
            },
            "shadow": function (rule) {
              if (rule.style["box-shadow"]) rule.style.setProperty("box-shadow", "none", "important");
              if (rule.style["text-shadow"]) rule.style.setProperty("text-shadow", "none", "important");
            },
            "svg": function (rule) {
              if (rule.style["fill"]) rule.style.setProperty("fill", "#7d7d7d", "important");
              if (rule.style["stroke"]) rule.style.setProperty("stroke", "#7d7d7d", "important");
            },
            "border": function (rule) {
              if (rule.style["border-color"]) rule.style.setProperty("border-color", "#555555", "important");
              if (rule.style["outline-color"]) rule.style.setProperty("outline-color", "#555555", "important");
              if (rule.style["border-top-color"]) rule.style.setProperty("border-top-color", "#555555", "important");
              if (rule.style["border-left-color"]) rule.style.setProperty("border-left-color", "#555555", "important");
              if (rule.style["border-right-color"]) rule.style.setProperty("border-right-color", "#555555", "important");
              if (rule.style["border-bottom-color"]) rule.style.setProperty("border-bottom-color", "#555555", "important");
            },
            "background-image": function (rule) {
              if (rule.style["background-image"]) {
                var tmp = rule.style["background-image"];
                if (tmp.indexOf("-gradient") !== -1) {
                  if (tmp.indexOf("url(") === -1) {
                    rule.style.setProperty("background-image", "none", "important");
                  }
                }
              }
            },
            "background": function (rule) {
              if (rule.style["background"]) {
                if (native.dark.engine.is.color.valid(rule.style["background"])) {
                  rule.style.setProperty("background", "#292929", "important");
                }
              }
              /*  */
              if (rule.style["background-color"]) {
                if (native.dark.engine.is.color.valid(rule.style["background-color"])) {
                  rule.style.setProperty("background-color", "#292929", "important");
                }
              }
            }
          }
        }
      },
      "analyze": {
        "document": {
          "sheets": function (key) {
            if (key) {
              if (document.styleSheets) {
                for (var sheet of document.styleSheets) {
                  var node = sheet.ownerNode;
                  if (node) {
                    var local = native.dark.engine.is.node.local(node);
                    if (!local) {
                      var original = native.dark.engine.is.node.original(node);
                      if (!original) {
                        var tagname = node.tagName.toLowerCase();
                        var nodename = node.nodeName.toLowerCase();
                        var cond_1 = tagname === "link" || nodename === "link";
                        var cond_2 = tagname === "style" || nodename === "style";
                        /*  */
                        if (cond_1 || cond_2) {
                          var cloned = native.dark.engine.is.node.cloned(node);
                          var processed = native.dark.engine.is.sheet.processed(sheet);
                          /*  */
                          if (key === "clean") {
                            if (cloned) {
                              sheet.disabled = true;
                              node.setAttribute("disabled", '');
                            }
                          }
                          /*  */
                          if (key === "process") {
                            if (cloned) {
                              sheet.disabled = false;
                              node.removeAttribute("disabled");
                            }
                            /*  */
                            if (!processed) {
                              if (cond_1) {
                                native.dark.engine.fetch.remote.sheet(sheet);
                              }
                              /*  */
                              if (cond_2) {
                                if (cloned) {
                                  native.dark.engine.process.sheet(sheet);
                                } else {
                                  native.dark.engine.clone.node(node);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

background.receive("native-dark-content-remote-style", function (e) {
  if (e) {
    if (e.href) {
      if (e.content) {
        var style = document.createElement("style");
        /*  */
        style.textContent = e.content;
        style.setAttribute("lang", "en");
        style.setAttribute("type", "text/css");
        style.classList.add(native.dark.class.cloned);
        /*  */
        var sheet = native.dark.engine.fetch.stack[e.href];
        if (sheet) {
          sheet.ownerNode.after(style);
        }
      }
    }
  }
});