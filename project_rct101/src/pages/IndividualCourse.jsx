import { Card, Stack, CardBody, CardFooter,Heading,Text,Button,Image, Box,SimpleGrid,CardHeader, Center,StackDivider, Container ,Skeleton} from '@chakra-ui/react'
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from '../Components/Loading';
const IndividualCourse = () => {
    const [course,setCourse]=useState({});
    const [loading,setLoading]=useState(false);
    const [err,serErr]=useState(false);
    const {id}=useParams();
    // console.log(param)
    function fetchAndCourse(){
            setLoading(true)
            axios.get(`https://rctmockapi.onrender.com/courses/${id}`)
            .then((res) => {
              console.log(res.data);
              setLoading(false)
              setCourse(res.data)
            })
            .catch((err) => {
              setLoading(false)
              serErr(true)
              console.log(err);
            });
          
    }
   
    useEffect(()=>{
    fetchAndCourse() 
     },[])
     if(loading){
        return(
            <Container  maxW='container.xl'  >
            <Loading/>
           </Container> 
        )
       
      }
    return (
    <>
       <Box p={12} >
       <Box maxW='1200px' margin='auto'>
       <Card direction={{ base: 'column', sm: 'row' }}  bg='#f6d6a0' overflow='hidden'boxShadow='lg' variant='outline'>
            <Stack  marginLeft='30px' mt='30px'>
                <CardBody>
                <Heading size='2xl' >{course.courseName}</Heading>
                 <br/>
                 <br />
                <Heading size='md'>For age group of: {course.Age}</Heading>
                <br />
                <Heading size='sm'>About the Course:</Heading>
                <br/>
                <Text size='md'fontWeight="semibold" noOfLines={3}>{course.about}</Text>
                <br />
                <Text size='xl'fontWeight="bold" color={"#d49539"} noOfLines={3}>Price: ₹{course.price}</Text>
                </CardBody>
                <CardFooter>
                <Button variant='solid'marginBottom="80px" color={"white"} bg={"#304b62"}>Book a Demo</Button>
                </CardFooter>
            </Stack>
            <Box >
                <Image objectFit='fill' height="520px"  src={course.image} alt={course.courseName} />
            </Box>
        </Card>       
        </Box>
        </Box> 
        <Heading size='xl'marginLeft={"250px"} >More Information About the Course</Heading>
        <SimpleGrid spacing={10} marginLeft={"250px"} mt={"20px"} marginRight={'250px'} templateColumns='repeat(3,1fr)'>
              <Card  textAlign={"center"} >
                <CardHeader bg="#304b62">
                   <Heading size='md' color={"white"}> Course Duration:<br/> {course.courseDuration}</Heading>
                </CardHeader>
   
               </Card>
               <Card textAlign={"center"} >
                  <CardHeader bg="#304b62">
                     <Heading size='md' color={"white"}>{course.Schedule}<br/> Daily</Heading>
                  </CardHeader>
  
                </Card>
                 <Card textAlign={"center"} >
                <CardHeader bg="#304b62">
                     <Heading size='md' color={"white"}>Maximum Member Count:<br/> 5</Heading>
                </CardHeader>
            </Card>
        </SimpleGrid>
        <Box marginLeft={"250px"} mt={"50px"} marginRight={'250px'}>

        <Card bg="#ebecf3" marginBottom={"50px"}>
  
  <CardHeader>
    <Heading size='md'>What will you recieve?</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='s' textTransform='uppercase'>
          
          GAMIFIED PLATFORM
        </Heading>
        <Text pt='2' fontSize='m'>
        Earn points and rewards for completing classes and see your ranking on the leaderboard!
        </Text>
      </Box>
      <Box>
        <Heading size='s' textTransform='uppercase'>
        PRACTICE SUPPORT
        </Heading>
        <Text pt='2' fontSize='m'>
        Get one-click access to Class recordings, Assignments, and supplementary materials!
        </Text>
      </Box>
      <Box>
        <Heading size='s' textTransform='uppercase'>
        CERTIFICATION
        </Heading>
        <Text pt='2' fontSize='m'>
        Get Certified by TalentGum as you progress towards the next level in Art!
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>

        </Box>
 
    
      
    </>
    )
}

export default IndividualCourse