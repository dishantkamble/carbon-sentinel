FROM golang:latest as build

  WORKDIR /app

  ENV CGO_ENABLED=1 \
      GOOS=linux

  COPY go.mod go.sum ./
  RUN --mount=type=cache,target=/go/pkg/mod \
      --mount=type=cache,target=/root/.cache/go-build \
      go mod download -x

FROM build AS dev

  RUN go install github.com/cosmtrek/air@latest && \
      go install github.com/go-delve/delve/cmd/dlv@latest

  COPY . .

  CMD ["air", "-c", ".air.toml"]

FROM build AS production-build

  RUN useradd -u 1001 nonroot

  COPY . .
  RUN go build \
      -ldflags="-linkmode external -extldflags -static" \
      -tags netgo \
      -o carbon-sentinel

FROM alpine:latest as certificates

  RUN apk --update add ca-certificates

FROM scratch as production

  ENV GIN_MODE=release

  COPY --from=certificates /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
  COPY --from=production-build /etc/passwd /etc/passwd
  COPY --from=production-build /app/carbon-sentinel carbon-sentinel

  USER nonroot

  EXPOSE 8080

  ENTRYPOINT [ "/carbon-sentinel"]
