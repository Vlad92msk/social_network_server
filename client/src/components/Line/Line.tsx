import React from 'react'
import { makeCn } from '@shared/utils'

import styles from 'src/components/Line/Line.module.scss'

const cn = makeCn('Line', styles)


export interface LineProps {
  marginTop?: number | string
  marginBottom?: number | string
}

export const Line: React.FC<LineProps> = ({ marginTop, marginBottom }) => <div className={cn()} style={{ marginTop, marginBottom }} />
