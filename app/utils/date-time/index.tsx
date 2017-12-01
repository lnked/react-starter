interface T {
    value: string,
    format: string
}

export default function DateTime<T>({ value, format }): any => {
    return <div>{ value } in format { format }</div>
}
