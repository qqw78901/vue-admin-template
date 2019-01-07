<template>
  <header class="main-header">

    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>P</b>AS</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>PAS</b>V2</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="/dashboard" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="user" v-if="userInfo">
            <a><i class="fa fa-user-circle"></i>{{userInfo.nickName}}</a>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a @click="logout">注销
                <i class="fa fa-sign-out"></i>
              </a>
          </li>
        </ul>
      </div>

    </nav>

  </header>
</template>

<script>
  import  Bus from "../../utils/bus";
  import Common from "../../utils/common";

  export default {
    name: 'MyHeader',
    props: ['userInfo'],
    data() {
      return {}
    },
    // created() {
    //   Bus.$on('changeModalsVisible',this.changeVisible);
    // },
    // destroyed(){
    //   Bus.$off('changeModalsVisible',this.changeVisible)
    // },
    methods: {
      logout(){
        Common.logout()
      },
      changeVisible(){
        // alert('header')
      }
    }
  }
</script>


