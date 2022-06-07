let item
// 头部工具栏
item  = document.getElementsByTagName('header')
item[0].parentNode.removeChild(item[0])

// 头广告
item = document.getElementsByClassName('-umr26')
item[0].parentNode.removeChild(item[0])

// 侧栏
item  = document.getElementsByTagName('aside')
item[0].parentNode.removeChild(item[0])

// 悬浮按钮组
item = document.getElementsByClassName('_3Pnjry')
item[0].parentNode.removeChild(item[0])

// 底部
item  = document.getElementsByTagName('footer')
item[0].parentNode.removeChild(item[0])

// 文章
item = document.getElementsByClassName('_gp-ck')
item[0].style.width = "100%"