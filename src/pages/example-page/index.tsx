import * as React from 'react'
import * as css from './styles.scss'

import { request, formatMoney } from 'helpers'

import { Group } from 'fragments'

import { Card, Input, Button } from 'components'

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
                            <img src="https://via.placeholder.com/250x180" className={css.productImage} alt=""/>
                            <div className={css.productTitle}>{item.name}</div>
                            <div className={css.productCategory}>{item.category}</div>

                            <footer className={css.productFooter}>
                                <div className={css.productPrice}>{formatMoney(item.price)} ₽</div>
                                <Button size="small" primary>В корзину</Button>
                            </footer>
                        </Card>
                    ))}
                </Group>
            </div>
        )
    }
}

// export { ExamplePage }
export default ExamplePage
