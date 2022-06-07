let item
// 头部工具栏
item = document.getElementsByClassName('main-header-box')
item[0].parentNode.removeChild(item[0])

// 侧边栏
item = document.getElementsByClassName('sidebar')
item[0].parentNode.removeChild(item[0])

// 悬浮按钮
item = document.getElementsByClassName('article-suspended-panel')
item[0].parentNode.removeChild(item[0])

// 文章
item = document.getElementsByClassName('main-area')
console.log(item)
item[0].style.width = "100%"
