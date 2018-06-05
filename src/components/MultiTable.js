import React, {
  Component
} from 'react'
import {
  Table,
  Menu,
  Icon,
  Button,
  Pagination
} from 'semantic-ui-react'

const MultiTableHeader = ({
  table
}) => {
  return (
    <Table.Header>
    <Table.Row>
      {Object.keys(table.headers).map((key, i) => (
        <Table.HeaderCell key={i}>{table.headers[key].title}</Table.HeaderCell>
     ))}
    </Table.Row>
    </Table.Header>
  )
}

const MultiTableCell = ({
  headkey,
  value,
  row,
  onAction
}) => {
  if (headkey === 'button_list') {
    return (
      <Table.Cell>{
      Object.values(value).map((x, j) => {
        return (
            <Button key = {j} content={x['content']} size='tiny' color={x['color']} icon={x['icon']} disabled={x['disabled']} floated='right' onClick={()=>onAction(row, x['method'])}/>
        )
      })}
      </Table.Cell>
    )
  } else {
    return (
      <Table.Cell key={headkey}>
            {value}
      </Table.Cell>
    )
  }
}

const MultiTableBody = ({
  table,
  onSelect,
  onAction
}) => {
  return (
    <Table.Body>
    {
      table.content.map((row, i) => {
        if (table.selectable===true) {
          return (
              <Table.Row key={i} onClick={()=>onSelect(row)}>
              {
                Object.keys(table.headers).map((_, j)=>{
                  let key = Object.keys(table.headers)[j]
                  let value = row[key]
                  return <MultiTableCell key={j} headkey={key} value={value} row={row} onAction={onAction}/>
                })
              }
              </Table.Row>
            )
        } else {
          return (
            <Table.Row key={i}>
            {
              Object.keys(table.headers).map((_, j)=>{
                let key = Object.keys(table.headers)[j]
                let value = row[key]
                return <MultiTableCell key={j} headkey={key} value={value} row={row} onAction={onAction}/>
              })
            }
            </Table.Row>
            )
        }
        })
    }
    </Table.Body>)
}

const MultiTableFooter = ({
  goToPage,
  table
}) => {
  if (!table.showFooter) {
    return (
      <Table.Footer>
      </Table.Footer>
    )
  } else {
    return (
      <Table.Footer>
      <Table.HeaderCell colSpan={Object.keys(table.headers).length}>
        <Menu floated='right' pagination>
        <Pagination defaultActivePage={5}  totalPages={10}/>
        </Menu>
      </Table.HeaderCell>
    </Table.Footer>
    )
  }
}

export class MultiTable extends Component {

  classomponentWillMount = () => {}

  render = () => {
    const {
      emptyMsg,
      table,
      search,
      loading,
      onSearch,
      goToPage,
      onAction,
      onSelect,
      showFooter
    } = this.props

    return (
      <Table compact='very' color='teal' size='small' selectable={table.selectable}>
        <MultiTableHeader table={table}/>
        <MultiTableBody table={table} onAction={onAction} onSelect={onSelect}/>
        <MultiTableFooter table={table}/>
      </Table>
    )
  }
}