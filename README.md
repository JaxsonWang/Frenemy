### Frenemy

又名`庆桑`，纪念和一个朋友长久友谊而定！

---

实例正在编写中，由于工作繁忙，进度可能慢一些。请耐心等待！

 - [x] 静态页面效果
 - [x] Ghost 主题 (源码暂未公开，请耐心等待！)
 - [ ] WordPress 主题
 - [x] Typecho 主题
 - [ ] Halo 主题
 - [ ] Hexo 主题
 
 ---
 
 ### Ghost
 
 维护人：[@淮城一只猫](https://github.com/JaxsonWang)
 
 展示站点：[淮城一只猫](https://iiong.com)
 
 源码地址：暂未公开
 
 ### WordPress
 
 维护人：[@淮城一只猫](https://github.com/JaxsonWang)
 
 正在编写
 
 ### Typecho
 
 维护人：[@JaydenForYou](https://github.com/JaydenForYou)
 
 展示站点：[Jayden星龙](https://iobiji.com/)

 源码地址：[Github JaydenForU](https://github.com/JaydenForYou/JaydenForU)

### Halo
 
 维护人：[@Ryan Wang](https://github.com/ruibaby)
 
 暂无计划

### Hexo
 
 维护人：正在招募
 
 暂无计划

### 开发主题

```bash
npm run dev
```

---

### 移植说明

各大平台移植方式都差不多，这里不多详述，下列将讲述移植主题需要的注意要点：

- 请不要删除静态模板任何 `节点`，`id`，`class`，除了可选和测试。否则导致模板错位。
- 引入静态文件建议使用 `min.js/min.css` 文件等压缩生产文件，以便提高站点加载速度，如果使用 `CDN` 静态资源文件更好，本文结束提供地址。
- 请不要在任何静态资源添加内容，包括 `app.min.js/app.min.css` 文件，请另开新的 `js/css` 文件编写内容或者覆盖原来的内容，引入模板即可，后期提高网站可维护性。

### 主题更新

主题更新将会在 [Frenemy Issues](https://github.com/JaxsonWang/Frenemy/issues) 发布，将会描述主题模板变动细节，方便移植作者更新各大平台。


### 静态资源分发

如果主题在平台发布建议将模板内的静态资源替换成分发地址：

BootStrap.css: [https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css)

BootStrap.js: [https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js)

Font Awesome.css: [https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css](https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css)

jQuery.js: [https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js](https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js)
