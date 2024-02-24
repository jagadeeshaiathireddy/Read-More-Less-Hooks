import {useState} from 'react'

import {
  ReadMoreComponent,
  Heading,
  TopParagraph,
  BottomContainer,
  ReactHookImage,
  BottomParagraph,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  console.log('Data as been passed')

  const reactHookDescriptionLess = reactHooksDescription.slice(0, 170)
  const reactHookDescriptionMore = reactHooksDescription

  const [button, setButton] = useState(true)
  const [reactHook, setParagraph] = useState(reactHookDescriptionLess)

  const changeButton = () => {
    setButton(prevState => !prevState)
    setParagraph(prevState => !prevState)
  }

  return (
    <ReadMoreComponent>
      <Heading>React Hooks</Heading>
      <TopParagraph>Hooks are a new addition to React</TopParagraph>
      <BottomContainer>
        <ReactHookImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <BottomParagraph>
          {reactHook ? reactHookDescriptionLess : reactHookDescriptionMore}
        </BottomParagraph>
        <ReadMoreButton onClick={changeButton}>
          {button ? 'Read More' : 'Read Less'}
        </ReadMoreButton>
      </BottomContainer>
    </ReadMoreComponent>
  )
}

export default ReadMore
