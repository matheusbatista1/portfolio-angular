import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements AfterViewInit {
  tituloPagina: string = "Currículo";

  dadosPessoais = {
    nome: 'Matheus dos Santos Batista',
    dataNascimento: '15/09/1998',
    residencia: 'Jandira-SP, Brasil',
    idiomas: [
      { nome: 'Português', nivel: 'Nativo' },
      { nome: 'Inglês', nivel: 'Básico' }
    ],
    foto: '../../../assets/img/matheus-profile.jpg'
  };

  sobreMim = [
    'Desde jovem, nutri uma profunda paixão pela tecnologia, o que me levou a desenvolver uma afinidade inabalável com a informática em geral. Foi durante o meu primeiro encontro com o mundo do desenvolvimento de software que percebi que essa era a minha verdadeira vocação. Ali, encontrei o meio ideal para expressar minha criatividade, criando algo novo e resolvendo desafios complexos.',
    'Essa paixão me conduziu à minha jornada acadêmica, onde embarquei em um curso de Análise e Desenvolvimento de Sistemas. Durante esses anos, realizei diversos projetos de sucesso que me proporcionaram uma base sólida de conhecimento. Além disso, conquistei uma série de certificações em cursos relacionados ao desenvolvimento de software, fortalecendo ainda mais minha expertise.',
    'Atualmente, continuo minha jornada de aprendizado, buscando aprimorar minhas habilidades por meio de estudos autodidatas, mantendo-me sempre atualizado nas mais recentes tendências tecnológicas. Meu objetivo é crescer no mercado de trabalho, aplicando meu conjunto de conhecimentos em colaboração com equipes experientes, e contribuindo para o sucesso de projetos desafiadores.',
    'Estou ansioso para enfrentar novos desafios e expandir minha carreira, sempre com a paixão pela tecnologia como minha bússola e a vontade de superar limites como meu motor.'
  ];

  formacaoAcademica = [
    { curso: 'Análise e Desenvolvimento de Sistemas', titulo: 'Tecnólogo', instituicao: 'Universidade Paulista', periodo: '09/2022 - 09/2024' }
  ];

  experienciaTrabalho = [
    { cargo: 'Desenvolvedor Back-End Jr', empresa: 'Linked Tech', local: 'São Paulo, SP', periodo: '03/2024 - Atualmente' },
    { cargo: 'Desenvolvedor Front-End Jr', empresa: 'Doutores da Web | Grupo Ideal Trends', local: 'São Paulo, SP', periodo: '11/2023 - 03/2024' },
    { cargo: 'Monitor de Desenvolvimento Infantil', empresa: 'Prefeitura Municipal de Itapevi', local: 'Itapevi, SP', periodo: '05/2022 - 11/2023' },
    { cargo: 'Operador de Loja', empresa: 'Grupo Pão de Açúcar', local: 'Santana de Parnaíba, SP', periodo: '08/2019 - 01/2021' }
  ];

  habilidadesInterpessoais = [
    'Fluência digital', 'Pensamento analítico e inovador', 'Liderança e influência social', 'Raciocínio lógico', 'Solução de problemas', 'Ideação', 'Resiliência'
  ];

  habilidades = [
    { nome: 'JavaScript', descricao: 'Execução de comandos básicos e avançados, condições, repetições, variáveis compostas, arrays, funções avançadas, objetos e prototypes, programação orientada a objetos, promises, módulos. Utilização de Ajax, NodeJS, Express e webpack.' },
    { nome: 'HTML5', descricao: 'Criação e formatação de listas, links, tags, imagens, tabelas, formulários e frames.' },
    { nome: 'CSS3', descricao: 'Manipulação das principais propriedades do CSS, dos agrupamentos e dos aninhamento de elementos.' },
    { nome: 'Git e Github', descricao: 'Formação e clonagem de repositórios e versionamento de projetos.' },
    { nome: 'Linguagem C', descricao: 'Execução e manipulação de funções, loops, estrutura de decisão, estruturas de dados, arquivos e ponteiros.' },
    { nome: 'Linguagem C#', descricao: 'Domínio sobre variáveis, concatenação, conversão, inferência, expressões e programação orientada a objetos.' },
    { nome: 'Linguagem Java', descricao: 'Conhecimento sobre classes, fluxos de controles, herança, POO, interface gráfica e integração ao SQL.' },
    { nome: 'MySQL', descricao: 'Criação de banco de dados, manipulação de tabela, realização de CRUD, conhecimento sobre comandos, chaves estrangeiras, JOIN, INNER JOIN e modelo relacional. Utilização de PHPMyAdmin.' },
    { nome: 'Gestão de Infraestrutura de TI', descricao: 'Compreensão sobre conceitos, tipos de dados, estruturas e metodologias de banco de dados.' }
  ];

  certificacoes = [
    { nome: 'JavaScript', descricao: 'Curso em Video - 05/2022' },
    { nome: 'Git e GitHub', descricao: 'Curso em Video - 05/2022' },
    { nome: 'MySQL', descricao: 'Curso em Video - 06/2022' },
    { nome: 'Gestão de Infraestrutura de TI', descricao: 'FIAP - 11/2022' },
    { nome: 'Ética no Desenvolvimento de Sistemas', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'Linguagem de Programação C# - Básico', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'Linguagem de Programação C# - Avançado', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'Introdução ao Javascript', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'Inovando com CSS', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'HTML - Básico', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'HTML - Avançado', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'Crie um site simples usando HTML, CSS e JavaScript', descricao: 'Fundação Bradesco - 01/2023' },
    { nome: 'Linguagem de Programação Java - Básico', descricao: 'Fundação Bradesco - 02/2023' },
    { nome: 'Linguagem de Programação Java - Avançado', descricao: 'Fundação Bradesco - 02/2023' },
    { nome: 'Métodos ágeis de A a Z: o curso completo', descricao: 'Udemy - 06/2023' },
    { nome: 'Curso completo de APIs com Nodejs, Express + MongoDB, SQL', descricao: 'Udemy - 06/2023' },
    { nome: 'Desenvolvimento Responsivo com HTML5, CSS3 e JavaScript', descricao: 'Udemy - 08/2023' },
    { nome: 'Web Design Completo em HTML/CSS + Criação do seu Portfolio', descricao: 'Udemy - 10/2023' },
  ];

  contato = {
    email: 'matheus.sbatista@outlook.com',
    telefone: '+55 (11) 95906-5798'
  };

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('.collapsible');
    sections.forEach(section => {
      const conteudo = section.querySelector('.collapsible-conteudo');
      const header = section.querySelector('.collapsible-header');
      header?.addEventListener('click', () => {
        section.classList.toggle('active');
      });
      conteudo?.addEventListener('click', () => {
        section.classList.remove('active');
      });
    });
  }
}
