import React from 'react';
import { Box, Flex, Image, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb,Card, CardHeader, CardBody, CardFooter,Heading,Stack,StackDivider, Button } from '@chakra-ui/react';

const UserCard = ({ user }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" maxW="sm">
      <Flex align="center" justify="space-between">
        
        <Flex>
        <Image src={user.image} alt={user.name} boxSize="50px" borderRadius="full" mr={4} />
        <Box>
        <Text fontWeight="bold">{user.name}</Text>
          <Text fontSize="sm" color="gray.500">{user.email}</Text>
        </Box>
          
        </Flex>
        <Text> Score : 85</Text>
      </Flex>
      <Flex mt={4} justify="space-between" align="center">
        <Text fontWeight="bold">Comunication: {user.score}</Text>
        <Slider defaultValue={user.score} min={0} max={100} step={1}>
          <SliderTrack bg="gray.100">
            <SliderFilledTrack bg="blue.400" />
          </SliderTrack>
          {/* <SliderThumb boxSize={6}>
            <Text color="white" fontSize="sm" fontWeight="bold">{user.score}</Text>
          </SliderThumb> */}
        </Slider>
      </Flex>
      {/* Additional Scores */}
      
      <Card>
  <CardHeader>
    <Heading size='md'>User Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          About
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Experience
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Hobbies
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Introduction
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
<Flex mt={2} align={"center"} justify={"center"}><Button  bg={"blue.400"} color={"white"}>SHORTLIST</Button></Flex>

    </Box>
  );
};

export default UserCard;
