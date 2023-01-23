import c from './page_header.module.scss';

function PageHeader (props){
  const {whiteLetters, yellowLetters, shadowWord} = props;

  return (
    <div className={c.pageHeader}>
      <h1>
        {whiteLetters}

        <span>
          {yellowLetters}
        </span>    
      </h1>

      <span className={c.shadow}>
        {shadowWord}
      </span>
    </div>
  );
};

export default PageHeader;