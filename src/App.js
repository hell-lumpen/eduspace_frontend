import './global-styles.css';
import NavBarComponent from "./component/NavBarComponent/NavBarComponent";
import UndefinedBlock from "./component/UndefinedBlock/UndefinedBlock";
import {useEffect, useRef} from "react";
import CourseCardComponent from "./component/CourseCardComponent/CourseCardComponent";
import img1 from "../src/assets/Глубокое обучение и искусственный интеллект.jpg"
import img2 from "../src/assets/Математика для DataScience.jpg"

function App() {

  const containerRef = useRef(null);
  const rightColumnRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = containerRef.current;
  //     const rightColumn = rightColumnRef.current;
  //     const containerRect = container.getBoundingClientRect();
  //     const rightColumnRect = rightColumn.getBoundingClientRect();
  //
  //     console.log(containerRect.bottom + " " + rightColumnRect.bottom);
  //     console.log(containerRect.y + " " + rightColumnRect.y);
  //     console.log(containerRect.top + " " + rightColumnRect.top);
  //
  //     const isRightColumnFixed = containerRect.bottom < rightColumnRect.bottom;
  //
  //     if (isRightColumnFixed) {
  //       rightColumn.style.position = 'fixed';
  //       rightColumn.style.bottom = '0';
  //     } else {
  //       rightColumn.style.position = 'static';
  //       rightColumn.style.bottom = 'auto';
  //     }
  //   };
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
      <div className="App" ref={containerRef}>
        <span className="nav-bar-wrapper">
          <NavBarComponent/>
        </span>
        <div className="content">
          <div className="main-content-wrapper" ref={rightColumnRef}>
            <h1>Образовательное пространство | Московский авиационный институт</h1>
            <UndefinedBlock text={"Доброе утро, долбоеб"}/>

            <div className="course-block">
              <h1>
                Мои курсы
              </h1>
              <div className="course-container">
                <CourseCardComponent courseName={"Глубокое обучение и искусственный интеллект"}
                                     description={"Изучите процесс обучения нейросетей методом обратного распространения ошибки."}
                                     prepodName={"Иванов Иван Иванович"}
                                     tags={["#онлайн-магистратура", "#кафедра_806"]}
                                     pathToIcon={img1}/>
                <CourseCardComponent courseName={"Математика для DataScience"}
                                     description={"Математика в Data Science является ключевым инструментом, обеспечивая основу для разработки и понимания алгоритмов машинного обучения."}
                                     prepodName={"Романенков Александр Михайлович"}
                                     tags={["#онлайн-магистратура", "#кафедра_806"]}
                                     pathToIcon={img2}/>
              <CourseCardComponent courseName={"Глубокое обучение и искусственный интеллект"}
                                     description={"Изучите процесс обучения нейросетей методом обратного распространения ошибки."}
                                     prepodName={"Иванов Иван Иванович"}
                                     tags={["#онлайн-магистратура", "#кафедра_806"]}
                                     pathToIcon={img1}/>
                <CourseCardComponent courseName={"Математика для DataScience"}
                                     description={"Математика в Data Science является ключевым инструментом, обеспечивая основу для разработки и понимания алгоритмов машинного обучения."}
                                     prepodName={"Романенков Александр Михайлович"}
                                     tags={["#онлайн-магистратура", "#кафедра_806"]}
                                     pathToIcon={img2}/>
              <CourseCardComponent courseName={"Глубокое обучение и искусственный интеллект"}
                                     description={"Изучите процесс обучения нейросетей методом обратного распространения ошибки."}
                                     prepodName={"Иванов Иван Иванович"}
                                     tags={["#онлайн-магистратура", "#кафедра_806"]}
                                     pathToIcon={img1}/>
                <CourseCardComponent courseName={"Математика для DataScience"}
                                     description={"Математика в Data Science является ключевым инструментом, обеспечивая основу для разработки и понимания алгоритмов машинного обучения. Математика в Data Science является ключевым инструментом, обеспечивая основу для разработки и понимания алгоритмов машинного обучения."}
                                     prepodName={"Романенков Александр Михайлович"}
                                     tags={["#онлайн-магистратура", "#кафедра_806"]}
                                     pathToIcon={img2}/>
              </div>
            </div>
          </div>
          <div className="sexy-block-wrapper">
            <div className="schedule-container">
              <h1>
                Расписание
              </h1>
              <UndefinedBlock />
            </div>

            <div className="task-container">
              <h1>
                Задания
              </h1>
              <UndefinedBlock />
              <UndefinedBlock />
              <UndefinedBlock />
            </div>
          </div>
        </div>

      </div>
  );
}

export default App;
