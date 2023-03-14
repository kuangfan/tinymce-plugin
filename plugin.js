// eslint-disable-next-line no-undef
tinymce.PluginManager.add('example', function (editor, url) {
  const dialogOptions = {
    width: 600,
    height: 400
  }

  const openDialog = function () {
    return editor.windowManager.openUrl({
      title: '这里是弹窗标题',
      url: 'http://localhost:8080',
      width: dialogOptions.width,
      height: dialogOptions.height,
      buttons: [
        {
          type: 'custom',
          text: '插入',
          name: 'insert',
          buttonType: 'primary'
        },
        {
          type: 'cancel',
          text: '取消'
        }
      ],
      onAction (api, details) {
        console.log(api, details)
      }
    })
  }
  // 注册一个工具栏按钮名称
  editor.ui.registry.addButton('example', {
    text: '工具栏按钮名',
    onAction: function () {
      openDialog()
    }
  })

  return {
    getMetadata: function () {
      return {
        // 插件名和链接会显示在“帮助”→“插件”→“已安装的插件”中
        name: 'kuangfan', // 插件名称
        url: 'https://github.com/kuangfan/tinymce-plugin' // 作者网址
      }
    }
  }
})
