import "./sectionHeader.css"


const SectionHeader = ({text, position="left"}) => {
    return (
        <div className={`section-header ${position}`}>
            {text[0].toUpperCase()+text.slice(1)}
        </div>
    );
  };
  
  export default SectionHeader;