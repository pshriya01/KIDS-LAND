import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Center, Button, Heading, ButtonGroup, Flex, Image,Alert,AlertIcon,AlertTitle
} from '@chakra-ui/react'

import axios from 'axios';
import { useState } from 'react';


import React from 'react';
import { useNavigate } from 'react-router-dom';

let initState = {
    name: "",
    email: "",
    password: "",
    city: "",
    country: ""
}


function SignUp() {

    const [name, setName] = useState(initState.name)
    const [email, setEmail] = useState(initState.email)
    const [password, setPassword] = useState(initState.password)
    const [city, setCity] = useState(initState.city)
    const [country,setCountry]=useState(initState.country)
    const navigate = useNavigate()

    function handleSubmit() {
        if (name === "" || email === "" || password === "" || city  === "" || country === "")  {
            alert("Input Fields Cannot Be Empty!")
        }
        else {
            axios.post(`https://rctmockapi.onrender.com/user`, {
                name: name,
                email: email,
                password: password,
                city:city,
                country:country
            })
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            navigate("/login")

        }

    }



    return (<>

        
        <Center>
            <Flex>
                <Box mt="50px" bg="#304b62" h="550px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="60px">
                    <Heading mb="10px" color={"white"} >Register Here :</Heading>
                    <FormControl   w="400px" isRequired>
                        <FormLabel color={"white"}>Name</FormLabel>
                        <Input bgColor={"white"} type='text' value={name} onChange={(e) => (setName(e.target.value))} />

                        <FormLabel color={"white"}>Email address</FormLabel>
                        <Input bgColor={"white"} type='email' value={email} onChange={(e) => (setEmail(e.target.value))} />

                        <FormLabel color={"white"}>Password</FormLabel>
                        <Input bgColor={"white"} type='password' value={password} onChange={(e) => (setPassword(e.target.value))} />

                        <FormLabel color={"white"}>City</FormLabel>
                        <Input bgColor={"white"} type='text' value={city} onChange={(e) => (setCity(e.target.value))} />

                        <FormLabel color={"white"}>Country</FormLabel>
                        <Input bgColor={"white"} type='text' value={country} onChange={(e) => (setCountry(e.target.value))} />

                        <Button mt="20px" variant='solid' bg='#d49539' onClick={handleSubmit}>Submit</Button>

                    </FormControl>
                </Box>

            </Flex>
        </Center>
        
    </>)
}






export default SignUp;