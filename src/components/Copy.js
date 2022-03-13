const Copy = ({ hero, main, p }) => (
  <>
    {hero ? <h1>{main}</h1> : <span>{main}</span>}
    <p>{p}</p>
  </>
);

export default Copy;
