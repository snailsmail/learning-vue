const { clone } = require('./download')
const fs = require('fs')
const handlebars = require('handlebars')
const symbols = require('log-symbols')
const chalk = require('chalk')

module.exports.init = async name => {
	console.log(`火箭图标　创建项目　${name}`)
	// github克隆项目到当前文件夹下
	await clone('github:su37josephxia/vue-template', name)
}

module.exports.refresh = async () => {
	// 获取页面定义
	const list = fs.readdirSync('./src/views')
								 .filter(v => v !== 'Home.vue')
								 .map(v => ({
									 name: v.replace('.vue', '').toLowerCase(),
									 file: v
								 }))
	
	// 生成路由定义
	compile({list}, './src/router.js', './template/router.js.hbs')
	
	// 生成菜单
	compile({list}, './src/App.vue', './template/App.vue.hbs')
	
}

/**
 *
 * @param meta 数据定义
 * @param filePath 目标文件路径
 * @param templatePath 模板文件路径
 *
 * */
function compile(meta, filePath, templatePath) {
	
	if (fs.existsSync(templatePath)) {
		
		// 读取模板
		const content = fs.readFileSync(templatePath).toString()
		
		// 编译
		const  result = handlebars.compile(content)(meta)
		
		// 写入文件
		fs.writeFileSync(filePath, result)
		
		console.log(symbols.success, chalk.green(`创建成功 ${filePath}`))
	}
	
}