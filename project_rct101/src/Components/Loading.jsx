import { Skeleton ,Stack} from '@chakra-ui/react'
const Loading = () => {
  return (
<Stack mt="50px">
  <Skeleton height='70px' />
  <Skeleton height='70px' />
  <Skeleton height='70px' />
  <Skeleton height='70px' />
  <Skeleton height='70px' />
  <Skeleton height='70px' />
  <Skeleton height='70px' />
</Stack>
  )
}

export default Loading