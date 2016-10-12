// 模版组件
var Index = resolve => require(["../tpl/index.vue"],resolve);
var Search = resolve => require(["../tpl/search.vue"],resolve);
var List = resolve => require(["../tpl/list.vue"],resolve);
var Goods = resolve => require(["../tpl/goods.vue"],resolve);
var Login = resolve => require(["../tpl/login.vue"],resolve);
var Register = resolve => require(["../tpl/register.vue"],resolve);
var Forget = resolve => require(["../tpl/forget.vue"],resolve);
var Forgettips = resolve => require(["../tpl/forgettips.vue"],resolve);
var Password = resolve => require(["../tpl/password.vue"],resolve);
var Cart = resolve => require(["../tpl/cart.vue"],resolve);
var User = resolve => require(["../tpl/user.vue"],resolve);

// 路由routes
module.exports = {
	mode: 'history',
	routes: [
	    { path: '/', component: Index },
	    { path: '/index', component: Index },
	    { path: '/search', component: Search },
	    { path: '/list', component: List },
	    { path: '/goods', component: Goods },
	    { path: '/login', component: Login },
	    { path: '/register', component: Register },
	    { path: '/forget', component: Forget },
	    { path: '/forgettips', component: Forgettips },
	    { path: '/password', component: Password },
	    { path: '/cart', component: Cart },
	    { path: '/user', component: User },
	    { path: '*', component: Index }
	]
}
