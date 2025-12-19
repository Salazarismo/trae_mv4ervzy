terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.5.0"
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

variable "cloudflare_api_token" { type = string }
variable "zone_id" { type = string }
variable "domain" { type = string }
variable "vercel_apex_ip" {
  type    = string
  default = "216.198.79.1"
}
variable "vercel_www_cname" {
  type    = string
  default = "b0b09c6df67ae1cb.vercel-dns-017.com."
}

resource "cloudflare_record" "apex_a" {
  zone_id = var.zone_id
  name    = "@"
  type    = "A"
  value   = var.vercel_apex_ip
  ttl     = 300
  proxied = false
}

resource "cloudflare_record" "www_cname" {
  zone_id = var.zone_id
  name    = "www"
  type    = "CNAME"
  value   = var.vercel_www_cname
  ttl     = 300
  proxied = false
}
