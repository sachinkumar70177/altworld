// import logo from './logo.svg';
import { Flex } from '@chakra-ui/react';
import './App.css';
import CandidateTable from './candidate';
import UserCard from './cardone';
import Layout from './sidebar';
import VideoBox from './video';

function App() {
const user= {
  image: 'candidate1.jpg',
  name: 'John Doe',
  email: 'john@example.com',
  score: 85,
  communicationScore:"9"
};
  const candidates = [
    {
      image: 'candidate1.jpg',
      name: 'John Doe',
      email: 'john@example.com',
      score: 40,
    },
    {
      image: 'candidate2.jpg',
      name: 'Jane Smith',
      email: 'jane@example.com',
      score: 92,
    },
    // Add more candidate objects as needed
  ];
  return (
    <div className='app'>
      
      <Layout>
  <Flex justify={"space-around"} mb={2}>
  <CandidateTable candidates={candidates}/>
<UserCard user={user}/>
    </Flex>   

<VideoBox/>
      </Layout>

    </div>
  );
}

export default App;
