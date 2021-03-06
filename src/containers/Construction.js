import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  initConstruction,
  selectConstruction,
  activeConstructionPage,
  searchConstruction,
  searchTime,
  actionConstruction,
  operateModal,
  clearModal,
  completeConstruction,
  changeInput
} from '../actions/construction'
import {
  Grid,
  Header,
  Container,
  Icon,
  Divider,
  Form,
  Input,
  Button,
  Modal
} from 'semantic-ui-react'
import {
  MultiTable
} from '../components/MultiTable'
import {
  Calendar
} from '../components/Calendar'

class Construction extends Component {
  componentDidMount = () => {
    const {
      initConstruction,
      constructionTable
    } = this.props

    initConstruction(constructionTable.size)
  }

  render = () => {
    const {
      selectConstruction,
      onActivePage,
      onSearch,
      constructionTable,
      onSearchTime,
      onAction,
      onCompleteConstruction,
      operateCmplModal,
      constructionModal,
      onChange
    } = this.props

    return (
      <Container fluid style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>工单总览</Header.Content>
        </Header>
        <Modal open={constructionModal.complete}>
          <Modal.Header>完工信息</Modal.Header>
          <Modal.Content>
            <Form size='large'>
              <Form.Group>
                <Form.Input label="正品数" name='constructionCmpl' onChange={(e)=>onChange(e.target)}/>
                <Form.Input label="次品数" name='constructionErr' onChange={(e)=>onChange(e.target)}/>
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={()=>operateCmplModal({complete:false})}> 取消 </Button>
            <Button color='teal' onClick={()=>onCompleteConstruction(constructionModal, constructionTable)}> 确定 </Button>
          </Modal.Actions>
        </Modal>
        <Divider hidden/>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Form size='large'>
                <Form.Group>
                  <Form.Field>
                    <Input placeholder='施工单号' name='id' onChange={(e)=>onSearch(e.target, constructionTable)}/>
                  </Form.Field>
                  <Form.Field>
                    <Input placeholder='产品名' name='name' onChange={(e)=>onSearch(e.target, constructionTable)}/>
                  </Form.Field>
                  <Form.Field>
                    <Input icon='search' placeholder='工人' name='staff' onChange={(e)=>onSearch(e.target, constructionTable)}/>
                  </Form.Field>
                   <Form.Field>
                    <Calendar onChange={onSearchTime} moment={constructionTable.search.moment} data={constructionTable}/>
                  </Form.Field>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column>
              <Button.Group size='large'>
                <Button color='orange' onClick={()=>selectConstruction(0, constructionTable)}>所有</Button>
                <Button color='teal'onClick={()=>selectConstruction(1, constructionTable)}>等待材料出库</Button>
                <Button color='teal'onClick={()=>selectConstruction(2, constructionTable)}>
                  <Icon name='sort amount down'/>制作中
                </Button>
                <Button color='teal'onClick={()=>selectConstruction(3, constructionTable)}>完工待入库</Button>
                <Button color='teal'onClick={()=>selectConstruction(4, constructionTable)}>
                  <Icon name='sort amount down'/>待审批
                </Button>
                <Button color='teal'onClick={()=>selectConstruction(5, constructionTable)}>审批完毕</Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <MultiTable table={constructionTable} onAction={onAction} onActivePage={onActivePage}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  constructionTable: state.construction.constructionAllTable,
  constructionModal: state.construction.constructionAllModal
})

const mapDispatchToProps = {
  initConstruction: initConstruction,
  selectConstruction: selectConstruction,
  onActivePage: activeConstructionPage,
  onSearch: searchConstruction,
  onSearchTime: searchTime,
  onAction: actionConstruction,
  operateCmplModal: operateModal,
  onCompleteConstruction: completeConstruction,
  onClearModal: clearModal,
  onChange: changeInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Construction)