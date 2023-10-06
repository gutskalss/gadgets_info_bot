import { Navbar } from '@/components/layout/Navbar/Navbar'
import { GadgetsList } from '@/components/layout/GadgetsList/GadgetsList'

export const Root = () => {
  return (
    <div class='container'>
      <Navbar />
      <GadgetsList />
    </div>
  )
}
