# main.tf

terraform {
    required_version = ">= 1.0.0"
}

output "hello" {
    value = "Bonjour Sam!"
}