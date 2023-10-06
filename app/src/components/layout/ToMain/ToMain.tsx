import { useNavigate } from '@solidjs/router'

import { Button } from '@/components/ui'

import styles from './ToMain.module.scss'

export const ToMain = () => {
  const navigate = useNavigate()

  return (
    <Button class={styles.root} onClick={() => navigate('/')}>
      To main
    </Button>
  )
}
