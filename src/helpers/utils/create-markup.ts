export interface MarkupProps {
    __html: any;
}

export const createMarkup = (data: any): MarkupProps => {

    return { __html: data }

}
