import './global-styles.css';
import NavBarComponent from "./component/NavBarComponent/NavBarComponent";
import UndefinedBlock from "./component/UndefinedBlock/UndefinedBlock";
import {useEffect, useRef} from "react";

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
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
          </div>
          <div className="sexy-block-wrapper">
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
            <UndefinedBlock />
          </div>
        </div>

      </div>
  );
}

export default App;
