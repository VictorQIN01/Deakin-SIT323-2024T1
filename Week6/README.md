## Week 6 Tasks Documentation
### 6.1P

- **Pod** can be created using command `kubectl apply -f ./createPods.yaml` 
- A set number of pods (as Replica) can be created using command `kubectl apply -f ./createReplicaSet.yaml`. Replica info can be checked using the command `kubectl get rs`

**Application Creation:**
1. `kubectl apply -f ./createDeployment.yaml` was used to create a deployment of the application inside a container with all the tag and port configurations.
2. A **Service** was created to enable the interface between customers and all the deployments using the command `kubectl apply -f ./createService.yaml`.


### 6.2C

1. The pods created in **Task 6.1P** can be checked using `kubectl get pods`, and `kubectl get svc` for the services
2. The application was tested in the browser with the link[https://localhost:8037/addTwoNumber?n1=323&n2=787], with the result being printed on screen`{"statuscocde":200,"data":1110}`.
3. Port 8037 was used instead of 8000 (as the internal port number specified for the docker image `victorqin01/node-calculator-app:1.1.1`) with port mapping during the creation of Service.