import * as React from 'react'
import * as css from '../styles.scss'

import {
    Input,
    Radio,
    Button
} from 'components'

export default function Organization () {
    return (
        <React.Fragment>
            <h1 className={css.title}>Регистрация</h1>

            <div className={css.organization}>
                <h3 className={css.organizationName}>ОАО АГРОСФЕРА</h3>
                <div className={css.organizationDetails}>
                    <div className={css.organizationTitle}>ИНН / КПП</div>
                    2308222507 / 230801001
                </div>

                <div className={css.organizationDetails}>
                    <div className={css.organizationTitle}>Адрес</div>
                    г Краснодар, проезд Онежский 3-й, д 7, оф 6
                </div>
            </div>

            <div className={css.fields}>
                <div className={css.row}>
                    <Input label="Подразделение" />
                </div>
            </div>

            <div className={css.group}>
                <h3 className={css.groupTitle}>Укажите НДС</h3>
                <div className={css.groupList}>
                    <Radio name="nds" label="Без НДС" value="0" className={css.groupListItem} checked />
                    <Radio name="nds" label="НДС 18%" value="1" className={css.groupListItem} />
                    <Radio name="nds" label="НДС 10%" value="2" className={css.groupListItem} />
                </div>
            </div>

            <div className={css.lastRow}>
                <Input label="Код менеджера (необязательно)" />
            </div>

            <Button size="large" variant="primary" wide>Далее</Button>
        </React.Fragment>
    )
}
