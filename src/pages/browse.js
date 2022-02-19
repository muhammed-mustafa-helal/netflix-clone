import { useContent } from "../hooks"
import selectionFilter from '../utils/selection-filter'

const Browse = () => {
  const { series } = useContent('series')
  const { films } = useContent('films')

  const slides = selectionFilter({ series, films })
  return (
    <div>Hello from Browse</div>
  )
}

export default Browse