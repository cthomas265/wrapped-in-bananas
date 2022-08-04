import Signup from './signup.js'
import Login from './login.js'
import { Card, Center } from '@mantine/core'

const LoginAndSignup = () => {
    return (
        
        <div>
            <Center>
                <Card.Section>
                    <Login />
                </Card.Section>

                <Card.Section>
                    <Signup />
                </Card.Section>
            </Center>
                
        </div>
    )
}

export default LoginAndSignup 