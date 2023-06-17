import { NavLink,useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import { Box ,Image,Button} from '@chakra-ui/react'
import { Flex, Center } from '@chakra-ui/react'
import logo from '../images/logo.png'
// import ButtonComponent from "./ButtonComponent";
const Navbar = () => {
    const links=[
        {
            to:"/" , label:'Home'
        },
        {
            to:'/courses' , label:'Courses'
        },
        {
            to:'/teachers',label:'Teachers'
        },
        {
            to:'/blogs', label:'Blogs'
        },
        {
          to:'/about' ,label:'About Us'
      },
    ]
const navigate=useNavigate()
const handleClick=()=>{
  navigate("/login")
}

  return (
 

<Flex bg={'#d49539'} height={'90px'} >
  <Box boxSize='100px'>
     <Image src={logo}  alt='logo' />
   </Box>
   <Tabs  variant="unstyled" height={"80px"}  >
   <TabList >
      {
        links.map((link)=>(
            <NavLink to={link.to}><Tab fontWeight={"bold"} fontSize={"lg"} marginLeft='150px' mt={'25px'} >{link.label}</Tab></NavLink>
        ))
      }
     
    </TabList>
   
    <TabIndicator
      mt="10px"
      height="10px"
      bg="#304b62"
      borderRadius="7px 7px 0px 0px"
    />
    
  </Tabs> 
  <Button onClick={handleClick} variant='solid' bg="#304b62" marginLeft='200px' mt="25px" color="white" height="50px" >Admission Now</Button>
</Flex>
   
 
  )
}

export default Navbar