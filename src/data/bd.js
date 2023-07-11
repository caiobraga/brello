export class Database {
        static instance = new this();
        constructor() {
        if (Database.instance) {
            return Database.instance;
        }
    
        
    
        Database.instance = this;

        this.currentUser = null;

        this.listaUsuarios = [];
        this.litaGerentes = [];
        this.listaDesenvolvedores = [];
        this.listaPo = [];
        this.listaProjetos = [];
        this.listaQuadros = [];
        this.listaCartoes = [];
        }

        
        getListaUsuarios(){
            return this.listaUsuarios
        }



        
        addUserLista(user) {
            this.listaUsuarios.push(user);
            console.log(`Usuário ${user.name} adicionado, email: ${user.email}.`);
          }

          addProjectInDatabase(projeto){
            this.listaProjetos.push(projeto);
            console.log(`Projeto ${projeto.nome} adicionado.`);
          }
    
        fetchProjectsFromDatabase() {
            // Simulating fetching projects from the database
            // Replace this implementation with your actual database query
        
            // Assuming listaProjetos contains the projects in the database
            return this.listaProjetos;
        }
    
    }

    export class GetId {
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
    
    export class User {
        constructor(email, password, name, phone, cpf) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.cpf = cpf;
        this.phone = phone;
        }
        
        
    }
    
    export class Manager extends User {
        constructor(email, password, name, department) {
        super(email, password, name);
        this.department = department;
        }
    
        promoteDeveloper(developerEmail) {
        // Aqui você pode adicionar a lógica para promover um desenvolvedor a gerente
        }
    }
    
    export class Developer extends User {
        constructor(email, password, name, programmingLanguage) {
        super(email, password, name);
        this.programmingLanguage = programmingLanguage;
        }
    
    }
    
    export class ProductOwner extends User {
        constructor(email, password, name, project) {
        super(email, password, name);
        this.project = project;
        }
    }

    export class Projeto {
        constructor(nome, descricao, gerente) {
        this.idProjeto = GetId().getId();
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = new Date();
        this.dataFim = null;
        this.gerente = gerente;
        this.desenvolvedores = [];
        }
    
        adicionarDesenvolvedor(desenvolvedor) {
        this.desenvolvedores.push(desenvolvedor);
        console.log(`Desenvolvedor ${desenvolvedor.nome} adicionado ao projeto ${this.nome}.`);
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
    