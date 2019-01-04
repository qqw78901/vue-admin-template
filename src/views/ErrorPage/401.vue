<template>
  <error-content code="401" desc="你无访问权限，请向管理员申请权限" :src="src"/>
</template>

<script>
import error401 from '../../assets/images/error-page/error-401.svg'
import errorContent from './error-content.vue'
export default {
  name: 'error_401',
  components: {
    errorContent
  },
  data () {
    return {
      src: error401
    }
  }
}
</script>
