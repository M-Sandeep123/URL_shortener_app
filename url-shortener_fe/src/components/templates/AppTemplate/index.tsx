import Header from '../../organisms/Header';

const MainTemplate = ({ Children }:any) => {
  return (
    <div>
      <Header />
      <div style={{ padding: '1rem' }}>
       {Children}
      </div>
    </div>
  );
};

export default MainTemplate;
