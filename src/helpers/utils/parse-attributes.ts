import { calculate, isUndefined } from 'helpers'

export const parseAttributes = (options: { item: any, crop_id: number, crops: any }): any => {
    const { item, crops, crop_id } = options
    const current = crops && crop_id && crops[crop_id]

    if (item && current &&
        item.attributes && item.attributes.length &&
        current.attributes && current.attributes.length) {
        let main: any = {}
        const attributes: any[] = []

        current.attributes.map((props: any) => {
            const find = item.attributes.find((attr: any) => attr.slug === props.slug)

            if (find && !isUndefined(find)) {
                find.name = props.name
                find.value = calculate(find, props)

                attributes.push(find)

                if (props.required && !Object.keys(main).length) {
                    main = find
                }
            }
        })

        if (!Object.keys(main).length && Object.keys(attributes).length) {
            main = attributes[0]
        }

        return {
            main,
            attributes,
        }
    }

    return {
        attributes: [],
        mainAttribute: {},
    }
}
