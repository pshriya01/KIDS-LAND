import { Box ,Image,Button,Heading, Container} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack,Text,SimpleGrid,Avatar } from '@chakra-ui/react'
import bannernew from '../images/bannernew.png'
import faculty from '../images/faculty.png'
import {CgSearch} from 'react-icons/cg'
import {GiTeacher} from 'react-icons/gi'
const Home = () => {
  return (
    <>
        <Box height='700px' p={12}   background=
         'url(https://media.istockphoto.com/id/1359234676/photo/one-caucasian-boy-lying-on-the-floor-at-home-in-day-reading-a-book-front-view-copy-space-real.webp?b=1&s=170667a&w=0&k=20&c=wVaLTeBzsLZLGwvX8A93zSlaAcWJwb3oraHi4Bq0S9I=)'>
          <Box maxW='1300px' margin='auto' >
           <Card direction={{ base: 'column', sm: 'row' }}
             overflow='hidden' boxShadow='lg'
               variant='outline'  bg='#f6d6a0'>
             <Stack marginLeft='50px' mt='50px'>
                <CardBody>
                 <Heading size='4xl' noOfLines={2}>Welcome to kids land </Heading>
                  <br />
                  <br />
                <Heading as='h2' size='2xl'  noOfLines={2}>Enhancing kids Future with Smart Education</Heading>
                  <br />
                  <br />
                <Heading as='h4' size='md'  noOfLines={2}>Providing them a better education and brightening the future of your kids Choice is yours .</Heading> 
                </CardBody>

                <CardFooter >
                   <Button variant='solid' color='white' bg="#304b62" mt='-60px'  >
                       Buy Latte
                   </Button>
                   <Button variant='solid' color='white' bg="#304b62" mt='-60px'marginLeft='50px'  >Live Demo</Button>
                </CardFooter>
             </Stack>
             <Image   src={bannernew} marginRight='80px' alt='banner' />
           </Card>
          </Box>
        </Box>
        <Heading as='h2'mt='20px' marginLeft='50px'  color="#37464e" size='2xl' noOfLines={2}>Numbers Speaks for Itself</Heading>
        <SimpleGrid spacing={12} templateColumns='repeat(3,1fr)'margin="80px" >
          <Card bg="#304b62">
            <Avatar size="xl" mt='-30px' marginLeft='180px' src={GiTeacher} />
            <Container maxW="md">
            <CardHeader>
              <Heading size='xl' color='white'>200+<br/>Faculties</Heading>
            </CardHeader>
            <CardBody>
              <Text color='white' fontSize='xl'>Best and quality teachers with advance knowledge on the corresponding topics have more than 3 years of experience</Text>
            </CardBody>
            </Container>
          </Card>
          <Card bg="#304b62">
            <Avatar name='Segun Adebayo' mt='-30px' marginLeft='80px' src='https://bit.ly/sage-adebayo' /> 
            <CardHeader>
              <Heading color='white' size='xl'>150+ Achievements</Heading>
            </CardHeader>
            <CardBody>
              <Text color='white' fontSize='xl' >Many national and international achievements by students participated in different competition across globe and winning prices</Text>
            </CardBody>
          </Card>
          <Card bg="#304b62">
            {/* <Avatar name='Segun Adebayo' mt='-30px' marginLeft='80px' src='https://bit.ly/sage-adebayo' />  */}
              {/* <CgSearch/ */}
              <GiTeacher/>
            <CardHeader>
              <Heading color='white' size='xl'>150+ Courses</Heading>
            </CardHeader>
            <CardBody>
              <Text color='white' fontSize='xl' >A variety of courses from basic to advance level can be mastered through over website along with certification from esteemed institutes </Text>
            </CardBody>
          </Card>
        </SimpleGrid>

    </>
  
   
  )
}

export default Home