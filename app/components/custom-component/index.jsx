import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import Table from 'components/table'
import Button from 'components/button'
import Input from 'components/input'
import ColorPicker from 'components/color-picker'
import Radio from 'components/radio'
import Checkbox from 'components/checkbox'
import RadioGroup from 'components/radio-group'
import SelectionBox from 'components/selection-box'
import BreadCrumbs from 'components/bread-crumbs'
import Notify from 'components/notify'
import HintText from 'components/hint-text'
import MaskedText from 'components/masked-text'
import Loader from 'components/loader'
import Spinner from 'components/spinner'
import Badge from 'components/badge'
import Tabs from 'components/tabs'
import Prompt from 'components/prompt'
import Confirm from 'components/confirm'

export default class CustomComponent extends Component {
    static propTypes = {
        name: PropTypes.string,
        prop: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ])
    }

    static defaultProps = {
        prop: {}
    }

    render () {
        const ComponentProp = this.props.prop
        const ComponentName = this.props.name.toLowerCase()

        const componentLookup = {
        // dropdownlist: (props) => {
        //     return (
        //         <div key={Math.random()} className={css.item}>
        //             <DropDownList {...props} />
        //         </div>
        //     )
        // },
        // alert: (props) => {
        //     return (
        //         <div key={Math.random()} className={css.item}>
        //             <Alert {...props} />
        //         </div>
        //     )
        // },
            table: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Table {...props} />
                </div>
            ),
            breadcrumbs: (props) => (
                <div key={Math.random()} className={css.item}>
                    <BreadCrumbs {...props} />
                </div>
            ),
            tabs: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Tabs {...props} />
                </div>
            ),
            confirm: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Confirm {...props} />
                </div>
            ),
            prompt: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Prompt {...props} />
                </div>
            ),
            badge: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Badge {...props} />
                </div>
            ),
            loader: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Loader {...props} />
                </div>
            ),
            spinner: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Spinner {...props} />
                </div>
            ),
            maskedtext: (props) => (
                <div key={Math.random()} className={css.item}>
                    <MaskedText {...props} />
                </div>
            ),
            hinttext: (props) => (
                <div key={Math.random()} className={css.item}>
                    <HintText {...props} />
                </div>
            ),
            colorpicker: (props) => (
                <div key={Math.random()} className={css.item}>
                    <ColorPicker {...props} />
                </div>
            ),
            selectionbox: (props) => (
                <div key={Math.random()} className={css.item}>
                    <SelectionBox {...props} />
                </div>
            ),
            checkbox: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Checkbox {...props} />
                </div>
            ),
            radiogroup: (props) => (
                <div key={Math.random()} className={css.item}>
                    <RadioGroup {...props} />
                </div>
            ),
            radio: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Radio {...props} />
                </div>
            ),
            input: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Input {...props} />
                </div>
            ),
            notify: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Notify {...props} />
                </div>
            ),
            button: (props) => (
                <div key={Math.random()} className={css.item}>
                    <Button {...props} />
                </div>
            )
        }

        const componentsList = []

        if (ComponentProp.length) {
            ComponentProp.map((props, id) => {
                componentsList.push(componentLookup[ComponentName](props))
            })
        } else {
            componentsList.push(componentLookup[ComponentName](ComponentProp))
        }

        return (
            <div>
                { componentsList }
            </div>
        )
    }
}
