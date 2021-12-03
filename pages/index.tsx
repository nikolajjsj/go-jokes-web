import type { NextPage } from 'next'
import EndpointBox from '../components/EndpointBox'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-8">
        Welcome to go-jokes-api! 👋
      </h1>

      <p className="text-xl my-8">
        A simple jokes API built with the go/golang programming language.
      </p>

      <p className="text-sm my-8">
        https://go-jokes-api.herokuapp.com/
      </p>

      <hr className="my-4" />

      <EndpointBox endpoint="GET /random" />

      <EndpointBox endpoint="GET /jokes" />

      <EndpointBox endpoint="GET /jokes/:id" />
    </div>
  )
}

export default Home
