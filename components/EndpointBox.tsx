interface Props {
  endpoint: string,
}

const EndpointBox = ({ endpoint }: Props) => {
  return (
    <div className="container my-4 p-2 border-2 bg-gray-200 border-gray-400 rounded">
      {endpoint}
    </div>
  )
}

export default EndpointBox

