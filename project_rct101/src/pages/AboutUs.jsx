import { Heading,Container,Box ,Text,Image} from '@chakra-ui/react'
import mission from '../images/mission.png'
import vision from '../images/vision.png'
const AboutUs = () => {
  return (
    <>
      <Container maxW='5xl' centerContent >
        
        <Heading as='h2' size='3xl' noOfLines={1}color="black" margin="20px" >About Us</Heading>
        <br />
        <Heading as='h4' size='xl' color={'#f6d6a0'} noOfLines={1}>"Online Education Is Like a Rising </Heading>
        <br />
        <Heading as='h4' size='xl' color="#304b62" noOfLines={1}>Tide, It's Going To Lift All Boats.!"</Heading>
        <br />
        <br />
        <Text color='black' textAlign={"center"} fontSize='2xl'>
        Online learning is one of the imminent trends in the education sector around the globe. This mode of learning is done through the internet. With advanced and upgraded technologies, this mode of learning has been made simpler. Online Education is also preferred in higher learning Institutions. This article will render the students about online education, its outcomes, and advantage in short and long essays on Online Education.
        </Text>
    </Container>
    <Box>
     <Image mt="50px" src={mission} alt='Dan Abramov' /> 
    </Box>
    <Box>
     <Image mt="20px" src={vision} alt='Dan Abramov' /> 
    </Box>

    </>
  )
}

export default AboutUs