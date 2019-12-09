const VNodeType = {
	// 组件待扩展
	HTML: 'HTML',
	TEXT: 'TEXT',
	COMPONENT: 'COMPONENT'
}

const ChildTypes = {
	EMPTY: 'EMPTY',
	SINGLE: 'SINGLE',
	MULTIPLE: 'MULTIPLE'
}

function createElement(tag, data = null, children = null) {
	// 确定flags,当前节点类型
	let flags
	if (typeof tag === 'string') {
		flags = VNodeType.HTML
	} else if ()
	
	
}