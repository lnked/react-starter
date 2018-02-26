interface StringValidator {
    isAcceptable (s: string): boolean
}

const lettersRegexp = /^[A-Za-z]+$/

class LettersOnlyValidator implements StringValidator {
    isAcceptable (s: string) {
        return lettersRegexp.test(s)
    }
}

import * as React from "react"

interface Props {
    name: string
    label: string
    placeholder?: string
    value: string
    onChange: (fieldName: string, value: string) => void
    error?: string
}

export const Input: React.StatelessComponent<Props> = (props) => {
    return (
        <div className={formatWrapperClass(props)}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type="text"
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                />
            </div>
            <div className="help-block">{props.error}</div>
        </div>
    )
}

const formatWrapperClass = (props: Props) => {
    const wrapperClass = 'form-group'

    return props.error ?
        `${wrapperClass} has-error` :
        wrapperClass
}

const onChangeInput = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.name, e.target.value)
}

// ------- //

interface Props {
    label: string
    className: string
    onClick: () => void
}

export const Button: React.StatelessComponent<Props> = (props) => {

    return (
        <button type="button"
            className={props.className}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
}

// ------- //

import * as React from 'react'
import { MemberEntity } from '../../model'
import { Input, Button } from '../../common/components/form'

interface Props {
    member: MemberEntity
    onChange: (fieldName: string, value: string) => void
    onSave: () => void
}

export const MemberForm: React.StatelessComponent<Props> = (props) => {
    return (
        <form>
            <h1>Manage member</h1>

            <Input
                name="login"
                label="Login"
                value={props.member.login}
                onChange={props.onChange}
            />

            <Input
                name="avatar_url"
                label="Avatar Url"
                value={props.member.avatar_url}
                onChange={props.onChange}
            />

            <Button
                label="Save"
                className="btn btn-default"
                onClick={props.onSave}
            />
        </form>
    )
}
