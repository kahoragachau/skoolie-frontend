import { Card, CardBody } from '@chakra-ui/react'
import {
    Stack,
    Heading,
    Text,
    Image,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function Dashboard(){
    const [school, setSchools] = useState([])

    useEffect(()=>{
        fetch("https://mysite-i1e8.onrender.com/schools")
        .then(res => res.json())
        .then(data => setSchools(data))
    },[])


    return (
    <Card maxW='sm'>
        <CardBody>
            <Image
            src='https://lh3.googleusercontent.com/p/AF1QipNk3tGFOLTV02SvO9s0OaLy4nMcXrzVYhbq7t_q=s680-w680-h510'
            alt='Moringa School'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>Moringa School</Heading>
                <Text>
                    Moringa School
                </Text>
            </Stack>
        </CardBody>
    </Card>
    )
}

export default Dashboard;