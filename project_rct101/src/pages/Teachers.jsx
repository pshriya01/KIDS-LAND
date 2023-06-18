import { useReducer,useEffect } from "react";
import axios from "axios";
import { Avatar, Heading, Spinner,Container,SimpleGrid,Box,Text} from '@chakra-ui/react'
import Loading from "../Components/Loading";
const init = {
  loading: false,
  err: false,
  data: []
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_LOADING":
      return {
        loading: true,
        err: false,
        data: []
      };

    case "FETCH_SUCCESSFUL":
      return {
        loading: false,
        err: false,
        data: payload
      };

    case "FETCH_UNSUCCESSFUL":
      return {
        loading: false,
        err: true,
        data: []
      };
    default:
      throw new Error("Invalid Action type");
  }
};
const url=`https://rctmockapi.onrender.com/teachers`
const Teachers = () => { 
const [state, dispatch] = useReducer(reducer, init);
function fetchTeachers(){
  dispatch({ type: "FETCH_LOADING" });
  axios.get(url)
  .then((res) => {
    console.log(res.data);
    dispatch({ type: "FETCH_SUCCESSFUL", payload: res.data });
  })
  .catch((err) => {
    dispatch({ type: "FETCH_UNSUCCESSFUL" });
    console.log(err);
  });
}
const { loading, err, data } = state;
useEffect(() => {

   fetchTeachers();

}, []);

if(loading){
  return(
    <>
    <Box bg="#ebecf3" padding={4}>
    <Container  maxW='container.xl'  >
    <Heading as='h4' size='xl' textAlign="center">Meet Our Teachers</Heading>
     <Loading/>
    </Container>
    </Box>
    
    </>
  )
}


  return (
    <>
    <Box bg="#ebecf3" padding={4}>
    <Container  maxW='container.lg' >
    <Heading as='h4' size='xl' textAlign="center">Meet Our Teachers</Heading>
      <SimpleGrid columns={2} spacing={10}>
        {
          data.map((teacher)=>(
            <Box margin="auto">
              <Avatar size='2xl'marginBottom="20px" marginLeft="80px"  src={teacher.avatar} />
              
              <Heading as='h4' size='md' textAlign="center">{teacher.name}</Heading>
              <br />
              <Heading as='h5' size='sm'textAlign="center">{teacher.course}</Heading>
              <Text fontSize='lg' textAlign="center">{teacher.description}</Text>
            </Box>
          ))
        }
      </SimpleGrid>
       </Container>

    </Box>
      
    </>
  )
}

export default Teachers