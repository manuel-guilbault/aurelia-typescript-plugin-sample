System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, HelloWorld;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            HelloWorld = (function () {
                function HelloWorld() {
                    this.text = 'Hello, world!';
                }
                HelloWorld = __decorate([
                    aurelia_framework_1.customElement('hello-world')
                ], HelloWorld);
                return HelloWorld;
            }());
            exports_1("HelloWorld", HelloWorld);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLXdvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFFQTtvQkFFUyxTQUFJLEdBQUcsZUFBZSxDQUFDO2dCQUNoQyxDQUFDO2dCQUZZLFVBQVU7b0JBRHRCLGlDQUFhLENBQUMsYUFBYSxDQUFDO21CQUNoQixVQUFVLENBRXRCO2dCQUFELGlCQUFDO2FBRkQsQUFFQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImhlbGxvLXdvcmxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoJ2hlbGxvLXdvcmxkJylcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkIHtcbiAgcHVibGljIHRleHQgPSAnSGVsbG8sIHdvcmxkISc7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
