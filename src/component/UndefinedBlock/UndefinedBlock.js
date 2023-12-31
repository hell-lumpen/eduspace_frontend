import "./UndefinedBlock.css";

const UndefinedBlock = ({text}) => {
  const content = text ? text : "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.";

  return (
      <div className="block-wrapper">
        {content}
      </div>
  )
}

export default UndefinedBlock;