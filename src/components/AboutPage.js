import React from "react";
import AboutPageContainer from "./styles/Aboutpage.styles";
import TableContainer from "./styles/Table.styles";

function AboutPage() {
  return (
    <main>
    <AboutPageContainer>
      <div className="description">
        <h1>Sobre a Remo Nutrients</h1>
        <p>
          {" "}
          Nossa linha de fertilizantes foi criada com os jardins comerciais e de
          grande porte em mente. No entanto, ela também é uma opção eficaz e de
          ótimo custo-benefício para os jardins menores.
          <br></br>
          <br></br>
          Nossa prioridade é simplificar o processo de mistura, combinando a
          maior quantidade possível de aditivos em um só produto. O objetivo é
          proporcionar economia e eficiência ao jardineiro, aumentando a sua
          produtividade e gerando resultados de altíssimo padrão.
        </p>
        <p>
          A Remo Nutrients nasceu de uma paixão por cultivo. A Remo “Urban Remo”
          Colasanti é mundialmente conhecida por suas habilidades de cultivo e,
          nas últimas duas décadas, ajudou milhares de pessoas a aprender como
          atingir o potencial máximo de crescimento de seus jardins.
          <br></br>
          <br></br>
          Nós criamos um sistema completo de vitaminas, minerais e extratos –
          tudo o que suas plantas precisam e nada que elas não precisem. A linha
          foi projetada para ser simples, fácil de usar e eliminar a maior parte
          do trabalho de adivinhação da nutrição das plantas. Qualquer pessoa,
          desde um novo agricultor com 4 plantas em uma tenda em sua garagem,
          até um jardim comercial de um milhão de metrosd quadrados podem usar a
          linha completa e obter resultados surpreendentes.
          <br></br>
          <br></br>
          Nossa equipe é formada por produtores experientes que se preocupam com
          os nossos produtos e são apaixonados por cultivar. Nós respondemos
          qualquer dúvida sobre o cultivo, seja relacionado a nutrientes ou não.
          Sinta-se à vontade para entrar em contato conosco em qualquer uma de
          nossas plataformas se tiver dúvidas ou apenas quiser conversar sobre
          como cultivar.
          <br></br>
          <br></br>
          Todos os nossos produtos Remo Nutrients são fabricados com cuidado em
          nossas instalações na bela Maple Ridge, BC, EUA.
        </p>
      </div>
      <div className="description">
        <h2>Tabela Posológica</h2>

        <TableContainer>
          <tr>
            <th>Produtos</th>
            <th>Unidade</th>
            <th>1º Semana</th>
            <th>2º Semana</th>
            <th>3º Semana</th>
            <th>4º Semana</th>
          </tr>
          <tr>
            <td>Remo's Micro</td>
            <td>ml/L</td>
            <td>1.25</td>
            <td>1.5</td>
            <td>1.75</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Remo's Grow</td>
            <td>ml/L</td>
            <td>1.25</td>
            <td>1.5</td>
            <td>1.75</td>
            <td>2</td>
          </tr>
          <tr>
            <td>VeloKelp</td>
            <td>ml/L</td>
            <td>1.25</td>
            <td>1.5</td>
            <td>1.75</td>
            <td>2</td>
          </tr>
          <tr>
            <td>MagNifiCal</td>
            <td>ml/L</td>
            <td>1.25</td>
            <td>1.5</td>
            <td>1.75</td>
            <td>2</td>
          </tr>
        </TableContainer>
        <p className="tablesubs">
          {" "}
          O Nature's Candy também serve para nutrir as bactérias benéficas às
          plantas durante o ciclo vegetativo. Para tanto, deve-se utilizar a
          mesma dosagem empregada nos outros produtos.
          <br></br>
          <br></br>O VeloKelp e o MagNifiCal podem ser pulverizados nas folhas a
          uma solução de até 10ml/L
        </p>

        <h2>Ciclo de Floração</h2>
        <TableContainer>
          <tr>
            <th>Produtos</th>
            <th>Unidade</th>
            <th>1º/4º Semanas</th>
            <th>5º Semana</th>
            <th>6º Semana</th>
            <th>7º Semana</th>
            <th>8º Semana</th>
          </tr>
          <tr>
            <td>Remo's Micro</td>
            <td>ml/L</td>
            <td>2</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>Flush</td>
          </tr>
          <tr>
            <td>Remo's Bloom</td>
            <td>ml/L</td>
            <td>2</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>Flush</td>
          </tr>
          <tr>
            <td>VeloKelp</td>
            <td>ml/L</td>
            <td>2</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>Flush</td>
          </tr>
          <tr>
            <td>MagNifiCal</td>
            <td>ml/L</td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>Flush</td>
          </tr>
          <tr>
            <td>Nature's Candy</td>
            <td>ml/L</td>
            <td>2</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>Flush</td>
          </tr>
          <tr>
            <td>AstroFlower</td>
            <td>ml/L</td>
            <td>2</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>2.5</td>
            <td>Flush</td>
          </tr>
        </TableContainer>
        <p className="tablesubs">
          Estacas: Umedeça o meio de cultivo a ser plantado com uma solução de
          2,5 ml / L de VeloKelp. Em seguida, insira cerca de 1 cm do final da
          estaca no Remo's Roots e coloque-o em meio de crescimento.
          <br></br>
          <br></br>
          Essas instruções são apenas uma orientação geral, podendo ser
          necessário reajustá-las ao método de cultivo empregado. Para obter
          orientações mais personalizadas, entre em contato conosco.
        </p>
      </div>
    </AboutPageContainer>
    </main>
  );
}

export default AboutPage;
