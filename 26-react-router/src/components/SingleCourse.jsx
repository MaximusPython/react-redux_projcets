import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import courses from '../data/courses'

const SingleCourse = () => {
  const params = useParams()
  const navigate = useNavigate()

  const course = courses.find((course) => course.slug === params.slug)
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' }) // если курс не передали переходи выше на страницу courses
    }
  }, [course, navigate])

  // if (!course) {
  //   return (
  //     <>
  //       <NotFound />
  //       <Link to=".." relative="path">
  //         All Courses
  //       </Link>
  //     </>
  //   )
  // }
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All Courses in SingleCourse
      </Link>
    </>
  )
}
export default SingleCourse
