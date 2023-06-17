import { Button } from '@chakra-ui/react'
const ButtonComponent = ({text,onClick}) => {
  // console.log(text,onClick)
  return (
    
    <Button bg='#304b62' onClick={onClick}>{text}</Button>
  )
}

export default ButtonComponent