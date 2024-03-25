## COMMENT LANCER CE PROJET

### Lancer le projet backend

1. **Clonez le dépôt :** 
git clone https://github.com/sdore2021/todo-sogeti.git

2. **Accédez au répertoire du backend :** 
cd todo-sogeti/doto-backend

4. **Exécutez Maven pour construire le projet (en sautant les tests) :**
mvn clean install -DskipTests
   

4. **Lancez le jar exécutable :**
java -jar ./target/doto-backend-0.0.1-SNAPSHOT.jar


### Lancer le projet frontend

1. **Accédez au répertoire du frontend :**
cd todo-sogeti/todo


2. **Installez les dépendances avec npm :**
npm install


3. **Lancez le serveur de développement Angular :**
ng serve


Une fois lancé, vous pouvez accéder au projet via l'URL : [http://localhost:4200/](http://localhost:4200/)


---

**Informations optionnelles :**
- Les données sont stockés sur la base H2 pre-replire
- Pour accéder à la base de données H2 intégrée utilisée par le projet backend, vous pouvez vous connecter via l'URL suivante : [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- Les paramètres de connexion de la base de données H2 sont :
- JDBC URL : jdbc:h2:mem:tododb
- Nom d'utilisateur : todo
- Mot de passe : todo
