import styled from "@emotion/styled";

const Contenedor = styled.div`
color: #FFF;
font-family: 'Lato',sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }

`;

const Precio= styled.p`
    font-size: 20px;
    span {
        font-weight: 700;
    }
`;

const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANDEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        {" "}
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <>
          El precio mas alto del dia es: <span>{HIGHDAY}</span>
        </>
        <Texto>
          El precio mas bajo del dia es: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANDEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
