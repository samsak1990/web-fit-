import Icon_login from '../assets/icons/login.svg'
import Icon_help from '../assets/icons/setting-2.svg'
import Icon_dollar from '../assets/icons/dollar-square.svg'

export interface IDropMenu { title: string, path: string, icon: string }

export const DROP_MENU: IDropMenu[] = [
    { title: 'Выплаты', path: '/', icon: Icon_dollar },
    { title: 'Тех. поддержка', path: '/', icon: Icon_help },
    { title: 'Выход', path: '/', icon: Icon_login },
]
