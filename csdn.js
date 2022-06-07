let item
// 头部工具栏
item  = document.getElementById('csdn-toolbar')
item.parentNode.removeChild(item)

// 底部工具栏
item = document.getElementById('toolBarBox')
item.parentNode.removeChild(item)

// 悬浮按钮栏
item = document.getElementsByClassName('csdn-side-toolbar')
item[0].parentNode.removeChild(item[0])

// 左侧栏
item = document.getElementsByClassName('blog_container_aside')
item[0].parentNode.removeChild(item[0])

// 右侧栏
item = document.getElementsByClassName('recommend-right')
item[0].parentNode.removeChild(item[0])

// 文章内容
item = document.getElementsByClassName('blog-content-box')
item[0].parentNode.style.width = '100%'

// 广告
item = document.getElementById('marketingBox')
item.parentNode.removeChild(item)