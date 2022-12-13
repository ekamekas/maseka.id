## Build SLO Alert with Promtail and Loki

Project ini merupakan bagian dari artikel dengan judul yang sama di [Sini](https://maseka.id/slo-trigger-dengan-promtail-dan-loki/).

### Prerequisites

Untuk memaksimalkan deploy project ini, diharapkan telah menginstall

- Docker
- Docker Compose

### Build

Buat image aplikasi terlebih dahulu dengan komando

```shell
cd app/src;
docker build -t ekamekas/promtail-demo-app .;
cd ../../;
```

Jika ingin menggunakan tag yang berbeda, harap file di ops/docker-compose.yaml disesuaikan.

### Run

Jalankan menggunakan docker compose dengan komando

```shell
docker compose -f ops/docker-compose.yaml up -d
```

### Stop and Delete

Menghentikan dan menghapus komponen yang dibuat dengan komando

```shell
docker compse -f ops/docker-compse.yaml down -v
```