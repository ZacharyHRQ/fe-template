import { Text,Card, CardHeader, CardBody, CardFooter, Heading, SimpleGrid, Button} from '@chakra-ui/react'

export default function PassTable(){
    return (
        <SimpleGrid spacing={20} columns={[2, null, 3]}>
  <Card>
    <CardHeader>
      <Heading size='sm'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='sm'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='sm'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    )

}