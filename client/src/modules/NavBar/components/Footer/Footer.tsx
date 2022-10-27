import { makeCn } from '@shared/utils'
import styles from 'src/modules/NavBar/components/Footer/Footer.module.scss'

const cn = makeCn('Footer', styles)

export const Footer = () => (<div className={cn()}>Header</div>)
