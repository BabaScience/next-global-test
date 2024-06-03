import React from 'react'
import { 
  Html, 
  Body, 
  Container, 
  Text, 
  Link, 
  Preview, 
  Tailwind
} from "@react-email/components";

interface EmailProps {
  name: string;
}

const WelcomeTemplate = ({ name = "Bamba" }: EmailProps) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className='text-gray-800'>
              Hello {name}! Click <Link href="https://youtube.com">here</Link> to get started.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate