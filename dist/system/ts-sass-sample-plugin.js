System.register(["aurelia-framework", "./hello-world"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./hello-world')
        ]);
    }
    exports_1("configure", configure);
    var aurelia_framework_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (hello_world_1_1) {
                exports_1({
                    "HelloWorld": hello_world_1_1["HelloWorld"]
                });
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzLXNhc3Mtc2FtcGxlLXBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQSxtQkFBMEIsTUFBOEI7UUFDdEQsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUNyQiw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1FBQ0QsQ0FBQyIsImZpbGUiOiJ0cy1zYXNzLXNhbXBsZS1wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBQTEFURk9STSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IHsgSGVsbG9Xb3JsZCB9IGZyb20gJy4vaGVsbG8td29ybGQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2hlbGxvLXdvcmxkJylcbiAgXSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
