import { Section } from '@shared/components/Section'
import { useChangeTheme } from '@shared/hooks'
import * as themes from './themes'


export const App = () => {
  const [cn, setColor] = useChangeTheme<typeof themes>({
    componentName: 'Application',
    initTheme: 'red',
    themes,
  })

console.log('111', 111)
  return (
    <Section
      className={cn()}
      imgClassName={cn('Img')}
      bcgImg={{
        path: {
          img: 'bcg',
          project: 'portfolio',
        },
      }}
    >
      app
      <button
        style={{
          position: 'relative',
        }}
        onClick={() => setColor('red')}
      >
        red
      </button>
      <button
        style={{
          position: 'relative',
        }}
        onClick={() => setColor('orange')}
      >
        orange
      </button>
    </Section>
  )
}
