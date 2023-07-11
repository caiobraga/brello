class Database {
    constructor() {
      if (Database.instance) {
        return Database.instance;
      }
  
      // Simulating database connection
      this.connect();
  
      Database.instance = this;

      var currentUser = null;

      var listaUsuarios = [];
      var litaGerentes = [];
      var listaDesenvolvedores = [];
      var listaPo = [];
      var listaProjetos = [];
      var listaQuadros = [];
      var listaCartoes = [];
    }

    

  
    
  
  }

  class GetId {
    constructor() {
      if (GetId.instance) {
        return GetId.instance;
      }
  
      this.id = 0;
  
      GetId.instance = this;
    }
  
    getId() {
      return this.id++;
    }
  }
  
  class User {
    constructor(email, password, name) {
      this.email = email;
      this.password = password;
      this.name = name;
    }
  
    
  }
  
  class Manager extends User {
    constructor(email, password, name, department) {
      super(email, password, name);
      this.department = department;
    }
  
    promoteDeveloper(developerEmail) {
      // Aqui você pode adicionar a lógica para promover um desenvolvedor a gerente
    }
  }
  
  class Developer extends User {
    constructor(email, password, name, programmingLanguage) {
      super(email, password, name);
      this.programmingLanguage = programmingLanguage;
    }
  
  }
  
  class ProductOwner extends User {
    constructor(email, password, name, project) {
      super(email, password, name);
      this.project = project;
    }
  }

  class Projeto {
    constructor(nome, descricao, gerente) {
      this.idProjeto = GetId().getId();
      this.nome = nome;
      this.descricao = descricao;
      this.dataInicio = dataInicio;
      this.dataFim = dataFim;
      this.gerente = gerente;
    }
  }
  
  // Exemplo de uso
  /*const db = new Database();
  
  const user1 = new User('user1@example.com', 'password123', 'User 1');
  user1.save();
  
  const manager1 = new Manager('manager1@example.com', 'password456', 'Manager 1', 'IT');
  manager1.save();
  manager1.promoteDeveloper('developer1@example.com');
  
  const developer1 = new Developer('developer1@example.com', 'password789', 'Developer 1', 'JavaScript');
  developer1.save();
  developer1.code();
  
  const po1 = new ProductOwner('po1@example.com', 'passwordabc', 'Product Owner 1', 'Project X');
  po1.save();
  po1.prioritizeFeatures(['Feature 1', 'Feature 2']);*/
  