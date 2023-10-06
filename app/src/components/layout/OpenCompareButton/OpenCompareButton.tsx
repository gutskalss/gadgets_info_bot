import { useNavigate } from '@solidjs/router'
import cn from 'classnames'

import { Button } from '@/components/ui'

import styles from './OpenCompareButton.module.scss'

export const OpenCompareButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate('/compare')}
      class={cn('is-success is-medium', styles.root)}
    >
      Open comparison
    </Button>
  )
}
