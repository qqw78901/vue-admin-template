<template>
    <li :class="{'treeview':!!routeitem.children,'active':isActive}">
        <!-- <router-link :to="path" :key="routeitem.name" v-if="!routeitem.children">
                <i class="fa" :class="!!routeitem.meta.icon ? routeitem.meta.icon: 'fa-circle-o'"></i> <span>{{routeitem.name}}</span>
            </router-link> -->
        <router-link class="route-item" v-if="!!routeitem.redirect || !routeitem.children" :key="routeitem.name" :to="pathWithParams">
            <i class="fa" :class="!!routeitem.meta.icon ? routeitem.meta.icon: ''"></i> <span>{{title}}</span>
            <span class="pull-right-container" v-if="!!routeitem.children">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
        </router-link>
        <a v-if="!routeitem.redirect && !!routeitem.children " :key="routeitem.name">
            <i class="fa" :class="!!routeitem.meta.icon ? routeitem.meta.icon: ''" v-if="routeitem.meta.icon"></i> <span>{{title}}</span>
            <span class="pull-right-container" v-if="!!routeitem.children">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
        </a>
        <ul class="treeview-menu" v-if="!!routeitem.children">
            <sider-item v-for="item in routeitem.children" :key="item.name" :routeitem="item" :depth="depth + 1" :path="path +'/'+ item.path" v-if="!item.hidden">
            </sider-item>
        </ul>
    </li>
</template>
<script>
    export default {
        props: ['routeitem', 'depth', 'path'],
        name: 'siderItem',
        computed: {
            title() {
                return this.routeitem.meta.title || this.routeitem.name;
            },
            pathWithParams() {
                const query = {};
                const querySource = this.$route.query;
                // 只取product来传
                if (querySource && querySource.product) {
                    query.product = querySource.product
                }
                query.r = +new Date()
                return {
                    path: this.path,
                    query,
                }
            },
            isActive() {
                const {
                    path
                } = this;
                const routePath = this.$route.path;
                return routePath.indexOf(path) > -1;
            }
        },
        mounted() {}
    }
</script>
<style>
    .sidebar-menu .treeview-menu .route-item.router-link-active {
        color: #000;
        font-weight: bold;
    }
</style>
