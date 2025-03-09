# Fase de build
FROM maven:3.8.6-openjdk-17-slim AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o conteúdo do projeto
COPY . .

# Rodar o build Maven, pulando os testes para acelerar o processo
RUN mvn clean install -DskipTests

# Fase de runtime
FROM openjdk:17-jdk-slim

# Expor a porta 8080
EXPOSE 8080

# Copiar o JAR gerado da fase de build
COPY --from=build /app/target/foodbridge-0.0.1.jar app.jar

# Definir o ponto de entrada
ENTRYPOINT [ "java", "-jar", "app.jar" ]
