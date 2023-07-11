


import {Database,Developer, GetId, Manager, ProductOwner, Projeto, User} from './data/bd';
describe('Database', () => {
  

  beforeEach(() => {
    const database = new Database();
  });

  test('should create a new project', () => {
    

    const projeto = new Projeto('Projeto 1', 'Descrição do Projeto 1', 'Gerente 1');
    database.addProjectInDatabase(projeto);

    const projects = database.fetchProjectsFromDatabase();

    expect(projects.length).toBe(1);
    expect(projects[0].nome).toBe('Projeto 1');
    expect(projects[0].descricao).toBe('Descrição do Projeto 1');
    expect(projects[0].gerente).toBe('Gerente 1');
  });

  test('should create a new project', () => {
    const user = new User('Emailteste', 'Senhateste', 'NomeTeste', 'numeroTeste', 'cpfTeste');

    const ListaUser = database.getListaUsuarios;

    expect(projects.length).toBe(1);
    expect(projects[0].nome).toBe('Projeto 1');
    expect(projects[0].descricao).toBe('Descrição do Projeto 1');
    expect(projects[0].gerente).toBe('Gerente 1');
  });


  // Adicione mais testes aqui
});