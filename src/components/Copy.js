const Copy = ({ hero, main, p }) => (
  <>
    {hero ? <h1>{main}</h1> : <span>{main}</span>}
    {Array.isArray(p) ? p.map((el, i) => <p key={i}>{el}</p>) : <p>{p}</p>}
  </>
);

export default Copy;
