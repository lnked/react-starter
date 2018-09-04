import * as React from 'react'
import * as css from './styles.scss'

import { request } from 'helpers'

import { Group } from 'fragments'

import { Card, Input } from 'components'

import { STORE_UI, STORE_APP, STORE_ROUTER } from 'settings/constants'

import { inject, observer } from 'mobx-react'

export interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    currency: string;
}

@inject(STORE_UI, STORE_APP, STORE_ROUTER)
@observer
class ExamplePage extends React.Component<any, any> {
    state = {
        products: [],
    }

    componentDidMount () {
        document.title = 'Example Page'

        this.loadData()
    }

    loadData = () => {
        request.get('/data/products.json')
            .then((res: any) => res.data)
            .then((response: any) => this.setState({ products: response.splice(0, 40) }))
            .catch((error: any) => console.log(error))
    }

    render () {
        const type = 'grid'
        const { products } = this.state

        return (
            <div className={css.content}>
                {/*
                <Title size="huge" type="primary" center>Example Page</Title>
                <Title size="medium" type="secondary" center>Example Page</Title>
                */}

                <Input type="text" />

                <Group type={type}>
                    {products && products.map((item: Product) => (
                        <Card key={item.id} className={css.product}>
                            <img src="https://via.placeholder.com/500x500" className={css.productImage} alt=""/>
                            <div className={css.productTitle}>{item.name}</div>
                            <div className={css.productCategory}>{item.category}</div>
                            <div className={css.productPrice}>{item.price} {item.currency}</div>
                        </Card>
                    ))}
                </Group>
            </div>
        )
    }
}

// export { ExamplePage }
export default ExamplePage
