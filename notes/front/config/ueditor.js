toolbars: [
    [
        // 撤销、重做
        'undo', 'redo', '|',
        // 标题/段落、字体、字体大小
        'paragraph', 'fontfamily', 'fontsize', '|',
        // 前景色、背景色
        'forecolor', 'backcolor', '|',
        // 黑体、斜体、下划线、字体边框、删除线、上标、下标
        'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', '|',
        // 清除字体样式、格式刷、粘贴文本（默认粘贴会带格式）
        'removeformat', 'formatmatch', 'pasteplain', '|',
        // 首行缩进
        'indent', '|',
        // 左起、右起
        'directionalityltr', 'directionalityrtl', '|',
        // 顶部对齐、底部对齐、居中对齐？（平时用不着、得表格中可能才有用）
        'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
        // 左对齐、居中、右对齐、分散对齐
        'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
        // 全屏（右浮动）、源码、预览
        'fullscreen', 'source', 'preview'
    ], [
        // 有序列表、无序列表、引用、a标签、去掉a标签、插入代码、水平线、页面背景
        'insertorderedlist', 'insertunorderedlist', 'blockquote', 'link', 'unlink', 'insertcode', 'horizontal', 'background', '|',
        // 转大写、转小写、特殊字符
        'touppercase', 'tolowercase', 'spechars', '|',
        // 单张图片、多张图片、emotion、video、附件、百度地图、谷歌地图
        'simpleupload', 'insertimage', 'emotion', 'insertvideo', 'attachment', 'map', 'gmap',
        // 图片默认样式（左浮动）、左浮动、右浮动、居中独占1行
        'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
        // 插入表格、删除表格等操作（因表格独占1行，所以相关操作都得使用这些操作）
        'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols'
    ]]