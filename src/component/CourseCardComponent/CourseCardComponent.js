import "./CourseCardComponent.css";

const CourseCardComponent = ({courseName, description, prepodName, tags, pathToIcon}) => {
  return (
      <div className="course-card-container">
        <h2>
          {courseName}
        </h2>
        <div className="card-content">

          <img src={pathToIcon} alt="course-icon"/>

          <div className="card-text-content">
            <div className="card-text-content-description">
              {description}
            </div>
            <div className="card-text-content-prepod">
              Преподаватель: {prepodName}
            </div>
            <div className="tags-container">
              {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
              ))}
            </div>
          </div>
        </div>

      </div>
  )
}

export default CourseCardComponent;