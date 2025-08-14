<img width="660" height="77" alt="image" src="https://github.com/user-attachments/assets/c5d7c929-2b74-4589-80a7-e7fb5e81edd6" />
# 📊 Netdata Monitoring – Kubernetes Guide

![Status](https://img.shields.io/badge/status-Setup%20Complete-lightgrey)  
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This guide demonstrates how to **deploy Netdata monitoring** on a Kubernetes cluster using **Helm**, including NodePort access, custom namespace, and verifying dashboards. Screenshots and commands are included for easy setup.

----------

## 🧰 Prerequisites

-   Kubernetes cluster (Kind, Minikube, or any cloud provider)
    
-   Helm v3+ installed
    
-   `kubectl` configured for your cluster
    

----------

## 🚀 Helm Installation Steps

### 1️⃣ Add Netdata Helm Repository

```bash
helm repo add netdata https://netdata.github.io/helmchart/
helm repo update

```

----------

### 2️⃣ Create Namespace

```bash
kubectl create namespace netdata

```

----------

### 3️⃣ Install Netdata with NodePort

```bash
helm install netdata netdata/netdata \
  --namespace netdata \
  --set service.type=NodePort \
  --set service.nodePort=30080

```

Or use `values.yaml`:

```yaml
service:
  type: NodePort
  nodePort: 30080

```

```bash
helm install netdata netdata/netdata -n netdata -f values.yaml

```

**Screenshot:**  
![Values YAML](resource/monitoring.png)

----------

## 📦 Verify Deployment

```bash
kubectl get pods -n netdata
kubectl get svc -n netdata

```

**Screenshot:**  
![Service List](resources/svc.png)

-   NodePort allows access from outside the cluster
    
-   Example URL: `http://<node-ip>:30080`
    
-   Netdata dashboard is **accessible without login**
    

**Screenshot:**  
![Monitoring Dashboard](resources/monitoring.png)

![Monitoring Dashboard](resources/m2.png)

----------

## 📁 Project File Structure

Here’s the folder structure for deploying Netdata in Kubernetes:

```bash
e-com
├── frontend                  # frontend of the project
├── backend          		 # backend of the project 
├── K8s                      # files to deploy the pods                    

```

> This structure ensures easy deployment and management for Netdata monitoring in your cluster.

----------

## ⚡ Quick Cleanup

```bash
helm uninstall netdata --namespace netdata
kubectl delete namespace netdata

```

----------

## ✅ Notes

-   NodePort enables browser access from your local machine
    
-   Works with any Kubernetes cluster
    
-   Screenshots guide you through Helm repo add, install, and dashboard
    

----------

## 🤝 Connect

**Kartik Naik**  
📧 [x45960@gmail.com](mailto:x45960@gmail.com)  
🐙 [GitHub](https://github.com/KARKNAIK18)

---
