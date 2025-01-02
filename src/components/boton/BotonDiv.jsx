export default function BotonDiv({ tituloBoton, onClick, style }) {
  return (
    <div onClick={onClick} className="botonCard" style={{ ...style }}>
      {tituloBoton}
    </div>
  );
}
