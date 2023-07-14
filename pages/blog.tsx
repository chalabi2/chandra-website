import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  useColorMode,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import Header from '../components/react/header';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

type BlogPostProps = {
  title: string;
  author: string;
  date: string; 
  content: string;
};


const BlogPost: React.FC<BlogPostProps> = ({ title, author, date, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonHover = useColorModeValue("rgba(1, 49, 51, 0.5)", "rgba(181, 253, 255, 0.5)")

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const snippet = content.split('\n')[0];

  return (

    <VStack
    mt={0}
      spacing={4}
      borderWidth={1}
      borderRadius="lg"
      borderColor={useColorModeValue("#013133", "#b5fdff")}
      p={4}
      w="100%"
      overflowWrap="break-word"
      maxWidth="100%"
    >
      <Heading as="h2" size="lg" color={useColorModeValue("#013133", "#b5fdff")}>
        {title}
      </Heading>
      <HStack overflowWrap="break-word"
      maxWidth="100%">
        <Avatar
          name={author}
          src={`https://ui-avatars.com/api/?name=${author.replaceAll(' ', '+')}`}
        />
        <Text color={useColorModeValue("#013133", "#b5fdff")}>{author}</Text>
        <Text color={useColorModeValue("#013133", "#b5fdff")}>{date}</Text>
      </HStack>
      <Box
      maxH="400px"
      sx={{
        scrollbarWidth: 'auto',
      scrollbarColor: useColorModeValue(
        'rgba(0,0,0,0.3) rgba(0,0,0,0.2)',
        'rgba(255,255,255,0.2) rgba(255,255,255,0.1)'
      ),
      // For Chrome and other browsers except Firefox
      '&::-webkit-scrollbar': {
        width: '14px',
        background: useColorModeValue(
          'rgba(220,220,220,0.1)',
          'rgba(60,60,60,0.1)'
        ),
        borderRadius: '3px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: useColorModeValue(
          'rgba(0,0,0,0.1)',
          'rgba(255,255,255,0.1)'
        ),
        borderRadius: '10px',
        border: '3px solid transparent',
        backgroundClip: 'content-box'
      }
      }}
      color={useColorModeValue("#013133", "#b5fdff")} overflow="scroll"  width="100%">
  <ReactMarkdown className='markdown' >
  {isExpanded ? content : snippet}
  </ReactMarkdown>
</Box>
      <Button 
      bgColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
      onClick={handleExpansion} color={useColorModeValue("#013133", "#b5fdff")}
      _hover={{
bgColor: buttonHover
        
      }}
      >
        {isExpanded ? 'Show Less' : 'Read'}
      </Button>
    </VStack>
  );
};

const ArticleList = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const samplePosts = [
    {
      title: 'Gravity Bridge Proposal #170',
      author: 'Chalabi',
      date: 'April 17, 2023',
      content: ` 
      \n
      With the passing of gravity bridge proposal #170 chandrastation is receiving funding for multiple 
      on-going development projects as outlined in the proposal. As a genesis validator and longtime 
      supporter / community member of gravity bridge we are positioned to develop and maintain two 
      separate applications.\n
      ---\n
      ## Space station\n
      The preferred front end for gravity bridge upon launch.
      It was developed to work but was not being maintained and became somewhat deprecated 
      (visiting spacestation. Zone forwards you to blockscapes portal).
      Leaving the ecosystem with one useable front end for bridging to and from gravity, blockscape's portal.
      Gravity bridge portal is the premier option and will continue to be, 
      but it was heavily apparent relying on one port of entry is not scale-able and 
      did not support the ethos of gravitybridge. Space station did not support 
      the newly released fee, chain fees.
      It also did not calculate a proper bridge fee from 
      ethereum gas markets, instead relying on hard coded amounts for different speeds.
      This resulted in inaccurate pricing and conversions not
      functioning, requiring users to pay either 10 usdc to 
      bridge usdc or 10 eth to bridge eth at the lowest speed.
      It is now fixed to support dynamic bridge fees 
      depending on the market and chain fees.
      It will be our duty with the passing of proposal #170 to 
      continue maintaining space station in order to ensure its functionality.
      Alongside maintainer-ship we have also made space station easily deployable by anyone.
      Simply fork the github repo, follow the guide, and github pages will deploy a version of the frontend.
      Allowing you to host your own front end and bridge your assets.\n
      ---\n
      ## Gravity bridge statistics\n
      Gravity bridge is the leader in the cosmos ecosystem continuously pushing the most volume.
      Reading statistics and scanning data is relatively difficult.
      Gravity bridge statistics (working name) will serve 
      to showcase specific data like the total amount of fees paid to stakers,
      which assets are doing the most volume, overall volume, 
      month over month  week over week, and daily volume numbers amongst other stats.
      We are also open to hearing feedback from the community and adding more data to the page.
      Space station is finished and live at https://chandrastation.github.io/space-station/
      gravity bridge statistics is still being worked on but is updated here 
      (inaccurate data currently present) https://chalabi2.github.io/gravity-dashboard/
      feel free to follow the github repos to stay up to date on development 
      alongside our newsletters. We are present and participating 
      in discussions in the gravity bridge discord

      - space station: https://github.com/chandrastation
      - gravity bridge statistics: https://github.com/chalabi2/gravity-dashboard
      `,
    }
  ];

  const buttonHover = useColorModeValue("rgba(1, 49, 51, 0.5)", "rgba(181, 253, 255, 0.5)")

  return (
    <>
    <Head>
        <title>Chandra Station Blogs</title>
        <meta name="description" content="Chandra Station blog posts" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
    <Box 
    minH="100vh" bg={useColorModeValue("#b5fdff", "#013133")}>
        <Header/>
      <Container 
      
      maxW="container.lg" pt={10}>
        <VStack 
        shadow={"dark-lg"}
        borderRadius={"4px"}
        bgColor={useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)")}
        p={4}
        spacing={8} w="100%">
          {samplePosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              content={post.content}
            />
          ))}
        </VStack>
        <Link href={"/"}>
        <Button
        bgColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
              _hover={{
                bgColor: buttonHover
                        
                      }}
        my={20}
      bottom={0}
      left={0}
      leftIcon={<IoArrowBack/>}
      >Back</Button>
      </Link>
      </Container>
    </Box>
    </>
  );
};

export default ArticleList;