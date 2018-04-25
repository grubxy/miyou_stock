// 基础数据管理

// 初始化整体界面
export const initBaseData = () => ({
  type: 'BASEDATA_INIT'
})

// 提交产品
export const addProduct = (data) => ({
  type: 'PRODUCT_ADD',
  data
})

// 选中产品
export const selectProduct = (data) => ({
  type: 'PRODUCT_SELECT',
  data
})

// 产品按钮案件
export const actionProduct = (row, method) => ({
  type: 'PRODUCT_ACTION',
  row,
  method
})

// 提交工序
export const addSeq = (data) => ({
  type: 'SEQ_ADD',
  data
})


// 选中产品
export const selectSeq = (data) => ({
  type: 'SEQ_SELECT',
  data
})

// 工序按钮
export const actionSeq = (row, method) => ({
  type: 'SEQ_ACTION',
  row,
  method
})

// 默认员工添加
export const addStaff = (data) => ({
  type: 'DEFAULT_STAFF_ADD',
  data
})

// 员工删除
export const delStaff = (row) => ({
  type: 'DEFAULT_STAFF_DEL',
  row
})

// 多个模态框操作
export const operateModal = (data) => ({
  type: 'BASEDATA_MODAL_OPERATE',
  data
})

// 清空模态框内容
export const clearModal = () => ({
  type: 'BASEDATA_MODAL_CLEAR'
})

// 输入变化框
export const changeInput = (target) => ({
  type: 'BASEDATA_MODAL_CHANGE',
  name: target.name,
  value: target.value
})