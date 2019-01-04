import Vue from "vue";

const isDevMod = process.env.NODE_ENV === "development";
/**
 * 根据当前运行环境决定使用哪个Host，开发环境 host是/api ,  正式环境是xx 某一层的相对路径
 */
const host = isDevMod ? '/api' : "..";
const API = {
  getUserByPage: `${host}/user/list.do`,
  addUser: `${host}/user/add.do`,
  updateUser: `${host}/user/update.do`,
  deleteUser: `${host}/user/delete.do`,
  defaultKpiByDays: `${host}/overview/defaultKpiByDays`,
  listChannelByDays: `${host}/overview/listChannelByDays`,
  listVersionByDays: `${host}/overview/listVersionByDays`,
  listEvent: `${host}/userFunction/listEvent`,
  addMonitor: `${host}/monitorSetting/add`,
  listMonitor: `${host}/monitorSetting/list`,
  deleteMonitor: `${host}/monitorSetting/del`,
  addCustomizedCol: `${host}/customizedColSetting/add`,
  listCustomizedCol: `${host}/customizedColSetting/list`,
  deleteCustomizedCol: `${host}/customizedColSetting/del`,
  listEventDetails: `${host}/userFunction/showDetails`,
  listFunnel: `${host}/funnel/showFunnelSetting`,
  addFunnel: `${host}/funnel/addFunnelSetting`,
  getFunnelSteps: `${host}/funnel/getFunnelSteps`,
  delFunnel: `${host}/funnel/delFunnelSetting`,
  listEventChange: `${host}/eventChangeDetail/list`,
  listEventGroup: `${host}/eventGroup/list`,
  addEventGroup: `${host}/eventGroup/add`,
  showEventGroup: `${host}/eventGroup/show`,
  delEventGroup: `${host}/eventGroup/del`,
  eventRatioDetail: `${host}/eventRatioDetail/list`,
  listSelfReport: `${host}/selfReport/list`,
  addSelfReport: `${host}/selfReport/add`,
  showSelfReport: `${host}/selfReport/show`,
  delSelfReport: `${host}/selfReport/del`,
  selfReportDetail: `${host}/selfReportDetail/list`,

  // 留存行为接口
  listTraceKpiTypeByProduct: `${host}/dimtracekpi/listTraceKpiTypeByProduct`,
  //设置模块——留存事件
  listDimTraceKpi: `${host}/dimtracekpi/list`,
  delDimTraceKpi: `${host}/dimtracekpi/delete`,
  addDimTraceKpi: `${host}/dimtracekpi/add`,

  // 应用趋势模块
  listActiveUser: `${host}/appTrend/listActiveUser`,
  listNewUser: `${host}/appTrend/listNewUser`,
  listRetainUser: `${host}/appTrend/listRetainUser`,
  listStartupTimes: `${host}/appTrend/listStartupTimes`,
  listTopIver: `${host}/appTrend/listTopIver`,
  listTopIverDetail: `${host}/appTrend/listTopIverDetail`,
  listOnlineUser: `${host}/appTrend/listOnlineUser`,
  // 权限菜单列表
  listProductByPassport: `${host}/product/listProductByPassport`,
  listDimEventid: `${host}/dimEventid/list`,
  listScaleData: `${host}/overview/listScaleData`,
  listUseData: `${host}/overview/listUseData`,
  listEventDuration: `${host}/eventDuration/list`,

  //渠道来源模块
  listInstallChannel: `${host}/channelSource/listInstallChannel`,
  listInstallChannelDetail: `${host}/channelSource/listInstallChannelDetail`,
  listTopOuterRef: `${host}/channelSource/listTopOuterRef`,
  listTopOuterRefDetail: `${host}/channelSource/listTopOuterRefDetail`,
  listOnlineDuration: `${host}/participation/listOnlineDuration`,
  listUseFrequency: `${host}/participation/listUseFrequency`,
  listUseGap: `${host}/participation/listUseGap`,
  //产品汇总
  listProductBase: `${host}/index/listProductBase`,
  listOuterRefByDays: `${host}/overview/listOuterRefByDays`,
  listError:`${host}/error/listError`,
  listErrorDetail:`${host}/error/listErrorDetail`,
  listErrorDistribution:`${host}/error/listErrorDistribution`,
  updateErrorId:`${host}/error/updateErrorId`,

  //终端设备
  listTerminal: `${host}/terminal/listTerminal`,
  listIsp: `${host}/terminal/listIsp`,
  //地域
  listArea: `${host}/area/listArea`,
  //指标说明
  listKpiDesc: `${host}/kpi/showKpiDesc`,
  //是否登录
  isLogin:`${host}/login/checkLogin`

};
Vue.prototype.$api = API;
Vue.API = API;
export default API;
