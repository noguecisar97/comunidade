import { NextPage } from 'next'

export const IndexPage: NextPage<Props> = (props): JSX.Element => (
  <>
    <h1>{props.launch.site}</h1>
  </>
)

interface Props {
  launch: {
    timestamp: number
    mission: string
    site: string
    rocket: string
  }
}
