import React, { PureComponent } from 'react'
import { oneOfType, object, array } from 'prop-types'
import css from './styles.scss'
// http://orbjs.net/
import { Checkbox } from 'components'

export default class Table extends PureComponent {
    static propTypes = {
        thead: oneOfType([
            object,
            array
        ]),
        tbody: oneOfType([
            object,
            array
        ]),
        tfoot: oneOfType([
            object,
            array
        ])
    }

    static defaultProps = {
        thead: {},
        tbody: {},
        tfoot: {}
    }

    constructor (props) {
        super(props)

        this.colCount = 0

        this.analyzeCount([props.thead, props.tbody, props.tfoot])
    }

    state = {
        checked: false
    }

    analyzeCount = (data) => {
        if (data.length) {
            const numbers = []

            data.map((item) => {
                item.map((arr) => {
                    if (numbers.indexOf(arr.length) === -1) {
                        numbers.push(arr.length)
                    }
                })
            })

            this.colCount = Math.max(...numbers)
        }
    }

    handleChange = (value, status) => {
        this.setState({...this.state, [value]: status})
    }

    renderCols = () => {
        const cols = []

        for (let index = 0; index < this.colCount; index++) {
            console.log('index: ', index)
            cols.push(<col key={`col__${index}`} />)
        }

        return (
            <colgroup>
                <col width={34} />
                { cols }
                <col width={40} />
            </colgroup>
        )
    }

    renderHead = () => {
        const { thead } = this.props

        if (thead) {
            const list = []

            Object.keys(thead).map((id) => {
                const row = []

                Object.keys(thead[id]).map((key) => {
                    const sorterClass = []
                    sorterClass.push(css.sorter)

                    if (key % 2 === 0) {
                        sorterClass.push(css.sorter_ascending)
                    } else {
                        sorterClass.push(css.sorter_descending)
                    }

                    row.push(
                        <th className={css.tcol} key={`thead_col_${key}`}>
                            <span className={sorterClass.join(' ')}>{thead[id][key]}</span>
                        </th>
                    )
                })

                list.push(
                    <tr className={css.row} key={`thead_${id}`}>
                        <th className={[css.tcol, css.center].join(' ')}>
                            <Checkbox
                                name="checked"
                                value="checked"
                                size="small"
                                theme="dark"
                                handleChange={this.handleChange.bind(this)}
                            />
                        </th>
                        { row }
                        <th className={css.tcol} />
                    </tr>
                )
            })

            return (
                <thead>
                    { list }
                </thead>
            )
        }
    }

    renderBody = () => {
        const { tbody } = this.props
        const { checked } = this.state

        if (tbody) {
            const list = []

            Object.keys(tbody).map((id) => {
                const row = []

                Object.keys(tbody[id]).map((key) => {
                    row.push(
                        <td className={css.col} key={`tbody_col_${key}`}>
                            {tbody[id][key]}
                        </td>
                    )
                })

                list.push(
                    // css.row_checked
                    <tr className={css.row} key={`tbody_${id}`}>
                        <td className={[css.col, css.center].join(' ')}>
                            <Checkbox size="small" name="row" checked={checked} />
                        </td>
                        { row }
                        <td className={[css.col, css.center].join(' ')}>
                            X
                        </td>
                    </tr>
                )
            })

            return (
                <tbody>
                    { list }
                </tbody>
            )
        }
    }

    renderFoot = () => {
        const { tfoot } = this.props

        if (tfoot) {
            const list = []

            Object.keys(tfoot).map((id) => {
                const row = []

                Object.keys(tfoot[id]).map((key) => {
                    row.push(
                        <td className={css.fcol} key={`tfoot_col_${key}`}>
                            {tfoot[id][key]}
                        </td>
                    )
                })

                list.push(
                    <tr className={css.row} key={`tfoot_${id}`}>
                        <td className={css.fcol} />
                        { row }
                        <td className={css.fcol} />
                    </tr>
                )
            })

            return (
                <tfoot>
                    { list }
                </tfoot>
            )
        }
    }

    render () {
        return (
            <div className={css.container}>
                <table className={css.table}>
                    { this.renderCols() }
                    { this.renderHead() }
                    { this.renderBody() }
                    { this.renderFoot() }
                </table>
            </div>
        )
    }
}
