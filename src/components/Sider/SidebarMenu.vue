<template>
    <section class="sidebar">
        <!-- search form -->
        <!-- <div class="sidebar-form"> -->
            <!-- <Select filterable class="sidebar-select" v-model="currentProduct"  @on-change="changeSelect">
                <Option :value="item.product" v-for="(item,index) in productList" :key="index">{{item.description}}</Option>
            </Select> -->
            <!-- <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                    </button>
                </span>
            </div> -->
        <!-- </div> -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
            <sider-item :routeitem="item" :depth="0" :path="item.path" v-for="item in router" :key="item.name">

            </sider-item>
        </ul>
    </section>
</template>

<script>
import siderItem from './SiderItem.vue';

export default {
    name: 'SidebarMenu',
    components: { siderItem },
    props: {
        router: {
            type: Array
        }
    },
    created(){
        $('[data-widget="tree"]').tree()
    },
    mounted(){
        $('[data-widget="tree"]').tree()
    }

};
</script>



