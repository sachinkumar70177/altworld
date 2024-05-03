import React from "react";
import {
  Heading,
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { InfoIcon,CheckCircleIcon,AtSignIcon } from "@chakra-ui/icons";
const CandidateTable = ({ candidates }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      maxW="sm"
    >
      <Card>
        <CardHeader>
          <Flex justify={"space-between"}>
            <Heading size="md">Sales BDE</Heading>
            <Box>
              <Heading size="md" color={"green.400"}>
                Active <InfoIcon color={"black"} />
              </Heading>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Flex justify={"space-between"}>
                <Heading size="xs" textTransform="uppercase">
                  Assignment Link
                </Heading>
                <Text fontSize="sm" color={"blue.400"}>
                  https://hlo.AltWorld/
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify={"space-between"}>
                <Heading size="xs" textTransform="uppercase">
                  Assignment Hours
                </Heading>
                <Text fontSize="sm" color={"gray.500"}>
                  3 Hours
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify={"space-between"}>
                <Heading size="xs" textTransform="uppercase">
                  Assignment Ends at
                </Heading>
                <Text fontSize="sm" color={"gray.500"}>
                  11 March 2024
                </Text>
              </Flex>
            </Box>
            <Flex> <Box borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={1}
      boxShadow="md"
      maxW="sm"><AtSignIcon/> TO REVIEW</Box>
      <Box p={1} ml={2}><CheckCircleIcon/>  Shortlisted</Box>
      </Flex>
          </Stack>
        </CardBody>
      </Card>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Candidate</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {candidates.map((candidate, index) => (
            <Tr key={index}>
              <Td>
                <Flex align="center" justify={"space-between"}>
                  <Image
                    src={candidate.image}
                    alt={candidate.name}
                    boxSize="50px"
                    borderRadius="full"
                    mr={2}
                  />
                  <Box>
                    <Text fontWeight="bold">{candidate.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {candidate.email}
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td style={{ color: 
        candidate.score > 80 ? 'green' :
        candidate.score > 50 ? 'blue' :
        candidate.score > 30 ? 'yellow' : 'black'
      }}>
        {candidate.score}%
      </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CandidateTable;
