import * as React from 'react';

/**
 * Описываем доступные свойства для компонента.
 * Наследование от дженерика React.HTMLProps позволяет не писать руками
 * все стандартные атрибуты для поля ввода.
 */
interface Props extends React.HTMLProps<HTMLInputElement> {
    customProperty: string;
}

// Описываем состояние компонента
interface State {
    value: string;
}

// указываем дженерику React.Component интерфейсы наших свойств и состояния
class Simple extends React.Component<Props, State> {
    // Объявление состояния по умолчанию, в качестве свойства класса
    state: State = {
        value: ''
    }

    /*
     * Для обработки события onChange на поле ввода, используем соответствующую сигнатуру
     * свойства onChange у JSX элемента input.
     * Примеры дженериков на другие события - MouseEvent, FocusEvent, KeyboardEvent
     */
    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        this.setState(() => ({ value }));
    }

    render() {
        /*
         * Так как мы наследовались от HTMLProps для HTMLInputElement, можем записать
         * кастомные свойства в переменные, а для записи всех свойств, поддерживаемых
         * полем ввода, использовать оператор расширения.
         */
        const {
            customProperty,
            ...inputProps
        } = this.props;
        const { value } = this.state;

        /*
         * <input {...inputProps} /> - это короткая запись для применения всех свойств объекта
         * к JSX элементу (превратится в placeholder={inputProps.placeholder}
         * и так далее для всех указанных свойств)
         * Поставив свойства value и onChange после оператора расширения {...inputProps}, мы
         * гарантируем перезапись одноименных свойств, содержащихся в inputProps
         */
        return (
            <div>
                <h4>{customProperty}</h4>
                <input
                    {...inputProps}
                    value={value}
                    onChange={this.handleChange}
                />
             </div>
        );
    }
}

export default Simple;
