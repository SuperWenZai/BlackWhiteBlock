const home = resolve => require(["../pages/home/index.vue"], resolve);

const routers = [{
    path: "/",
    component: home
}];

export default routers;