terraform {
    required_providers {
        google = {
            source = "hashicorp/google"
            version = "~> 5.0"
        }
    }
}


provider "google" {
    project = "formation-cloud-461205"
    region = "europe-west1"
}

resource "google_compute_instance" "vm_todo" {
    name = "vm-todo-instance"
    machine_type = "e2-micro"
    zone = "europe-west1-b"

    tags = ["web"]

    boot_disk {
        initialize_params {
            image = "debian-cloud/debian-12"
            size = 10
        }
    }

    network_interface {
        network = "default"
        access_config {}
    }

    metadata_startup_script = <<-EOT
     #!/bin/bash
     echo "Hello from startup script samouka" > /var/log/startup.log
     EOT
}

resource "google_compute_firewall" "default" {
    name = "allow-http"
    network = "default"

    allow {
        protocol = "tcp"
        ports = ["80"]
    }

    source_ranges = ["0.0.0.0/0"]
    target_tags = ["web"]
}

resource "google_compute_firewall" "default8080" {
    name = "allow-http-8080"
    network = "default"

    allow {
        protocol = "tcp"
        ports = ["8080"]
    }

    source_ranges = ["0.0.0.0/0"]
    target_tags = ["web"]
}

resource "google_artifact_registry_repository" "todo-repo" {
  provider     = google
  location     = "europe-west1"
  repository_id = "todo-repo"
  format       = "DOCKER"
  description  = "Mon dépôt Docker avec Terraform"
  docker_config {
    immutable_tags = false
  }
}