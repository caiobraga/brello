


import {Database,Developer, GetId, Manager, ProductOwner, Projeto, User} from './data/bd';
describe('Database', () => {
  

  beforeEach(() => {
    const database = new Database();
  });

  // test('should create a new project', () => {
    

  //   const projeto = new Projeto('Projeto 1', 'Descrição do Projeto 1', 'Gerente 1');
  //   database.addProjectInDatabase(projeto);

  //   const projects = database.fetchProjectsFromDatabase();

  //   expect(projects.length).toBe(1);
  //   expect(projects[0].nome).toBe('Projeto 1');
  //   expect(projects[0].descricao).toBe('Descrição do Projeto 1');
  //   expect(projects[0].gerente).toBe('Gerente 1');
  // });

  test('should create a new project', () => {
    const database = new Database();
    const user = new User('emailteste@gmail.com', 'Senhateste', 'NomeTeste', 'numeroTeste', '11111');
    database.addUserLista(user);

    const listaUser = database.getListaUsuarios();
    const tamanho = listaUser.length;

    const nomeListaUser = listaUser[0].name;
    const cpf = listaUser[0].cpf;
    const email = listaUser[0].email;
    const senha = listaUser[0].password;

    expect(tamanho).toBe(1);
    expect(nomeListaUser).toBe('NomeTeste');
    expect(cpf).toBe('11111');
    expect(email).toBe('emailteste@gmail.com');
    expect(senha).toBe('Senhateste');
    
  });

  test('should create a new project', () => {
    const database = new Database();
    const projeto = new Projeto('Projeto Teste', 'Descrição do Projeto', 'Gerente Teste');
    database.addProjectInDatabase(projeto);
  
    const listaProjetos = database.fetchProjectsFromDatabase();
    const tamanho = listaProjetos.length;
  
    const projetoAdicionado = listaProjetos[0];
    const nomeProjeto = projetoAdicionado.nome;
    const descricaoProjeto = projetoAdicionado.descricao;
    const gerenteProjeto = projetoAdicionado.gerente;
  
    expect(tamanho).toBe(1);
    expect(nomeProjeto).toBe('Projeto Teste');
    expect(descricaoProjeto).toBe('Descrição do Projeto');
    expect(gerenteProjeto).toBe('Gerente Teste');
  });


  test('should promote a developer to manager', () => {
    const database = new Database();
    const developer = new Developer('dev@example.com', 'password', 'Dev', 'JavaScript');
    database.addUserLista(developer);

    const manager = new Manager('manager@example.com', 'password', 'Manager', 'IT');
    database.addUserLista(manager);

    manager.promoteDeveloper(developer.email);

    expect(manager.department).toBe('IT');
    expect(manager.name).toBe('Manager');
    expect(developer.name).toBe('Dev');
  });

  test('should add a new project', () => {
    const manager = new Manager('manager@example.com', 'password', 'Manager', 'IT');
    database.addUserLista(manager);

    const project = new Projeto('Project X', 'Description', manager);
    database.addProjectInDatabase(project);

    const projects = database.fetchProjectsFromDatabase();

    expect(projects.length).toBe(1);
    expect(projects[0].nome).toBe('Project X');
    expect(projects[0].gerente).toBe(manager);
  });
});

describe('GetId', () => {
  test('should generate unique IDs', () => {
    const getId = new GetId();
    const id1 = getId.getId();
    const id2 = getId.getId();
    const id3 = getId.getId();

    expect(id1).toBe(0);
    expect(id2).toBe(1);
    expect(id3).toBe(2);
  });



  // Adicione mais testes aqui
});