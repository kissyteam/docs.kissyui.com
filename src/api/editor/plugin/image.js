/**
@module editor/plugin/image
*/

/**
编辑器的插入图片插件
@class Image
@constructor
@param config {Object} 详见其Attribute
@example
```
KISSY.use("editor", function (S, Editor) {
    var cfg = {
        // 是否初始聚焦
        focused: true,
        attachForm: true,
        // 自定义样式
        // customStyle:"p{line-height: 1.4;margin: 1.12em 0;padding: 0;}",
        // 自定义外部样式
        // customLink:["http://localhost/customLink.css","http://xx.com/y2.css"],
        // render:"#container",
        render: '#editorContainer',
        width: '80%',
        height: "400px"
    };

    KISSY.use("editor/plugin/source-area," +
        "editor/plugin/font-size," +
        "editor/plugin/image," +
        "editor/plugin/code", function (S, SourceArea, FontSize, Image, Code) {

        cfg.plugins = [SourceArea, FontSize, new Image({
            upload: {
                serverUrl: "http://localhost/kissy_git/kissy/src/editor/demo/upload.php",
                serverParams: {
                    waterMark: function () {
                        return S.one("#ke_img_up_watermark_1")[0].checked;
                    }
                },
                suffix: "png,jpg,jpeg,gif",
                fileInput: "Filedata",
                sizeLimit: 1000, //k
                extraHtml: "<p style='margin-top:10px;'><input type='checkbox' id='ke_img_up_watermark_1' checked='checked'> 图片加水印，防止别人盗用</p>"
            }
        }), Code];

        new Editor(cfg).render();
    });

});
```
*/

/**
图片配置，如果设为 false ，则图片弹层中网络图片 tab 消失
@attribute remote
*/

/**
图片间距，默认为 10
@attribute defaultMargin
@default 10
*/

/**
图片配置，上传图片配置, 不需要上传功能可不配置, 包括以下子配置
- serverUrl {String} - 接受文件数据的服务器端程序地址, 格式为 multipart/form-data , 返回格式为：
正确：{“imgUrl”:”http://xx.com/yy.jpg“}
错误：{“error”:”i am error!”}
- serverParams {Object} - 键值对. 传给服务器的格外参数, 如果 value 是函数则传递函数执行结果.
- suffix {String} - 允许图片的后缀名.
- fileInput {String} - 传给服务器的文件域名.
- sizeLimit {Number} - 限制上传的文件大小, 单位 KB, ie 下只能作为提示.
- extraHtml {String} - 放入图片上传区域的其他 html.
@attribute upload {Object}
*/
