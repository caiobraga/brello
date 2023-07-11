



describe('Database', () => {
  let database;

  beforeEach(() => {
    database = new Database();
  });

  test('should create a new project', () => {
    const projeto = new Projeto('Projeto 1', 'Descrição do Projeto 1', 'Gerente 1');
    database.listaProjetos = [projeto];

    const projects = database.fetchProjectsFromDatabase();

    expect(projects.length).toBe(1);
    expect(projects[0].nome).toBe('Projeto 1');
    expect(projects[0].descricao).toBe('Descrição do Projeto 1');
    expect(projects[0].gerente).toBe('Gerente 1');
  });

  // Adicione mais testes aqui
});