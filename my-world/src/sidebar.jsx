import React from 'react';
import {Box, Flex, Image, Text,Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import {  DragHandleIcon,HamburgerIcon} from '@chakra-ui/icons';
const Sidebar = () => {
  return (
    <Box w="250px" bg="gray.100" p={4}>
        <Flex>
        <DragHandleIcon/>
        <Text ml={2}>Hi, AltWorld</Text>
        </Flex>
<Flex>
    <HamburgerIcon mt={4}/>
<Text mt={4} ml={2} fontWeight="bold">Dashboard</Text>
</Flex>
      
      {/* Add other sidebar items as needed */}
    </Box>
  );
};

// export default Sidebar;

const MainContent = ({ children }) => {
  return (
    <Box flex="1" p={4}>
      {/* <Flex justify={"space-between"}> */}
      {children}
      {/* </Flex> */}
      
    </Box>
  );
};

const Layout = ({ children }) => {
  return (
    <Flex direction="column">
    <Box p={4} >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Pages</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Assignment</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
    <Flex>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Flex>
  </Flex>
  );
};

export default Layout;
