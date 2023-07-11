


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
    const user = new User('emailteste@gmail.com', 'Senhateste', 'NomeTeste', '339887521', '11111');
    database.addUserLista(user);

    const listaUser = database.getListaUsuarios();
    const tamanho = listaUser.length;

    const nomeListaUser = listaUser[0].name;
    const cpf = listaUser[0].cpf;
    const email = listaUser[0].email;
    const senha = listaUser[0].password;
    const numero = listaUser[0].phone;

    expect(tamanho).toBe(1);
    expect(nomeListaUser).toBe('NomeTeste');
    expect(cpf).toBe('11111');
    expect(email).toBe('emailteste@gmail.com');
    expect(senha).toBe('Senhateste');
    expect(numero).toBe('339887521');
    
  });


  // Adicione mais testes aqui
});