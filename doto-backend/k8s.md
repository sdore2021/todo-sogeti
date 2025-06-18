# pour execulter les commandes docker dans le depot de minikube sur le terminal ouvert est:
& minikube -p minikube docker-env --shell powershell | Invoke-Expression

# rebuilder image docker
docker build -t mon-backend .

# redployé dans sur k8s
kubectl rollout restart deployment backend-deployment

# rediriger la requete
kubectl port-forward svc/backend-service 8080:8080

# afficher les pods
kubectl get pods -l app=backend

# supprimer une instance de pod
kubectl delete pod backend-deployment-XXXXX

# afficher le port et ip du service
kubectl get svc backend-service

# ouvir dans le nagivateur
minikube service backend-service


