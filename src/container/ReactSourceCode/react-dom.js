
/**
 * 把虚拟DOM变成真实DOM
 * @param {*} vdom 
 */
function createDOM (vdom) {
    // 如果是数字或者字符串 返回文本节点
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }

    // 否则 就是一个虚拟DOM对象
    let { type, props} = vdom;
    let dom = null;
    if(typeof type === 'function') {
        // 函数组件
        dom = mountFunctionComponent(vdom)
    } else {
        // 原生组件
        dom = document.createElement(type);
    }

    // 使用虚拟DOM的属性更新刚创建的真实DOM的属性
    updateProps(dom, props);

    // 处理children属性
    if(typeof props.children === 'string' || typeof props.children === 'number') {
        // 如果只有一个儿子 且是字符串或者数字
        dom.textContent = props.children;
    } else if(typeof props.children === 'object' && props.children.type) {
        // 如果只有一个儿子 且是虚拟DOM
        render(props.children, dom);
    } else if (Array.isArray(props.children)) {
        reconcileChildren(props.children, dom)
    } else {
        // 保底
        document.textContent = props.children ? props.children.toString() : '';
    }
    return dom;
}

function mountFunctionComponent(vdom) {
    let {type, props} = vdom;
    let renderVdom = FunctionComponent(props);
    return createDOM(renderVdom);
}

/**
 * 
 * @param {*} childrenVDOM 
 * @param {*} parentDOM 
 */
function reconcileChildren(childrenVDOM, parentDOM) {
    for(let i = 0; i < childrenVDOM.length; i++) {
        let childVDOM = childrenVDOM[i];
        render(childrenVDOM, parentDOM);
    }
}

/**
 * 更新真实DOM的属性
 * @param {*} dom 
 * @param {*} newProps 
 */
function updateProps(dom, newProps) {
    for(let key in newProps) {
        //children单独处理
        if(key === 'children') {
            continue;
        }

        if(key === 'style') {
            let styleObj = newProps.style;
            for(let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
        } else {
            dom[key] = newProps[key];
        }
    }
}

function FunctionComponent(props) {
    return (
        <div>{props}</div>
    )
}

function render (vdom, container) {
    const dom = createDOM(vdom);
    container.appendChild(dom);
}

render(<FunctionComponent></FunctionComponent>, document.getElementById('root'));
