/**
 * use-mode : https://github.com/fex-team/fis3-demo/blob/master/use-mod.js
 */
// fis.hook('commonjs');


//fis use npm
//node_modules模式加载
fis.hook('commonjs');
fis.unhook('components');
fis.hook('node_modules');


fis.match('/static/js/**.js', {
    isMod: true,
    release: '/static/js/$0'
});

fis.match('/node_modules/**.js', {
    isMod: true,
    release: '/static/js/$0'
});

fis.match('/components/**.js', {
    isMod: true,
    useSameNameRequire: true,
    release: '/static/js/$0'
});






fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
});

// fis3 release prod 产品发布，进行合并
fis.media('prod')
    .match('*.js', {
        packTo: '/static/js/release.js'
    });


/**
 * use less : https://github.com/fex-team/fis3-demo/blob/master/use-less
 */

// npm install -g fis-parser-less-2.x
fis.match('**/*.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    })
});
