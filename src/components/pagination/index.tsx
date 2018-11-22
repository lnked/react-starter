import * as React from 'react'
import * as css from './styles.scss'

import { range, classes, createMarkup } from 'helpers'

export interface P {
    items?: number;
    edges?: number;
    current?: number;
    className?: string;
    itemsOnPage?: number;
    ellipseText?: string;
    useEndEdge?: boolean;
    useStartEdge?: boolean;
    displayedPages?: number;
    handleChange?: (page: number) => void | boolean;
}

const cx = classes.bind(css)

class Pagination extends React.Component<P, {}> {

    static defaultProps = {
        items: 0,
        itemsOnPage: 0,
        edges: 2,
        current: 1,
        className: '',
        ellipseText: '&hellip;',
        useEndEdge: true,
        useStartEdge: true,
        displayedPages: 5,
        handleChange: false,
    }

    shouldComponentUpdate (props: P) {

        const { items, itemsOnPage, current } = this.props

        return !(items === props.items) ||
               !(itemsOnPage === props.itemsOnPage) ||
               !(current === props.current)

    }

    handleChange = (page: number) => {

        if (this.props.handleChange) {

            this.props.handleChange(page)

        }

    }

    getInterval = (pages: number) => {

        const { current, displayedPages } = this.props
        const halfDisplayed = displayedPages / 2

        return {
            start: Math.ceil(
                current > halfDisplayed
                    ? Math.max(Math.min(current - halfDisplayed, (pages - displayedPages)), 0)
                    : 0
            ),
            end: Math.ceil(
                current > halfDisplayed
                    ? Math.min(current + halfDisplayed, pages)
                    : Math.min(displayedPages, pages)
            ),
        }

    }

    renderEllipse = (key: number) => {

        const { ellipseText } = this.props

        return (
            <span
                key={`page_eclipse_${key}`}
                className={css.ellipse}
                dangerouslySetInnerHTML={createMarkup(ellipseText)}
            />
        )

    }

    renderPages = () => {

        const {
            edges,
            items,
            current,
            useEndEdge,
            itemsOnPage,
            useStartEdge,
        } = this.props

        const nodes: any[] = []
        const pages = Math.ceil(items / itemsOnPage)

        const interval = this.getInterval(pages)

        if (interval.start > 0 && edges > 0) {

            if (useStartEdge) {

                const end = Math.min(edges, interval.start)

                range(0, end).map((i: number) => nodes.push({ page: i + 1 }))

            }

            if (edges < interval.start && (interval.start - edges !== 1)) {

                nodes.push({
                    node: this.renderEllipse(1),
                })

            } else if (interval.start - edges === 1) {

                nodes.push({
                    page: edges,
                })

            }

        }

        range(interval.start, interval.end).map((i: number) => nodes.push({ page: i + 1 }))

        if (interval.end < pages && edges > 0) {

            if (pages - edges > interval.end && (pages - edges - interval.end !== 1)) {

                nodes.push({
                    node: this.renderEllipse(2),
                })

            } else if (pages - edges - interval.end === 1) {

                nodes.push({
                    page: interval.end,
                })

            }

            if (useEndEdge) {

                const begin = Math.max(pages - edges, interval.end)
                range(begin, pages).map((i: number) => nodes.push({ page: i + 1 }))

            }

        }

        if ((itemsOnPage <= 0) || (pages < 2)) {

            return null

        }

        return nodes && nodes.map((item: any, idx: number) => {

            if (item.node) {

                return item.node

            }

            return (
                <button
                    key={`page_${idx}`}
                    className={cx(css.btn, { active: (item.page === current) })}
                    onClick={this.handleChange.bind(this, item.page)}
                >
                    {item.page}
                </button>
            )

        })

    }

    renderControl = (symbol: string, next: number, disabled: boolean = false) => {

        return (
            <button
                type="button"
                className={cx(css.control, [ symbol ])}
                onClick={this.handleChange.bind(this, next)}
                disabled={disabled}
            />
        )

    }

    render () {

        const { current, items, itemsOnPage, className } = this.props
        const pages = Math.ceil(items / itemsOnPage)

        const prev = current - 1
        const next = current + 1

        return (
            <div className={cx({ nav: true }, className)}>
                {this.renderControl('prev', prev, current === 1)}
                {this.renderPages()}
                {this.renderControl('next', next, current === pages)}
            </div>
        )

    }

}

export default Pagination
export { Pagination }
