import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children, в котором хранится название кнопки, там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'default' | 'secondary' | 'red'
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType='default', //по умолчанию
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = [
        s.button,
        disabled ? s.disabled : '',
        xType === 'secondary' ? s.secondary :
        xType === 'default' ? s.default :
        xType === 'red' ? s.red :
            s.default,
         className
    ].filter(Boolean).join(' ')//удаление пустых строк и объединение в строку

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
