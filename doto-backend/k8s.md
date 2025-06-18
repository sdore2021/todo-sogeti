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
minikube tunnel si on utilise ingress

# demarer le minikube
minikube start --driver=docker

# appliquer une config
kubectl apply -f ingress.yaml

# affichier tous les ingress
kubectl get ingress --all-namespaces

# se connecter
kubectl exec -it <POD_FRONTEND> -- ash
curl backend-service:8080/pod


# supprimer un ingress
kubectl delete ingress todo-ingress

# tout supprimer
kubectl delete all --all --all-namespaces



sur le cloud de google
# creation du cluster avec deux noueds
gcloud container clusters create todo-cluster --num-nodes=2 --zone=europe-west1-b

# se connecter
gcloud container clusters get-credentials todo-cluster --zone=europe-west1-b
kubectl config current-context

# creation d'un depot docker dans artifact google cloud
 gcloud artifacts repositories create todo-repo --repository-format=docker --location=europe-west1
 




