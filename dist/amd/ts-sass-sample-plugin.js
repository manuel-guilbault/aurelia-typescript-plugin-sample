define(["require", "exports", "aurelia-framework", "./hello-world"], function (require, exports, aurelia_framework_1, hello_world_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HelloWorld = hello_world_1.HelloWorld;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./hello-world')
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzLXNhc3Mtc2FtcGxlLXBsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFUyxtQ0FBQSxVQUFVLENBQUE7SUFFbkIsbUJBQTBCLE1BQThCO1FBQ3RELE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDckIsNEJBQVEsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFKRCw4QkFJQyIsImZpbGUiOiJ0cy1zYXNzLXNhbXBsZS1wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBQTEFURk9STSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IHsgSGVsbG9Xb3JsZCB9IGZyb20gJy4vaGVsbG8td29ybGQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2hlbGxvLXdvcmxkJylcbiAgXSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
