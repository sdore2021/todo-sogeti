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

resource "google_storage_bucket" "todo_bucket" {
    name = "todo-bucket-dore-001"
    location = "europe-west1"
    force_destroy = true

    uniform_bucket_level_access = true # active IAM-only access (désactive ACL)
}



resource "google_storage_bucket_iam_member" "public_read" {
    bucket = google_storage_bucket.todo_bucket.name
    role = "roles/storage.objectViewer"
    member = "allUsers"
}

#resource "google_storage_bucket_object" "date_object_pdf" {
#    name = "data.pdf"
#    bucket = google_storage_bucket.todo_bucket.name
#    source = "${path.module}/files/data.pdf"
#}

#resource "google_storage_bucket_object" "data_object_img" {
#    name = "c2.jpg"
#    bucket = google_storage_bucket.todo_bucket.name
#    source = "${path.module}/files/c2.jpg"
#}

locals {
  fichiers = fileset("${path.module}/files", "**") # inclut récursivement tous les fichiers
}

resource "google_storage_bucket_object" "fichiers" {
  for_each = {
    for fichier in local.fichiers :
    fichier => "${path.module}/files/${fichier}"
  }

  name   = each.key  # ceci garde la structure du dossier dans GCS
  bucket = google_storage_bucket.todo_bucket.name
  source = each.value
}