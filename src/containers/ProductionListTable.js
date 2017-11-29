import ProductionTable from '../components/ProductionTable'
import {
  connect
} from 'react-redux'
import {
  recordTableBack,
  recordTableForword,
  productionDetailSelect
} from '../actions'

const contenttest = [{
  seq: '1',
  code: '123123',
  name: '批次名1',
  counts: '100',
  date: '2017',
  state: '完成',
  detail: '详情'
}, {
  seq: '2',
  code: '123125',
  name: '批次名2',
  counts: '200',
  date: '2017.9',
  state: '进行中',
  detail: '详情'
}]

const title = [{
  title: '序号'
}, {
  title: '批次号'
}, {
  title: '名称'
}, {
  title: '计划数量'
}, {
  title: '开始日期'
}, {
  title: '完工状态'
}, {
  title: '备注'
}]

const mapStateToProps = (state) => ({
  // content: state.recordTables
  content: contenttest,
  title: title,
  show: !state.breadp.subActive
})

const mapDispatchToProps = {
  onBack: recordTableBack,
  onForword: recordTableForword,
  onSelect: productionDetailSelect
}

const ProductionListTable = connect(mapStateToProps, mapDispatchToProps)(ProductionTable)

export default ProductionListTable